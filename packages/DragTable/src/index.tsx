import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';
// import { ReactSortable } from "react-sortablejs";
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

import Checkbox from './Checkbox';
import Spin from './Spin';
import SettingModal, { insertOfIndex } from './SettingModal';
import { Empty } from './Icon';

import './index.less';

const DragTable = forwardRef((props: any, ref) => {
  const {
    onResize,
    onSort,
    footer,
    pagination,
    cacheKey = '',
    loading = false,
    rowSelection = {},
    data = [],
    cacheDisabled,
  } = props;
  // const tableHeader = useRef()
  const initState = useRef<any>({});

  const wrapRef = useRef<any>({});
  const tableContainer = useRef<any>({});
  const tableBody = useRef<any>({});
  const tableHeader = useRef<any>({});
  const tableHeaderScroller = useRef<any>({});
  const allCheckbox = useRef<any>({});

  const fixedLeft = useRef<any>([]);
  const fixedRight = useRef<any>([]);
  const notFixed = useRef<any>([]);
  const hiddenColumns = useRef<any>([]);
  const defaultColumns = useRef<any>(null);

  const rowSelect = useRef<any>();
  const settingRef = useRef<any>();
  const debounceTimer = useRef<any>();
  const resizeRef = useRef<any>({});

  const scrollHandle = useRef<any>();

  const cacheHash = useRef(`table_columns_${cacheKey + location.pathname}`);

  const [columns, setColumns] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [checkedAll, setCheckedAll] = useState<boolean>(false);
  const parentSelectedRowsKeys =
    (rowSelection && rowSelection.selectedRowKeys) || [];

  useImperativeHandle(ref, () => ({
    openSetting: () => {
      settingRef.current = SettingModal({
        left: fixedLeft.current,
        right: fixedRight.current,
        notFixed: notFixed.current,
        hiddenColumns: hiddenColumns.current,
        defaultColumns: defaultColumns.current,
        onSubmit: (nextColumns: any) => {
          settingRef.current.destroy();
          setColumns(setColumnsAttr(nextColumns));
          setTimeout(() => setWrapScrollState(tableBody.current), 0);
        },
      });
      return settingRef.current;
    },
    getCacheHash: () => {
      return cacheHash.current;
    },
  }));

  useEffect(() => {
    if (props.columns) {
      let nextColumns: any = props.columns.map((d: any, i: number) => {
        d.ukey = d.dataIndex + '_' + i;
        return d;
      });
      /* 兼容 columnsState 配置 */
      if (props.columnsState) {
        for (let key in props.columnsState) {
          let val = props.columnsState[key];
          let item = nextColumns.find((d: any) => d.dataIndex === key);
          if (val.show === false && item) item.hidden = true;
        }
      }
      defaultColumns.current = Array.from(nextColumns);
      let cacheColumns = cacheDisabled
        ? null
        : localStorage.getItem(cacheHash.current);
      if (cacheColumns) {
        nextColumns = decodeCacheColumns(cacheColumns, nextColumns);
      }
      setColumns(setColumnsAttr(nextColumns));
    }
    return () => {};
  }, [props.columns]);

  useEffect(() => {
    if (columns.length) {
      // 设置浮动 header 高度，隐藏滚动条
      setHeaderHeight();
      // localStorage.setItem(cacheHash.current, JSON.stringify(columns))
      if (!cacheDisabled)
        localStorage.setItem(
          cacheHash.current,
          encodeCacheColumns([...columns, ...hiddenColumns.current]),
        );
    }
    return () => {};
  }, [columns]);

  useEffect(() => {
    // console.log(rowSelection.selectedRowKeys)
    if (
      !parentSelectedRowsKeys ||
      JSON.stringify(parentSelectedRowsKeys) === JSON.stringify(selectedRowKeys)
    )
      return;
    let nextSelectedRows = selectedRows.filter(
      (d: any) => !!parentSelectedRowsKeys.find((id: any) => id === d.id),
    );
    setSelectedRowKeys(parentSelectedRowsKeys);
    setSelectedRows(nextSelectedRows);
    allCheckbox.current.setIndeterminate(!!nextSelectedRows.length);
    // TODO 如何做全选判断?
    if (!nextSelectedRows.length) setCheckedAll(false);
    return () => {};
  }, [parentSelectedRowsKeys]);

  useEffect(() => {
    rowSelection &&
      rowSelection.onChange &&
      rowSelection.onChange(selectedRowKeys, selectedRows);
    return () => {};
  }, [selectedRows]);

  useEffect(() => {
    if (props.sticky) onScrollUpdateHeaderSticky();
    setTimeout(() => {
      if (tableBody.current) setWrapScrollState(tableBody.current);
    }, 0);
    return () => {
      if (scrollHandle.current)
        document.removeEventListener('scroll', scrollHandle.current);
    };
  }, []);
  // 0 key, 1 index, 2 fixed, 3 hidden, 4 width
  const encodeCacheColumns = (cols: any[]) => {
    return cols
      .filter((d) => !!d.ukey && d.type !== 'selection')
      .map((d) => {
        return `${d.ukey}&${d.index}&${d.fixed || ''}&${d.hidden ? 0 : 1}&${
          d.width
        }`;
      })
      .join(',');
  };

  const decodeCacheColumns = (str: string, arr: any[]) => {
    let cols = [];
    for (let d of str.split(',')) {
      let info = d.split('&');
      let data = arr.find((d) => d.ukey === info[0]);
      let item = {
        ...data,
        index: +info[1],
        hidden: info[3] === '0' ? true : false,
      };
      if (info[4]) {
        item.width = +info[4];
      }
      if (info[2]) {
        item.fixed = info[2];
      } else {
        delete item.fixed;
      }
      cols.push(item);
    }
    return cols;
  };

  // 根据配置，设置固定列定位值
  const setColumnsAttr = (columns: any[]) => {
    // console.log(columns)
    let left: any[] = (fixedLeft.current = []);
    let right: any[] = (fixedRight.current = []);
    let normal: any[] = (notFixed.current = []);

    columns = columns.filter((d) => d.type !== 'selection');

    hiddenColumns.current = [];

    let i = 0;
    for (let d of columns) {
      d.style = d.cls = null;
      if (typeof d.index === 'undefined') {
        d.index = i;
        i++;
      }
      if (d.hidden) {
        hiddenColumns.current.push(d);
        continue;
      }
      if (d.fixed === 'left') {
        left.push(d);
      } else if (d.fixed === 'right') {
        right.push(d);
      } else {
        normal.push(d);
      }
    }

    setRowSelection();

    setWrapFixedState();

    left = setLeftStyle();
    right = setRightStyle();

    return mergeColumns({ left, right, normal });
  };

  const setRowSelection = () => {
    if (props.rowSelection) {
      let selectedRow = (rowSelect.current = {
        type: 'selection', // 这个地方可以不用写 key，type 就相当于 key
        width: 55,
      });
      if (fixedLeft.current.length) {
        fixedLeft.current.unshift(selectedRow);
      } else {
        notFixed.current.unshift(selectedRow);
      }
    }
  };

  const setWrapFixedState = () => {
    let wrapCls = Array.from(wrapRef.current.classList).filter(
      (d: any) =>
        !/^shj-table-has-fix-left$|^shj-table-has-fix-right$/g.test(d),
    );
    if (fixedLeft.current.length) wrapCls.push('shj-table-has-fix-left');
    if (fixedRight.current.length) wrapCls.push('shj-table-has-fix-right');
    wrapRef.current.className = wrapCls.join(' ');
  };

  const setLeftStyle = () => {
    let list = fixedLeft.current;
    let offset = 0;
    for (let i = 0; i < list.length; i++) {
      list[i].style = { left: offset + 'px' };
      let cls = 'drag-col-fixed-left';
      if (i === list.length - 1) {
        cls = `${cls} ${cls}-last`;
      }
      list[i].cls = cls;
      offset += list[i].width;
    }
    return list;
  };

  const setRightStyle = () => {
    let list = fixedRight.current;
    let offset = 0;
    for (let i = list.length - 1; i >= 0; i--) {
      list[i].style = { right: offset + 'px' };
      let cls = 'drag-col-fixed-right';
      if (i === 0) {
        cls = `${cls} ${cls}-last`;
      }
      list[i].cls = cls;
      offset += list[i].width;
    }
    return list;
  };

  const mergeColumns = ({
    left = fixedLeft.current,
    right = fixedRight.current,
    normal = notFixed.current,
  } = {}) => {
    return [...left, ...normal, ...right];
  };

  const setHeaderHeight = () => {
    let rect = tableHeader.current
      .querySelector('.shj-header-table')
      .getBoundingClientRect();
    if (rect.height) {
      tableHeader.current.style.height = rect.height + 'px';
      initState.current.isInitHeaderHeight = true;
    }
  };

  const onScrollUpdateHeaderSticky = () => {
    let header = tableHeader.current;
    let scroller = tableHeader.current.firstElementChild;
    let body = tableBody.current;
    let table = body.querySelector('.shj-body-table');
    let scrollBar = header.querySelector('.header-scroll-bar');

    scrollHandle.current = () => {
      let bodyRect = body.getBoundingClientRect();
      let tableRect = table.getBoundingClientRect();
      // console.log(tableRect.top, header.offsetHeight)
      if (
        tableRect.top &&
        header.offsetHeight &&
        tableRect.top - header.offsetHeight <= 0
      ) {
        if (!initState.current.isInitHeaderHeight) setHeaderHeight();
        scrollBar.style.height = '30px';
        header.style.position = 'fixed';
        header.style.overflow = 'hidden';
        if (bodyRect.width) header.style.width = bodyRect.width + 'px';
        // scroller.style.overflow = 'auto'
        scroller.style.overflow = 'hidden';
        body.style.paddingTop = header.offsetHeight + 'px';

        // 防止头部超出表格范围
        if (Math.abs(tableRect.top) + header.offsetHeight > tableRect.height) {
          header.style.top =
            tableRect.height -
            (Math.abs(tableRect.top) + header.offsetHeight) +
            'px';
        } else {
          header.style.top = header.style.bottom = '';
        }

        if (scroller && tableContainer.current) {
          if (scroller.scrollLeft !== tableContainer.current.scrollLeft) {
            scroller.scrollLeft = tableContainer.current.scrollLeft;
          }
        }
      } else {
        scrollBar.style.height =
          body.style.paddingTop =
          scroller.style.overflow =
          header.style.position =
          header.style.overflow =
          header.style.width =
            '';
      }
    };
    scrollHandle.current();
    document.addEventListener('scroll', scrollHandle.current);
  };

  const onBodyScroll = (ev: any) => {
    const setScrollLeft = (target: any) => {
      if (ev !== null) {
        if (
          target === tableContainer.current &&
          ev.target.scrollLeft !== tableHeaderScroller.current.scrollLeft
        ) {
          tableHeaderScroller.current.scrollLeft = target.scrollLeft;
        }
      }
    };
    setScrollLeft(ev.target);
    // console.log(ev.target)
    // console.log(tableHeader.current.scrollLeft, ev.target.scrollLeft)
    setWrapScrollState(tableBody.current, ev.target);
  };

  const setWrapScrollState = (el: any, scroller = tableContainer.current) => {
    let childWidth = el.firstElementChild.offsetWidth;
    let max = Math.abs(scroller.offsetWidth - childWidth);
    let cls = Array.from(wrapRef.current.classList).filter(
      (d: any) => !/^shj-table-ping-left$|^shj-table-ping-right$/g.test(d),
    );
    if (max) {
      if (scroller.scrollLeft > 0 && scroller.scrollLeft < max) {
        cls.push('shj-table-ping-left');
        cls.push('shj-table-ping-right');
      } else if (scroller.scrollLeft > 0) {
        cls.push('shj-table-ping-left');
      } else {
        cls.push('shj-table-ping-right');
      }
    }

    wrapRef.current.className = cls.join(' ');
  };

  const _onResizeStart = (d: any, i: number, e: any, { node }: any = {}) => {
    resizeRef.current.startX = e.clientX;
  };

  const _onResize = (d: any, i: number, e: any, { node }: any = {}) => {
    e.stopPropagation();
    e.preventDefault();
    let x = e.clientX - resizeRef.current.startX;
    node.style.right = -x + 'px';
    node.parentNode.style.zIndex = 200;
    node.style.opacity = 1;
    resizeRef.current.x = x;
  };

  const _onResizeStop = (
    d: any,
    i: number,
    e: any,
    { size, node }: any = {},
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const width =
      columns[i].width + resizeRef.current.x < 50
        ? 50
        : columns[i].width + resizeRef.current.x;
    columns[i].width = width;
    if (d.fixed === 'left') {
      setLeftStyle();
    } else if (d.fixed === 'right') {
      setRightStyle();
    }
    setColumns(mergeColumns());

    clearInterval(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setWrapScrollState(tableBody.current);
    }, 200);

    node.style.right = node.style.opacity = node.parentNode.style.zIndex = '';
    onResize && onResize(i, width);
  };

  const _allowDrop = (ev: any) => {
    ev.preventDefault();
  };

  const _drag = (ev: any) => {
    // console.log(ev.target.dataset.index)
    ev.dataTransfer.setData('dragIndex', ev.target.dataset.index);
  };

  const _onDrop = (ev: any) => {
    var prevIndex = ev.dataTransfer.getData('dragIndex');
    var nextIndex = ev.target.dataset.index;

    _onSort(prevIndex, nextIndex);
    onSort && onSort(prevIndex, nextIndex);

    ev.preventDefault();
  };

  const _onSort = (prevIndex: number, nextIndex: number) => {
    if (prevIndex === nextIndex) return;
    let nextColumns = [...columns, ...hiddenColumns.current];

    let tempIndex = nextColumns[prevIndex].index;

    nextColumns[prevIndex].index = nextColumns[nextIndex].index;
    nextColumns[nextIndex].index = tempIndex;

    let temp = nextColumns[nextIndex];
    nextColumns[nextIndex] = nextColumns[prevIndex];
    nextColumns[prevIndex] = temp;

    if (prevIndex < nextIndex) {
      if (nextColumns[nextIndex].fixed === 'left') {
        let prevFixed = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = prevFixed;
      } else {
        let prevFixed = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = prevFixed;
      }
    } else {
      if (nextColumns[prevIndex].fixed === 'left') {
        let prevFixed = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = prevFixed;
      } else {
        let prevFixed = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = prevFixed;
      }
    }

    setColumns(setColumnsAttr(nextColumns));
  };

  const selectAll = () => {
    let nextChecked = !checkedAll;
    let nextSelected: any[] = [];
    if (checkedAll) {
      setCheckedAll(false);
      setSelectedRows([]);
      setSelectedRowKeys([]);
    } else {
      setCheckedAll(true);
      nextSelected = [...selectedRows];
      let nextSelectedKeys: any = [...selectedRowKeys];
      for (let item of props.data) {
        if (nextSelected.findIndex((d) => d.id === item.id) === -1) {
          nextSelected.push(item);
          nextSelectedKeys.push(`${item.id}`);
        }
      }
      setSelectedRows(nextSelected);
      setSelectedRowKeys(nextSelectedKeys);
    }
    rowSelection &&
      rowSelection.onSelectAll &&
      rowSelection.onSelectAll(nextChecked, nextSelected);
  };

  const toggleSelect = useCallback(
    (row, index, checked, e) => {
      if (checked) {
        selectedRows.push(row);
        selectedRowKeys.push(`${row.id}`);
      } else {
        selectedRows.splice(
          selectedRows.findIndex((d) => d.id === row.id),
          1,
        );
        selectedRowKeys.splice(
          selectedRowKeys.findIndex((d) => d === `${row.id}`),
          1,
        );
        setCheckedAll(false);
      }
      setSelectedRows([...selectedRows]);
      setSelectedRowKeys([...selectedRowKeys]);

      allCheckbox.current.setIndeterminate(!!selectedRows.length);

      rowSelection &&
        rowSelection.onSelect &&
        rowSelection.onSelect(row, checked, selectedRows, e);
    },
    [rowSelection, allCheckbox, selectedRows, selectedRowKeys],
  );

  const isSelectedAll = () => {
    // if (selectedRows.length < data.length) return false
    if (checkedAll) return checkedAll;
    if (
      typeof props.total !== 'undefined' &&
      props.total !== selectedRows.length
    )
      return false;
    if (!props.data) return false;
    let res =
      props.data.length &&
      props.data.every(
        (item: any) => selectedRows.findIndex((d) => d.id === item.id) !== -1,
      );
    return res;
  };

  const formateStatus = (row: any) => {
    return !!selectedRows.find((d) => d.id === row.id);
  };

  const renderTh = (d: any, i: number) => {
    return (
      <th
        key={d.ukey || d.key || d.type || 'th_' + i}
        className={`drag-move ${d.cls || ''}`}
        style={d.style || {}}
      >
        {d.type === 'selection' ? (
          <div className="col-checkbox-wrap">
            <Checkbox
              ref={allCheckbox}
              checked={isSelectedAll()}
              onChange={selectAll}
            />
          </div>
        ) : null}
        {!d.type ? (
          <div
            className="th-cell"
            data-key={d.key}
            data-index={i}
            draggable
            onDragOver={_allowDrop}
          >
            {d.title}
          </div>
        ) : null}
      </th>
    );
  };
  // console.log('render')
  return (
    <div className={`shj-drag-table ${props.className || ''}`} ref={wrapRef}>
      <div
        className={`shj-drag-table__container`}
        onScroll={onBodyScroll}
        ref={tableContainer}
      >
        <div
          className={`shj-drag-table__header `}
          ref={tableHeader}
          onDragStart={_drag}
          onDrop={_onDrop}
        >
          <div className={'header-scroll-wrap'} ref={tableHeaderScroller}>
            <table className="shj-header-table">
              <colgroup>
                {columns.map((d, i) => (
                  <col
                    key={i}
                    style={{
                      width: isNaN(d.width) ? d.width : d.width + 'px' || '',
                      minWidth: isNaN(d.width) ? d.width : d.width + 'px' || '',
                    }}
                  ></col>
                ))}
              </colgroup>
              <thead>
                <tr>
                  {columns.map((d, i) => {
                    return !d.width || d.type === 'selection' ? (
                      renderTh(d, i)
                    ) : (
                      <Resizable
                        key={d.ukey || d.key || d.type || 'rth_' + i}
                        width={d.width}
                        height={0}
                        handle={<div className="resize-handle-rect"></div>}
                        onResize={_onResize.bind(this, d, i)}
                        onResizeStart={_onResizeStart.bind(this, d, i)}
                        onResizeStop={_onResizeStop.bind(this, d, i)}
                      >
                        {renderTh(d, i)}
                      </Resizable>
                    );
                  })}
                </tr>

                {/* <ReactSortable
                  tag="tr"
                  group={{ name: 'table-header' }}
                  animation={180}
                  handle={'.drag-move'}
                  list={columns}
                  setList={setColumns}
                >
                  {
                    columns.map((d, i) => {
                      return !d.width || d.type === 'selection' ?
                        renderTh(d, i) :
                        <Resizable
                          key={d.ukey || d.key || d.type || 'rth_' + i}
                          width={d.width}
                          height={0}
                          handle={<div className="resize-handle-rect"></div>}
                          onResize={_onResize.bind(this, d, i)}
                          onResizeStart={_onResizeStart.bind(this, d, i)}
                          onResizeStop={_onResizeStop.bind(this, d, i)}
                        >
                          {renderTh(d, i)}
                        </Resizable>
                    })
                  }
                </ReactSortable> */}
              </thead>
            </table>
            <div className="header-scroll-bar"></div>
          </div>
        </div>

        <div className="shj-drag-table__scroller"></div>

        <div className="shj-drag-table__body" ref={tableBody}>
          <table className="shj-body-table">
            <colgroup>
              {columns.map((d, i) => (
                <col
                  key={i}
                  style={{
                    width: isNaN(d.width) ? d.width : d.width + 'px' || '',
                    minWidth: isNaN(d.width) ? d.width : d.width + 'px' || '',
                  }}
                ></col>
              ))}
            </colgroup>
            {/* <thead>
            <tr>
              {
                columns.map((d, i) => {
                  return !d.width || d.type === 'selection' ? renderTh(d, i) : <Resizable key={d.ukey || d.key || d.type || 'rth_' + i} width={d.width} height={0} handle={<div className="resize-handle-rect"></div>} onResize={_onResize.bind(this, d, i)} onResizeStart={_onResizeStart.bind(this, d, i)} onResizeStop={_onResizeStop.bind(this, d, i)}>
                    {renderTh(d, i)}
                  </Resizable>
                })
              }
            </tr>
          </thead> */}
            <tbody>
              {data.map((row: any, i: number) => {
                let rowChecked = formateStatus(row);
                return (
                  <tr key={i}>
                    {columns.map((d, j) => {
                      return (
                        <td
                          key={d.ukey || data.dataIndex || data.type || j}
                          className={d.cls || ''}
                          style={d.style || {}}
                        >
                          {d.type === 'selection' ? (
                            <div className="col-checkbox-wrap">
                              <Checkbox
                                checked={rowChecked}
                                onChange={toggleSelect.bind(this, row, i)}
                              />
                            </div>
                          ) : null}
                          {!d.type ? (
                            <div className="td-cell">
                              {d.render
                                ? d.render(row[d.dataIndex], row, j)
                                : row[d.dataIndex]}
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {!data.length ? (
          <div className="shj-table-empty">
            <Empty />
            <div className="shj-table-empty-text">暂无数据</div>
          </div>
        ) : null}
      </div>
      {loading ? <Spin /> : null}
    </div>
  );
});

DragTable.propTypes = {};

DragTable.defaultProps = {};

export default DragTable;

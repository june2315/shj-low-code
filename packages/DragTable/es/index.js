var _this = this;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react'; // import { ReactSortable } from "react-sortablejs";

import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Checkbox from './Checkbox';
import Spin from './Spin';
import SettingModal from './SettingModal';
import { Empty } from './Icon';
import './index.less';
var DragTable = /*#__PURE__*/ forwardRef(function (props, ref) {
  var onResize = props.onResize,
    onSort = props.onSort,
    footer = props.footer,
    pagination = props.pagination,
    _props$cacheKey = props.cacheKey,
    cacheKey = _props$cacheKey === void 0 ? '' : _props$cacheKey,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    _props$rowSelection = props.rowSelection,
    rowSelection = _props$rowSelection === void 0 ? {} : _props$rowSelection,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    cacheDisabled = props.cacheDisabled; // const tableHeader = useRef()

  var initState = useRef({});
  var wrapRef = useRef({});
  var tableContainer = useRef({});
  var tableBody = useRef({});
  var tableHeader = useRef({});
  var tableHeaderScroller = useRef({});
  var allCheckbox = useRef({});
  var fixedLeft = useRef([]);
  var fixedRight = useRef([]);
  var notFixed = useRef([]);
  var hiddenColumns = useRef([]);
  var defaultColumns = useRef(null);
  var rowSelect = useRef();
  var settingRef = useRef();
  var debounceTimer = useRef();
  var resizeRef = useRef({});
  var scrollHandle = useRef();
  var cacheHash = useRef('table_columns_'.concat(cacheKey + location.pathname));

  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    columns = _useState2[0],
    setColumns = _useState2[1];

  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRows = _useState4[0],
    setSelectedRows = _useState4[1];

  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedRowKeys = _useState6[0],
    setSelectedRowKeys = _useState6[1];

  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    checkedAll = _useState8[0],
    setCheckedAll = _useState8[1];

  var parentSelectedRowsKeys =
    (rowSelection && rowSelection.selectedRowKeys) || [];
  useImperativeHandle(ref, function () {
    return {
      openSetting: function openSetting() {
        settingRef.current = SettingModal({
          left: fixedLeft.current,
          right: fixedRight.current,
          notFixed: notFixed.current,
          hiddenColumns: hiddenColumns.current,
          defaultColumns: defaultColumns.current,
          onSubmit: function onSubmit(nextColumns) {
            settingRef.current.destroy();
            setColumns(setColumnsAttr(nextColumns));
            setTimeout(function () {
              return setWrapScrollState(tableBody.current);
            }, 0);
          },
        });
        return settingRef.current;
      },
      getCacheHash: function getCacheHash() {
        return cacheHash.current;
      },
    };
  });
  useEffect(
    function () {
      if (props.columns) {
        var nextColumns = props.columns.map(function (d, i) {
          d.ukey = d.dataIndex + '_' + i;
          return d;
        });
        /* 兼容 columnsState 配置 */

        if (props.columnsState) {
          var _loop = function _loop(key) {
            var val = props.columnsState[key];
            var item = nextColumns.find(function (d) {
              return d.dataIndex === key;
            });
            if (val.show === false && item) item.hidden = true;
          };

          for (var key in props.columnsState) {
            _loop(key);
          }
        }

        defaultColumns.current = Array.from(nextColumns);
        var cacheColumns = cacheDisabled
          ? null
          : localStorage.getItem(cacheHash.current);

        if (cacheColumns) {
          nextColumns = decodeCacheColumns(cacheColumns, nextColumns);
        }

        setColumns(setColumnsAttr(nextColumns));
      }

      return function () {};
    },
    [props.columns],
  );
  useEffect(
    function () {
      if (columns.length) {
        // 设置浮动 header 高度，隐藏滚动条
        setHeaderHeight(); // localStorage.setItem(cacheHash.current, JSON.stringify(columns))

        if (!cacheDisabled)
          localStorage.setItem(
            cacheHash.current,
            encodeCacheColumns(
              [].concat(
                _toConsumableArray(columns),
                _toConsumableArray(hiddenColumns.current),
              ),
            ),
          );
      }

      return function () {};
    },
    [columns],
  );
  useEffect(
    function () {
      // console.log(rowSelection.selectedRowKeys)
      if (
        !parentSelectedRowsKeys ||
        JSON.stringify(parentSelectedRowsKeys) ===
          JSON.stringify(selectedRowKeys)
      )
        return;
      var nextSelectedRows = selectedRows.filter(function (d) {
        return !!parentSelectedRowsKeys.find(function (id) {
          return id === d.id;
        });
      });
      setSelectedRowKeys(parentSelectedRowsKeys);
      setSelectedRows(nextSelectedRows);
      allCheckbox.current.setIndeterminate(!!nextSelectedRows.length); // TODO 如何做全选判断?

      if (!nextSelectedRows.length) setCheckedAll(false);
      return function () {};
    },
    [parentSelectedRowsKeys],
  );
  useEffect(
    function () {
      rowSelection &&
        rowSelection.onChange &&
        rowSelection.onChange(selectedRowKeys, selectedRows);
      return function () {};
    },
    [selectedRows],
  );
  useEffect(function () {
    if (props.sticky) onScrollUpdateHeaderSticky();
    setTimeout(function () {
      if (tableBody.current) setWrapScrollState(tableBody.current);
    }, 0);
    return function () {
      if (scrollHandle.current)
        document.removeEventListener('scroll', scrollHandle.current);
    };
  }, []); // 0 key, 1 index, 2 fixed, 3 hidden, 4 width

  var encodeCacheColumns = function encodeCacheColumns(cols) {
    return cols
      .filter(function (d) {
        return !!d.ukey && d.type !== 'selection';
      })
      .map(function (d) {
        return ''
          .concat(d.ukey, '&')
          .concat(d.index, '&')
          .concat(d.fixed || '', '&')
          .concat(d.hidden ? 0 : 1, '&')
          .concat(d.width);
      })
      .join(',');
  };

  var decodeCacheColumns = function decodeCacheColumns(str, arr) {
    var cols = [];

    var _iterator = _createForOfIteratorHelper(str.split(',')),
      _step;

    try {
      var _loop2 = function _loop2() {
        var d = _step.value;
        var info = d.split('&');
        var data = arr.find(function (d) {
          return d.ukey === info[0];
        });

        var item = _objectSpread(
          _objectSpread({}, data),
          {},
          {
            index: +info[1],
            hidden: info[3] === '0' ? true : false,
          },
        );

        if (info[4]) {
          item.width = +info[4];
        }

        if (info[2]) {
          item.fixed = info[2];
        } else {
          delete item.fixed;
        }

        cols.push(item);
      };

      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        _loop2();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return cols;
  }; // 根据配置，设置固定列定位值

  var setColumnsAttr = function setColumnsAttr(columns) {
    // console.log(columns)
    var left = (fixedLeft.current = []);
    var right = (fixedRight.current = []);
    var normal = (notFixed.current = []);
    columns = columns.filter(function (d) {
      return d.type !== 'selection';
    });
    hiddenColumns.current = [];
    var i = 0;

    var _iterator2 = _createForOfIteratorHelper(columns),
      _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var d = _step2.value;
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
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    setRowSelection();
    setWrapFixedState();
    left = setLeftStyle();
    right = setRightStyle();
    return mergeColumns({
      left: left,
      right: right,
      normal: normal,
    });
  };

  var setRowSelection = function setRowSelection() {
    if (props.rowSelection) {
      var selectedRow = (rowSelect.current = {
        type: 'selection',
        width: 55,
      });

      if (fixedLeft.current.length) {
        fixedLeft.current.unshift(selectedRow);
      } else {
        notFixed.current.unshift(selectedRow);
      }
    }
  };

  var setWrapFixedState = function setWrapFixedState() {
    var wrapCls = Array.from(wrapRef.current.classList).filter(function (d) {
      return !/^shj-table-has-fix-left$|^shj-table-has-fix-right$/g.test(d);
    });
    if (fixedLeft.current.length) wrapCls.push('shj-table-has-fix-left');
    if (fixedRight.current.length) wrapCls.push('shj-table-has-fix-right');
    wrapRef.current.className = wrapCls.join(' ');
  };

  var setLeftStyle = function setLeftStyle() {
    var list = fixedLeft.current;
    var offset = 0;

    for (var i = 0; i < list.length; i++) {
      list[i].style = {
        left: offset + 'px',
      };
      var cls = 'drag-col-fixed-left';

      if (i === list.length - 1) {
        cls = ''.concat(cls, ' ').concat(cls, '-last');
      }

      list[i].cls = cls;
      offset += list[i].width;
    }

    return list;
  };

  var setRightStyle = function setRightStyle() {
    var list = fixedRight.current;
    var offset = 0;

    for (var i = list.length - 1; i >= 0; i--) {
      list[i].style = {
        right: offset + 'px',
      };
      var cls = 'drag-col-fixed-right';

      if (i === 0) {
        cls = ''.concat(cls, ' ').concat(cls, '-last');
      }

      list[i].cls = cls;
      offset += list[i].width;
    }

    return list;
  };

  var mergeColumns = function mergeColumns() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? fixedLeft.current : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? fixedRight.current : _ref$right,
      _ref$normal = _ref.normal,
      normal = _ref$normal === void 0 ? notFixed.current : _ref$normal;

    return [].concat(
      _toConsumableArray(left),
      _toConsumableArray(normal),
      _toConsumableArray(right),
    );
  };

  var setHeaderHeight = function setHeaderHeight() {
    var rect = tableHeader.current
      .querySelector('.shj-header-table')
      .getBoundingClientRect();

    if (rect.height) {
      tableHeader.current.style.height = rect.height + 'px';
      initState.current.isInitHeaderHeight = true;
    }
  };

  var onScrollUpdateHeaderSticky = function onScrollUpdateHeaderSticky() {
    var header = tableHeader.current;
    var scroller = tableHeader.current.firstElementChild;
    var body = tableBody.current;
    var table = body.querySelector('.shj-body-table');
    var scrollBar = header.querySelector('.header-scroll-bar');

    scrollHandle.current = function () {
      var bodyRect = body.getBoundingClientRect();
      var tableRect = table.getBoundingClientRect(); // console.log(tableRect.top, header.offsetHeight)

      if (
        tableRect.top &&
        header.offsetHeight &&
        tableRect.top - header.offsetHeight <= 0
      ) {
        if (!initState.current.isInitHeaderHeight) setHeaderHeight();
        scrollBar.style.height = '30px';
        header.style.position = 'fixed';
        header.style.overflow = 'hidden';
        if (bodyRect.width) header.style.width = bodyRect.width + 'px'; // scroller.style.overflow = 'auto'

        scroller.style.overflow = 'hidden';
        body.style.paddingTop = header.offsetHeight + 'px'; // 防止头部超出表格范围

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

  var onBodyScroll = function onBodyScroll(ev) {
    var setScrollLeft = function setScrollLeft(target) {
      if (ev !== null) {
        if (
          target === tableContainer.current &&
          ev.target.scrollLeft !== tableHeaderScroller.current.scrollLeft
        ) {
          tableHeaderScroller.current.scrollLeft = target.scrollLeft;
        }
      }
    };

    setScrollLeft(ev.target); // console.log(ev.target)
    // console.log(tableHeader.current.scrollLeft, ev.target.scrollLeft)

    setWrapScrollState(tableBody.current, ev.target);
  };

  var setWrapScrollState = function setWrapScrollState(el) {
    var scroller =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : tableContainer.current;
    var childWidth = el.firstElementChild.offsetWidth;
    var max = Math.abs(scroller.offsetWidth - childWidth);
    var cls = Array.from(wrapRef.current.classList).filter(function (d) {
      return !/^shj-table-ping-left$|^shj-table-ping-right$/g.test(d);
    });

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

  var _onResizeStart = function _onResizeStart(d, i, e) {
    var _ref2 =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      node = _ref2.node;

    resizeRef.current.startX = e.clientX;
  };

  var _onResize = function _onResize(d, i, e) {
    var _ref3 =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      node = _ref3.node;

    e.stopPropagation();
    e.preventDefault();
    var x = e.clientX - resizeRef.current.startX;
    node.style.right = -x + 'px';
    node.parentNode.style.zIndex = 200;
    node.style.opacity = 1;
    resizeRef.current.x = x;
  };

  var _onResizeStop = function _onResizeStop(d, i, e) {
    var _ref4 =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      size = _ref4.size,
      node = _ref4.node;

    e.stopPropagation();
    e.preventDefault();
    var width =
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
    debounceTimer.current = setTimeout(function () {
      setWrapScrollState(tableBody.current);
    }, 200);
    node.style.right = node.style.opacity = node.parentNode.style.zIndex = '';
    onResize && onResize(i, width);
  };

  var _allowDrop = function _allowDrop(ev) {
    ev.preventDefault();
  };

  var _drag = function _drag(ev) {
    // console.log(ev.target.dataset.index)
    ev.dataTransfer.setData('dragIndex', ev.target.dataset.index);
  };

  var _onDrop = function _onDrop(ev) {
    var prevIndex = ev.dataTransfer.getData('dragIndex');
    var nextIndex = ev.target.dataset.index;

    _onSort(prevIndex, nextIndex);

    onSort && onSort(prevIndex, nextIndex);
    ev.preventDefault();
  };

  var _onSort = function _onSort(prevIndex, nextIndex) {
    if (prevIndex === nextIndex) return;
    var nextColumns = [].concat(
      _toConsumableArray(columns),
      _toConsumableArray(hiddenColumns.current),
    );
    var tempIndex = nextColumns[prevIndex].index;
    nextColumns[prevIndex].index = nextColumns[nextIndex].index;
    nextColumns[nextIndex].index = tempIndex;
    var temp = nextColumns[nextIndex];
    nextColumns[nextIndex] = nextColumns[prevIndex];
    nextColumns[prevIndex] = temp;

    if (prevIndex < nextIndex) {
      if (nextColumns[nextIndex].fixed === 'left') {
        var prevFixed = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = prevFixed;
      } else {
        var _prevFixed = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = _prevFixed;
      }
    } else {
      if (nextColumns[prevIndex].fixed === 'left') {
        var _prevFixed2 = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = _prevFixed2;
      } else {
        var _prevFixed3 = nextColumns[prevIndex].fixed;
        nextColumns[prevIndex].fixed = nextColumns[nextIndex].fixed;
        nextColumns[nextIndex].fixed = _prevFixed3;
      }
    }

    setColumns(setColumnsAttr(nextColumns));
  };

  var selectAll = function selectAll() {
    var nextChecked = !checkedAll;
    var nextSelected = [];

    if (checkedAll) {
      setCheckedAll(false);
      setSelectedRows([]);
      setSelectedRowKeys([]);
    } else {
      setCheckedAll(true);
      nextSelected = _toConsumableArray(selectedRows);

      var nextSelectedKeys = _toConsumableArray(selectedRowKeys);

      var _iterator3 = _createForOfIteratorHelper(props.data),
        _step3;

      try {
        var _loop3 = function _loop3() {
          var item = _step3.value;

          if (
            nextSelected.findIndex(function (d) {
              return d.id === item.id;
            }) === -1
          ) {
            nextSelected.push(item);
            nextSelectedKeys.push(''.concat(item.id));
          }
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          _loop3();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      setSelectedRows(nextSelected);
      setSelectedRowKeys(nextSelectedKeys);
    }

    rowSelection &&
      rowSelection.onSelectAll &&
      rowSelection.onSelectAll(nextChecked, nextSelected);
  };

  var toggleSelect = useCallback(
    function (row, index, checked, e) {
      if (checked) {
        selectedRows.push(row);
        selectedRowKeys.push(''.concat(row.id));
      } else {
        selectedRows.splice(
          selectedRows.findIndex(function (d) {
            return d.id === row.id;
          }),
          1,
        );
        selectedRowKeys.splice(
          selectedRowKeys.findIndex(function (d) {
            return d === ''.concat(row.id);
          }),
          1,
        );
        setCheckedAll(false);
      }

      setSelectedRows(_toConsumableArray(selectedRows));
      setSelectedRowKeys(_toConsumableArray(selectedRowKeys));
      allCheckbox.current.setIndeterminate(!!selectedRows.length);
      rowSelection &&
        rowSelection.onSelect &&
        rowSelection.onSelect(row, checked, selectedRows, e);
    },
    [rowSelection, allCheckbox, selectedRows, selectedRowKeys],
  );

  var isSelectedAll = function isSelectedAll() {
    // if (selectedRows.length < data.length) return false
    if (checkedAll) return checkedAll;
    if (
      typeof props.total !== 'undefined' &&
      props.total !== selectedRows.length
    )
      return false;
    if (!props.data) return false;
    var res =
      props.data.length &&
      props.data.every(function (item) {
        return (
          selectedRows.findIndex(function (d) {
            return d.id === item.id;
          }) !== -1
        );
      });
    return res;
  };

  var formateStatus = function formateStatus(row) {
    return !!selectedRows.find(function (d) {
      return d.id === row.id;
    });
  };

  var renderTh = function renderTh(d, i) {
    return /*#__PURE__*/ React.createElement(
      'th',
      {
        key: d.ukey || d.key || d.type || 'th_' + i,
        className: 'drag-move '.concat(d.cls || ''),
        style: d.style || {},
      },
      d.type === 'selection'
        ? /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'col-checkbox-wrap',
            },
            /*#__PURE__*/ React.createElement(Checkbox, {
              ref: allCheckbox,
              checked: isSelectedAll(),
              onChange: selectAll,
            }),
          )
        : null,
      !d.type
        ? /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'th-cell',
              'data-key': d.key,
              'data-index': i,
              draggable: true,
              onDragOver: _allowDrop,
            },
            d.title,
          )
        : null,
    );
  }; // console.log('render')

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'shj-drag-table '.concat(props.className || ''),
      ref: wrapRef,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'shj-drag-table__container',
        onScroll: onBodyScroll,
        ref: tableContainer,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'shj-drag-table__header ',
          ref: tableHeader,
          onDragStart: _drag,
          onDrop: _onDrop,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'header-scroll-wrap',
            ref: tableHeaderScroller,
          },
          /*#__PURE__*/ React.createElement(
            'table',
            {
              className: 'shj-header-table',
            },
            /*#__PURE__*/ React.createElement(
              'colgroup',
              null,
              columns.map(function (d, i) {
                return /*#__PURE__*/ React.createElement('col', {
                  key: i,
                  style: {
                    width: isNaN(d.width) ? d.width : d.width + 'px' || '',
                    minWidth: isNaN(d.width) ? d.width : d.width + 'px' || '',
                  },
                });
              }),
            ),
            /*#__PURE__*/ React.createElement(
              'thead',
              null,
              /*#__PURE__*/ React.createElement(
                'tr',
                null,
                columns.map(function (d, i) {
                  return !d.width || d.type === 'selection'
                    ? renderTh(d, i)
                    : /*#__PURE__*/ React.createElement(
                        Resizable,
                        {
                          key: d.ukey || d.key || d.type || 'rth_' + i,
                          width: d.width,
                          height: 0,
                          handle: /*#__PURE__*/ React.createElement('div', {
                            className: 'resize-handle-rect',
                          }),
                          onResize: _onResize.bind(_this, d, i),
                          onResizeStart: _onResizeStart.bind(_this, d, i),
                          onResizeStop: _onResizeStop.bind(_this, d, i),
                        },
                        renderTh(d, i),
                      );
                }),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement('div', {
            className: 'header-scroll-bar',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement('div', {
        className: 'shj-drag-table__scroller',
      }),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'shj-drag-table__body',
          ref: tableBody,
        },
        /*#__PURE__*/ React.createElement(
          'table',
          {
            className: 'shj-body-table',
          },
          /*#__PURE__*/ React.createElement(
            'colgroup',
            null,
            columns.map(function (d, i) {
              return /*#__PURE__*/ React.createElement('col', {
                key: i,
                style: {
                  width: isNaN(d.width) ? d.width : d.width + 'px' || '',
                  minWidth: isNaN(d.width) ? d.width : d.width + 'px' || '',
                },
              });
            }),
          ),
          /*#__PURE__*/ React.createElement(
            'tbody',
            null,
            data.map(function (row, i) {
              var rowChecked = formateStatus(row);
              return /*#__PURE__*/ React.createElement(
                'tr',
                {
                  key: i,
                },
                columns.map(function (d, j) {
                  return /*#__PURE__*/ React.createElement(
                    'td',
                    {
                      key: d.ukey || data.dataIndex || data.type || j,
                      className: d.cls || '',
                      style: d.style || {},
                    },
                    d.type === 'selection'
                      ? /*#__PURE__*/ React.createElement(
                          'div',
                          {
                            className: 'col-checkbox-wrap',
                          },
                          /*#__PURE__*/ React.createElement(Checkbox, {
                            checked: rowChecked,
                            onChange: toggleSelect.bind(_this, row, i),
                          }),
                        )
                      : null,
                    !d.type
                      ? /*#__PURE__*/ React.createElement(
                          'div',
                          {
                            className: 'td-cell',
                          },
                          d.render
                            ? d.render(row[d.dataIndex], row, j)
                            : row[d.dataIndex],
                        )
                      : null,
                  );
                }),
              );
            }),
          ),
        ),
      ),
      !data.length
        ? /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'shj-table-empty',
            },
            /*#__PURE__*/ React.createElement(Empty, null),
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: 'shj-table-empty-text',
              },
              '\u6682\u65E0\u6570\u636E',
            ),
          )
        : null,
    ),
    loading ? /*#__PURE__*/ React.createElement(Spin, null) : null,
  );
});
DragTable.propTypes = {};
DragTable.defaultProps = {};
export default DragTable;

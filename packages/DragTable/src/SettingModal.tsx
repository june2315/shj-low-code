import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';
import CRMDialog from 'shj-func-dialog';
import { Row, Col, Space, Button, Tooltip } from 'antd';

import {
  VerticalAlignBottom,
  VerticalAlignTop,
  VerticalAlignMiddle,
} from './Icon';

const SettingModal = (config: any) => {
  const { left, right, notFixed, hiddenColumns, defaultColumns } = config;
  const dialog = CRMDialog({
    title: '设置',
    content: (
      <DndProvider backend={HTML5Backend}>
        <TableSetting
          data={{ left, right, notFixed, hiddenColumns, defaultColumns }}
          onClose={() => dialog.destroy()}
          onSubmit={config.onSubmit}
        />
      </DndProvider>
    ),
    ...config,
  });
  return dialog;
};
// 根据索引插入元素
export const insertOfIndex = (arr: any[], el: any) => {
  let nextArr = [...arr];
  let i = 0;
  let isAdd = false;
  for (let d of arr) {
    if (d.index > el.index) {
      let index = nextArr.findIndex((item) => item.ukey === el.ukey);
      if (index === -1) {
        nextArr.splice(i, 0, el);
      } else {
        nextArr[index] = el;
      }
      isAdd = true;
      break;
    }
    i++;
  }
  if (!isAdd) {
    let index = nextArr.findIndex((item) => item.ukey === el.ukey);
    if (index === -1) {
      nextArr.push(el);
    } else {
      nextArr[index] = el;
    }
  }

  return nextArr;
};

const TableSetting = (props: any) => {
  const { data, onSubmit } = props;
  const [left, setLeft] = useState<any[]>([]);
  const [right, setRight] = useState<any[]>([]);
  const [notFixed, setNotFixed] = useState<any[]>([]);

  useEffect(() => {
    const filterFunc = (d: any) => d.type !== 'selection';
    let left = data.left.filter(filterFunc);
    let right = data.right.filter(filterFunc);
    let notFixed = data.notFixed.filter(filterFunc);

    for (let d of data.hiddenColumns) {
      if (d.fixed === 'left') {
        left = insertOfIndex(left, d);
      } else if (d.fixed === 'right') {
        right = insertOfIndex(right, d);
      } else {
        notFixed = insertOfIndex(notFixed, d);
      }
    }
    // console.log(data.hiddenColumns, notFixed)
    setLeft(left);
    setRight(right);
    setNotFixed(notFixed);

    return () => {};
  }, [data]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex, itemType) => {
      const func = (
        {
          left: () => setLeft(moveArr(left, dragIndex, hoverIndex)),
          right: () => setRight(moveArr(right, dragIndex, hoverIndex)),
          notFixed: () => setNotFixed(moveArr(notFixed, dragIndex, hoverIndex)),
        } as any
      )[itemType];
      func && func();
    },
    [left, right, notFixed],
  );

  const moveArr = (arr: any[], dragIndex: number, hoverIndex: number) => {
    let nextArr = [...arr];
    const dragCard = nextArr[dragIndex];
    const tempIndex = dragCard.index;
    dragCard.index = nextArr[hoverIndex].index;
    nextArr[hoverIndex].index = tempIndex;
    nextArr.splice(dragIndex, 1);
    nextArr.splice(hoverIndex, 0, dragCard);
    return nextArr;
  };

  const setVisible = useCallback(
    (index, checked, itemType, data) => {
      const func = (
        {
          left: () => setLeft(setItemVisible(left, index, checked)),
          right: () => setRight(setItemVisible(right, index, checked)),
          notFixed: () => setNotFixed(setItemVisible(notFixed, index, checked)),
        } as any
      )[itemType];
      func && func();
    },
    [left, right, notFixed],
  );

  const setItemVisible = (arr: any[], index: number, checked: boolean) => {
    let nextArr = [...arr];
    nextArr[index] = { ...nextArr[index], hidden: !checked };
    return nextArr;
  };

  const setFixed = useCallback(
    (index, fixedValue, itemType, data) => {
      const func = (
        {
          left: () => moveFixedItem(left, index, fixedValue),
          right: () => moveFixedItem(right, index, fixedValue),
          notFixed: () => moveFixedItem(notFixed, index, fixedValue),
        } as any
      )[itemType];
      func && func();
    },
    [left, right, notFixed],
  );

  const moveFixedItem = (arr: any[], index: number, fixedValue: any) => {
    let el = { ...arr[index] };
    arr.splice(index, 1);
    el.fixed = fixedValue;
    const func = (
      {
        left: () => setLeft(insertOfIndex(left, el)),
        right: () => setRight(insertOfIndex(right, el)),
        notFixed: () => setNotFixed(insertOfIndex(notFixed, el)),
      } as any
    )[fixedValue || 'notFixed'];
    func && func();
  };

  const onCancel = () => {
    props.onClose && props.onClose();
  };

  const onReset = () => {
    onSubmit && onSubmit([...data.defaultColumns]);
  };

  const onOk = () => {
    onSubmit && onSubmit([...left, ...notFixed, ...right]);
  };

  const hasSubTitle = left.length || right.length;

  return (
    <div
      className={`shj-table-col-setting ${hasSubTitle ? 'has-sub-title' : ''}`}
    >
      {!left.length ? null : (
        <div className="shj-table-setting-box">
          <div className="shj-setting-sub-title">固定在左侧</div>
          {left.map((d, i) => (
            <Card
              key={d.ukey}
              id={d.ukey}
              index={i}
              data={d}
              itemType="left"
              moveCard={moveCard}
              setVisible={setVisible}
              setFixed={setFixed}
            />
          ))}
        </div>
      )}
      {!notFixed.length ? null : (
        <div className="shj-table-setting-box">
          {!hasSubTitle ? null : (
            <div className="shj-setting-sub-title">不固定</div>
          )}
          {notFixed.map((d, i) => (
            <Card
              key={d.ukey}
              id={d.ukey}
              index={i}
              data={d}
              itemType="notFixed"
              moveCard={moveCard}
              setVisible={setVisible}
              setFixed={setFixed}
            />
          ))}
        </div>
      )}
      {!right.length ? null : (
        <div className="shj-table-setting-box">
          <div className="shj-setting-sub-title">固定在右侧</div>
          {right.map((d, i) => (
            <Card
              key={d.ukey}
              id={d.ukey}
              index={i}
              data={d}
              itemType="right"
              moveCard={moveCard}
              setVisible={setVisible}
              setFixed={setFixed}
            />
          ))}
        </div>
      )}

      <Row justify="end" style={{ marginTop: '20px' }}>
        <Space>
          <Button onClick={onCancel}>取消</Button>
          <Button danger onClick={onReset}>
            重置
          </Button>
          <Button type="primary" onClick={onOk}>
            确定
          </Button>
        </Space>
      </Row>
    </div>
  );
};

const Card = (props: any) => {
  const ref = useRef<any>(null);
  const { data, id, index, itemType, moveCard, setVisible, setFixed } = props;

  const onChange = (ev: any) => {
    let checked = ev.target.checked;
    setVisible && setVisible(index, checked, itemType, data);
  };

  const onFixedLeft = () => {
    setFixed && setFixed(index, 'left', itemType, data);
  };

  const onFixedRight = () => {
    setFixed && setFixed(index, 'right', itemType, data);
  };

  const onCancelFixed = () => {
    setFixed && setFixed(index, '', itemType, data);
  };

  const [, drop] = useDrop({
    accept: itemType,
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset: any = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex, itemType);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: itemType, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const notAlign = () => {
    return (
      <Tooltip placement="top" title={'不固定'}>
        <i onClick={onCancelFixed}>
          <VerticalAlignMiddle />
        </i>
      </Tooltip>
    );
  };

  return (
    <div className={'shj-table-setting-card'} ref={ref} style={{ opacity }}>
      <Row>
        <Col className={'setting-col center'} span={3}>
          <input type="checkbox" checked={!data.hidden} onChange={onChange} />
        </Col>
        <Col className={'setting-col'} span={15}>
          {data.title}
        </Col>
        <Col className={'setting-col center'} span={6}>
          {!data.width ? null : (
            <Space size="large">
              {itemType === 'left' ? (
                notAlign()
              ) : (
                <Tooltip placement="top" title={'固定在列首'}>
                  <i onClick={onFixedLeft}>
                    <VerticalAlignTop />
                  </i>
                </Tooltip>
              )}
              {itemType === 'right' ? (
                notAlign()
              ) : (
                <Tooltip placement="top" title={'固定在列尾'}>
                  <i onClick={onFixedRight}>
                    <VerticalAlignBottom />
                  </i>
                </Tooltip>
              )}
            </Space>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SettingModal;

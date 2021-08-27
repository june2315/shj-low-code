import 'antd/es/col/style';
import _Col from 'antd/es/col';
import 'antd/es/tooltip/style';
import _Tooltip from 'antd/es/tooltip';
import 'antd/es/button/style';
import _Button from 'antd/es/button';
import 'antd/es/space/style';
import _Space from 'antd/es/space';
import 'antd/es/row/style';
import _Row from 'antd/es/row';

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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
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

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

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

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';
import CRMDialog from 'shj-func-dialog';
import {
  VerticalAlignBottom,
  VerticalAlignTop,
  VerticalAlignMiddle,
} from './Icon';

var SettingModal = function SettingModal(config) {
  var left = config.left,
    right = config.right,
    notFixed = config.notFixed,
    hiddenColumns = config.hiddenColumns,
    defaultColumns = config.defaultColumns;
  var dialog = CRMDialog(
    _objectSpread(
      {
        title: '设置',
        content: /*#__PURE__*/ React.createElement(
          DndProvider,
          {
            backend: HTML5Backend,
          },
          /*#__PURE__*/ React.createElement(TableSetting, {
            data: {
              left: left,
              right: right,
              notFixed: notFixed,
              hiddenColumns: hiddenColumns,
              defaultColumns: defaultColumns,
            },
            onClose: function onClose() {
              return dialog.destroy();
            },
            onSubmit: config.onSubmit,
          }),
        ),
      },
      config,
    ),
  );
  return dialog;
}; // 根据索引插入元素

export var insertOfIndex = function insertOfIndex(arr, el) {
  var nextArr = _toConsumableArray(arr);

  var i = 0;
  var isAdd = false;

  var _iterator = _createForOfIteratorHelper(arr),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var d = _step.value;

      if (d.index > el.index) {
        var _index = nextArr.findIndex(function (item) {
          return item.ukey === el.ukey;
        });

        if (_index === -1) {
          nextArr.splice(i, 0, el);
        } else {
          nextArr[_index] = el;
        }

        isAdd = true;
        break;
      }

      i++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (!isAdd) {
    var index = nextArr.findIndex(function (item) {
      return item.ukey === el.ukey;
    });

    if (index === -1) {
      nextArr.push(el);
    } else {
      nextArr[index] = el;
    }
  }

  return nextArr;
};

var TableSetting = function TableSetting(props) {
  var data = props.data,
    onSubmit = props.onSubmit;

  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    _left = _useState2[0],
    setLeft = _useState2[1];

  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    _right = _useState4[0],
    setRight = _useState4[1];

  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    _notFixed = _useState6[0],
    setNotFixed = _useState6[1];

  useEffect(
    function () {
      var filterFunc = function filterFunc(d) {
        return d.type !== 'selection';
      };

      var left = data.left.filter(filterFunc);
      var right = data.right.filter(filterFunc);
      var notFixed = data.notFixed.filter(filterFunc);

      var _iterator2 = _createForOfIteratorHelper(data.hiddenColumns),
        _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var d = _step2.value;

          if (d.fixed === 'left') {
            left = insertOfIndex(left, d);
          } else if (d.fixed === 'right') {
            right = insertOfIndex(right, d);
          } else {
            notFixed = insertOfIndex(notFixed, d);
          }
        } // console.log(data.hiddenColumns, notFixed)
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      setLeft(left);
      setRight(right);
      setNotFixed(notFixed);
      return function () {};
    },
    [data],
  );
  var moveCard = useCallback(
    function (dragIndex, hoverIndex, itemType) {
      var func = {
        left: function left() {
          return setLeft(moveArr(_left, dragIndex, hoverIndex));
        },
        right: function right() {
          return setRight(moveArr(_right, dragIndex, hoverIndex));
        },
        notFixed: function notFixed() {
          return setNotFixed(moveArr(_notFixed, dragIndex, hoverIndex));
        },
      }[itemType];
      func && func();
    },
    [_left, _right, _notFixed],
  );

  var moveArr = function moveArr(arr, dragIndex, hoverIndex) {
    var nextArr = _toConsumableArray(arr);

    var dragCard = nextArr[dragIndex];
    var tempIndex = dragCard.index;
    dragCard.index = nextArr[hoverIndex].index;
    nextArr[hoverIndex].index = tempIndex;
    nextArr.splice(dragIndex, 1);
    nextArr.splice(hoverIndex, 0, dragCard);
    return nextArr;
  };

  var setVisible = useCallback(
    function (index, checked, itemType, data) {
      var func = {
        left: function left() {
          return setLeft(setItemVisible(_left, index, checked));
        },
        right: function right() {
          return setRight(setItemVisible(_right, index, checked));
        },
        notFixed: function notFixed() {
          return setNotFixed(setItemVisible(_notFixed, index, checked));
        },
      }[itemType];
      func && func();
    },
    [_left, _right, _notFixed],
  );

  var setItemVisible = function setItemVisible(arr, index, checked) {
    var nextArr = _toConsumableArray(arr);

    nextArr[index] = _objectSpread(
      _objectSpread({}, nextArr[index]),
      {},
      {
        hidden: !checked,
      },
    );
    return nextArr;
  };

  var setFixed = useCallback(
    function (index, fixedValue, itemType, data) {
      var func = {
        left: function left() {
          return moveFixedItem(_left, index, fixedValue);
        },
        right: function right() {
          return moveFixedItem(_right, index, fixedValue);
        },
        notFixed: function notFixed() {
          return moveFixedItem(_notFixed, index, fixedValue);
        },
      }[itemType];
      func && func();
    },
    [_left, _right, _notFixed],
  );

  var moveFixedItem = function moveFixedItem(arr, index, fixedValue) {
    var el = _objectSpread({}, arr[index]);

    arr.splice(index, 1);
    el.fixed = fixedValue;
    var func = {
      left: function left() {
        return setLeft(insertOfIndex(_left, el));
      },
      right: function right() {
        return setRight(insertOfIndex(_right, el));
      },
      notFixed: function notFixed() {
        return setNotFixed(insertOfIndex(_notFixed, el));
      },
    }[fixedValue || 'notFixed'];
    func && func();
  };

  var onCancel = function onCancel() {
    props.onClose && props.onClose();
  };

  var onReset = function onReset() {
    onSubmit && onSubmit(_toConsumableArray(data.defaultColumns));
  };

  var onOk = function onOk() {
    onSubmit &&
      onSubmit(
        [].concat(
          _toConsumableArray(_left),
          _toConsumableArray(_notFixed),
          _toConsumableArray(_right),
        ),
      );
  };

  var hasSubTitle = _left.length || _right.length;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'shj-table-col-setting '.concat(
        hasSubTitle ? 'has-sub-title' : '',
      ),
    },
    !_left.length
      ? null
      : /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'shj-table-setting-box',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'shj-setting-sub-title',
            },
            '\u56FA\u5B9A\u5728\u5DE6\u4FA7',
          ),
          _left.map(function (d, i) {
            return /*#__PURE__*/ React.createElement(Card, {
              key: d.ukey,
              id: d.ukey,
              index: i,
              data: d,
              itemType: 'left',
              moveCard: moveCard,
              setVisible: setVisible,
              setFixed: setFixed,
            });
          }),
        ),
    !_notFixed.length
      ? null
      : /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'shj-table-setting-box',
          },
          !hasSubTitle
            ? null
            : /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: 'shj-setting-sub-title',
                },
                '\u4E0D\u56FA\u5B9A',
              ),
          _notFixed.map(function (d, i) {
            return /*#__PURE__*/ React.createElement(Card, {
              key: d.ukey,
              id: d.ukey,
              index: i,
              data: d,
              itemType: 'notFixed',
              moveCard: moveCard,
              setVisible: setVisible,
              setFixed: setFixed,
            });
          }),
        ),
    !_right.length
      ? null
      : /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'shj-table-setting-box',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'shj-setting-sub-title',
            },
            '\u56FA\u5B9A\u5728\u53F3\u4FA7',
          ),
          _right.map(function (d, i) {
            return /*#__PURE__*/ React.createElement(Card, {
              key: d.ukey,
              id: d.ukey,
              index: i,
              data: d,
              itemType: 'right',
              moveCard: moveCard,
              setVisible: setVisible,
              setFixed: setFixed,
            });
          }),
        ),
    /*#__PURE__*/ React.createElement(
      _Row,
      {
        justify: 'end',
        style: {
          marginTop: '20px',
        },
      },
      /*#__PURE__*/ React.createElement(
        _Space,
        null,
        /*#__PURE__*/ React.createElement(
          _Button,
          {
            onClick: onCancel,
          },
          '\u53D6\u6D88',
        ),
        /*#__PURE__*/ React.createElement(
          _Button,
          {
            danger: true,
            onClick: onReset,
          },
          '\u91CD\u7F6E',
        ),
        /*#__PURE__*/ React.createElement(
          _Button,
          {
            type: 'primary',
            onClick: onOk,
          },
          '\u786E\u5B9A',
        ),
      ),
    ),
  );
};

var Card = function Card(props) {
  var ref = useRef(null);
  var data = props.data,
    id = props.id,
    index = props.index,
    itemType = props.itemType,
    moveCard = props.moveCard,
    setVisible = props.setVisible,
    setFixed = props.setFixed;

  var onChange = function onChange(ev) {
    var checked = ev.target.checked;
    setVisible && setVisible(index, checked, itemType, data);
  };

  var onFixedLeft = function onFixedLeft() {
    setFixed && setFixed(index, 'left', itemType, data);
  };

  var onFixedRight = function onFixedRight() {
    setFixed && setFixed(index, 'right', itemType, data);
  };

  var onCancelFixed = function onCancelFixed() {
    setFixed && setFixed(index, '', itemType, data);
  };

  var _useDrop = useDrop({
      accept: itemType,
      hover: function hover(item, monitor) {
        var _ref$current;

        if (!ref.current) {
          return;
        }

        var dragIndex = item.index;
        var hoverIndex = index; // Don't replace items with themselves

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return;
        } // Determine rectangle on screen

        // Determine rectangle on screen
        var hoverBoundingRect =
          (_ref$current = ref.current) === null || _ref$current === void 0
            ? void 0
            : _ref$current.getBoundingClientRect(); // Get vertical middle

        // Get vertical middle
        var hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

        // Determine mouse position
        var clientOffset = monitor.getClientOffset(); // Get pixels to the top

        // Get pixels to the top
        var hoverClientY = clientOffset.y - hoverBoundingRect.top; // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        } // Dragging upwards

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        } // Time to actually perform the action

        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex, itemType); // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      },
    }),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    drop = _useDrop2[1];

  var _useDrag = useDrag({
      item: {
        type: itemType,
        id: id,
        index: index,
      },
      collect: function collect(monitor) {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    }),
    _useDrag2 = _slicedToArray(_useDrag, 2),
    isDragging = _useDrag2[0].isDragging,
    drag = _useDrag2[1];

  var opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  var notAlign = function notAlign() {
    return /*#__PURE__*/ React.createElement(
      _Tooltip,
      {
        placement: 'top',
        title: '不固定',
      },
      /*#__PURE__*/ React.createElement(
        'i',
        {
          onClick: onCancelFixed,
        },
        /*#__PURE__*/ React.createElement(VerticalAlignMiddle, null),
      ),
    );
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'shj-table-setting-card',
      ref: ref,
      style: {
        opacity: opacity,
      },
    },
    /*#__PURE__*/ React.createElement(
      _Row,
      null,
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          className: 'setting-col center',
          span: 3,
        },
        /*#__PURE__*/ React.createElement('input', {
          type: 'checkbox',
          checked: !data.hidden,
          onChange: onChange,
        }),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          className: 'setting-col',
          span: 15,
        },
        data.title,
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          className: 'setting-col center',
          span: 6,
        },
        !data.width
          ? null
          : /*#__PURE__*/ React.createElement(
              _Space,
              {
                size: 'large',
              },
              itemType === 'left'
                ? notAlign()
                : /*#__PURE__*/ React.createElement(
                    _Tooltip,
                    {
                      placement: 'top',
                      title: '固定在列首',
                    },
                    /*#__PURE__*/ React.createElement(
                      'i',
                      {
                        onClick: onFixedLeft,
                      },
                      /*#__PURE__*/ React.createElement(VerticalAlignTop, null),
                    ),
                  ),
              itemType === 'right'
                ? notAlign()
                : /*#__PURE__*/ React.createElement(
                    _Tooltip,
                    {
                      placement: 'top',
                      title: '固定在列尾',
                    },
                    /*#__PURE__*/ React.createElement(
                      'i',
                      {
                        onClick: onFixedRight,
                      },
                      /*#__PURE__*/ React.createElement(
                        VerticalAlignBottom,
                        null,
                      ),
                    ),
                  ),
            ),
      ),
    ),
  );
};

export default SettingModal;

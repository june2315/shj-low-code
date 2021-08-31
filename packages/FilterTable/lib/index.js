'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _shjSearchExpandedBar = _interopRequireWildcard(
  require('shj-search-expanded-bar'),
);

var _shjCommonDragTable = _interopRequireDefault(
  require('shj-common-drag-table'),
);

require('./index.less');

var _excluded = [
    'columns',
    'onSearchFinish',
    'onSearchReset',
    'actionBtnBlock',
    'addonBefore',
    'addonAfter',
    'search',
  ],
  _excluded2 = ['itemType', 'addonOpts', 'addonTips', 'data'];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function FilterTable(props, ref) {
  var columns = props.columns,
    onSearchFinish = props.onSearchFinish,
    onSearchReset = props.onSearchReset,
    actionBtnBlock = props.actionBtnBlock,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    _props$search = props.search,
    search = _props$search === void 0 ? [] : _props$search,
    rest = _objectWithoutProperties(props, _excluded);

  var deptRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    deptOpts = _useState2[0],
    setDeptOpts = _useState2[1];

  var onCompanyChange = (0, _react.useCallback)(function () {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      form = _ref.form,
      name = _ref.name,
      subName = _ref.subName,
      getSubOptions = _ref.getSubOptions;

    form.setFieldsValue(_defineProperty({}, name, value));
    form.resetFields([subName]);

    if (typeof getSubOptions === 'function') {
      var res = getSubOptions(value);

      if (Object.prototype.toString.call(res) === '[object Promise]') {
        res.then(setDeptOpts);
      }
    }
  }, []);
  var TableComponent = _shjCommonDragTable.default;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'filter-table',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'search-wrap',
      },
      /*#__PURE__*/ _react.default.createElement(
        _shjSearchExpandedBar.default,
        {
          onFinish: onSearchFinish,
          onReset: onSearchReset,
          actionBtnBlock: actionBtnBlock,
          addonBefore: addonBefore,
          addonAfter: addonAfter,
        },
        search.map(function (d, i) {
          var itemType = d.itemType,
            addonOpts = d.addonOpts,
            addonTips = d.addonTips,
            data = d.data,
            rest = _objectWithoutProperties(d, _excluded2);

          var itemProps = _objectSpread(
            _objectSpread({}, rest),
            {},
            {
              addonProps: {
                name: ''.concat(rest.name, '_prefix'),
                options: addonOpts ? addonOpts : ['='],
                optionsTips: addonTips ? addonTips : {},
              },
            },
          );

          if (itemType === 'select') {
            return /*#__PURE__*/ _react.default.createElement(
              _shjSearchExpandedBar.FormSelect,
              _objectSpread(
                {
                  key: i,
                  valueEnum: data,
                },
                itemProps,
              ),
            );
          }

          if (itemType === 'company') {
            return /*#__PURE__*/ _react.default.createElement(
              _shjSearchExpandedBar.CompanySelect,
              _objectSpread(
                _objectSpread(
                  {
                    key: i,
                    data: data,
                  },
                  itemProps,
                ),
                {},
                {
                  onChange: onCompanyChange,
                },
              ),
            );
          }

          if (itemType === 'department') {
            return /*#__PURE__*/ _react.default.createElement(
              _shjSearchExpandedBar.DeptSelect,
              _objectSpread(
                {
                  key: i,
                  data: deptOpts,
                },
                itemProps,
              ),
            );
          }

          if (itemType === 'autoDate') {
            return /*#__PURE__*/ _react.default.createElement(
              _shjSearchExpandedBar.FormAutoDatePicker,
              _objectSpread(
                {
                  key: i,
                },
                itemProps,
              ),
            );
          }

          return /*#__PURE__*/ _react.default.createElement(
            _shjSearchExpandedBar.FormText,
            _objectSpread(
              {
                key: i,
              },
              itemProps,
            ),
          );
        }),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      TableComponent,
      _objectSpread(
        _objectSpread({}, rest),
        {},
        {
          ref: ref,
          columns: columns,
        },
      ),
    ),
  );
}

var _default = /*#__PURE__*/ (0, _react.forwardRef)(FilterTable);

exports.default = _default;

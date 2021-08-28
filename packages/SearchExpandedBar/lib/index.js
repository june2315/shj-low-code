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
exports.renderAddonFormItem = renderAddonFormItem;
exports.FormText = FormText;
exports.FormSelect = FormSelect;
exports.FormTreeSelect = FormTreeSelect;
exports.FormCascader = FormCascader;
exports.FormDatePicker = FormDatePicker;
exports.FormDateTimeRangePicker = FormDateTimeRangePicker;
exports.default = SearchForm;
Object.defineProperty(exports, 'CompanySelect', {
  enumerable: true,
  get: function get() {
    return _CompanySelect.CompanySelect;
  },
});
Object.defineProperty(exports, 'DeptSelect', {
  enumerable: true,
  get: function get() {
    return _DepartmentSelect.DeptSelect;
  },
});
exports.FormAutoDatePicker = void 0;

var _react = _interopRequireWildcard(require('react'));

var _rcResizeObserver = _interopRequireDefault(require('rc-resize-observer'));

var _antd = require('antd');

var _SearchPrefix = _interopRequireDefault(require('./SearchPrefix'));

var _CompanySelect = require('./CompanySelect');

var _DepartmentSelect = require('./DepartmentSelect');

require('./index.less');

var _excluded = ['addonProps', 'hidden', 'label', 'name'],
  _excluded2 = ['addonProps', 'hidden', 'label', 'name', 'valueEnum'],
  _excluded3 = ['addonProps', 'hidden', 'label', 'name'],
  _excluded4 = ['addonProps', 'hidden', 'label', 'name', 'rules', 'normalize'],
  _excluded5 = ['addonProps', 'hidden', 'label', 'name'],
  _excluded6 = ['addonProps', 'hidden', 'label', 'name'],
  _excluded7 = ['addonProps', 'hidden', 'label', 'name'];

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
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

var RangePicker = _antd.DatePicker.RangePicker;

function renderAddonFormItem(text, options, dom, addonProps) {
  var _addonProps$options, _addonProps$options2;

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'form-item-wrap '.concat(
        addonProps &&
          (addonProps === null || addonProps === void 0
            ? void 0
            : (_addonProps$options = addonProps.options) === null ||
              _addonProps$options === void 0
            ? void 0
            : _addonProps$options.length)
          ? 'addon-wrap'
          : '',
      ),
    },
    addonProps &&
      (addonProps === null || addonProps === void 0
        ? void 0
        : (_addonProps$options2 = addonProps.options) === null ||
          _addonProps$options2 === void 0
        ? void 0
        : _addonProps$options2.length)
      ? /*#__PURE__*/ _react.default.createElement(
          _SearchPrefix.default,
          _objectSpread(
            {
              className: 'addon-select',
            },
            addonProps,
          ),
        )
      : null,
    dom,
  );
}

function FormText(props) {
  var _addonProps$options3;

  var addonProps = props.addonProps,
    hidden = props.hidden,
    label = props.label,
    name = props.name,
    rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form.Item,
    {
      label: label,
      hidden: hidden,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'form-item-wrap '.concat(
          hidden ? 'form-item-wrap-hidden' : '',
        ),
      },
      addonProps &&
        (addonProps === null || addonProps === void 0
          ? void 0
          : (_addonProps$options3 = addonProps.options) === null ||
            _addonProps$options3 === void 0
          ? void 0
          : _addonProps$options3.length)
        ? /*#__PURE__*/ _react.default.createElement(
            _SearchPrefix.default,
            _objectSpread(
              {
                className: 'addon-select',
              },
              addonProps,
            ),
          )
        : null,
      /*#__PURE__*/ _react.default.createElement(
        _antd.Form.Item,
        {
          name: name,
          style: {
            flex: 1,
          },
          noStyle: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          _antd.Input,
          _objectSpread(
            {
              placeholder: '\u8BF7\u8F93\u5165',
            },
            rest,
          ),
        ),
      ),
    ),
  );
}

function FormSelect(props) {
  var _addonProps$options4;

  var addonProps = props.addonProps,
    hidden = props.hidden,
    label = props.label,
    name = props.name,
    _props$valueEnum = props.valueEnum,
    valueEnum = _props$valueEnum === void 0 ? {} : _props$valueEnum,
    rest = _objectWithoutProperties(props, _excluded2);

  var _options =
    props.options ||
    Object.entries(valueEnum).map(function (d) {
      return {
        label: d[1],
        value: d[0],
      };
    });

  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form.Item,
    {
      label: label,
      hidden: hidden,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'form-item-wrap '.concat(
          hidden ? 'form-item-wrap-hidden' : '',
        ),
      },
      addonProps &&
        (addonProps === null || addonProps === void 0
          ? void 0
          : (_addonProps$options4 = addonProps.options) === null ||
            _addonProps$options4 === void 0
          ? void 0
          : _addonProps$options4.length)
        ? /*#__PURE__*/ _react.default.createElement(
            _SearchPrefix.default,
            _objectSpread(
              {
                className: 'addon-select',
              },
              addonProps,
            ),
          )
        : null,
      /*#__PURE__*/ _react.default.createElement(
        _antd.Form.Item,
        {
          name: name,
          style: {
            flex: 1,
          },
          noStyle: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          _antd.Select,
          _objectSpread(
            _objectSpread(
              {
                placeholder: '\u8BF7\u9009\u62E9',
              },
              rest,
            ),
            {},
            {
              options: _options,
            },
          ),
        ),
      ),
    ),
  );
}

function FormTreeSelect(props) {
  var _addonProps$options5;

  var addonProps = props.addonProps,
    hidden = props.hidden,
    label = props.label,
    name = props.name,
    rest = _objectWithoutProperties(props, _excluded3);

  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form.Item,
    {
      label: label,
      hidden: hidden,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'form-item-wrap '.concat(
          hidden ? 'form-item-wrap-hidden' : '',
        ),
      },
      addonProps &&
        (addonProps === null || addonProps === void 0
          ? void 0
          : (_addonProps$options5 = addonProps.options) === null ||
            _addonProps$options5 === void 0
          ? void 0
          : _addonProps$options5.length)
        ? /*#__PURE__*/ _react.default.createElement(
            _SearchPrefix.default,
            _objectSpread(
              {
                className: 'addon-select',
              },
              addonProps,
            ),
          )
        : null,
      /*#__PURE__*/ _react.default.createElement(
        _antd.Form.Item,
        {
          name: name,
          style: {
            flex: 1,
          },
          noStyle: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          _antd.TreeSelect,
          _objectSpread(
            {
              placeholder: '\u8BF7\u9009\u62E9',
            },
            rest,
          ),
        ),
      ),
    ),
  );
}

function FormCascader(props) {
  var _addonProps$options6;

  var addonProps = props.addonProps,
    hidden = props.hidden,
    label = props.label,
    name = props.name,
    rules = props.rules,
    normalize = props.normalize,
    rest = _objectWithoutProperties(props, _excluded4); // console.log(rules)

  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form.Item,
    {
      label: label,
      hidden: hidden,
      rules: rules,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'form-item-wrap '.concat(
          hidden ? 'form-item-wrap-hidden' : '',
        ),
      },
      addonProps &&
        (addonProps === null || addonProps === void 0
          ? void 0
          : (_addonProps$options6 = addonProps.options) === null ||
            _addonProps$options6 === void 0
          ? void 0
          : _addonProps$options6.length)
        ? /*#__PURE__*/ _react.default.createElement(
            _SearchPrefix.default,
            _objectSpread(
              {
                className: 'addon-select',
              },
              addonProps,
            ),
          )
        : null,
      /*#__PURE__*/ _react.default.createElement(
        _antd.Form.Item,
        {
          name: name,
          label: label,
          normalize: normalize,
          style: {
            flex: 1,
          },
          noStyle: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          _antd.Cascader,
          _objectSpread(
            _objectSpread({}, rest),
            {},
            {
              showSearch: function showSearch(inputValue, path) {
                return path.some(function (option) {
                  return (
                    option.label
                      .toLowerCase()
                      .indexOf(inputValue.toLowerCase()) > -1
                  );
                });
              },
            },
          ),
        ),
      ),
    ),
  );
}

function FormDatePicker(props) {
  var _addonProps$options7;

  var addonProps = props.addonProps,
    hidden = props.hidden,
    label = props.label,
    name = props.name,
    rest = _objectWithoutProperties(props, _excluded5);

  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form.Item,
    {
      label: label,
      hidden: hidden,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'form-item-wrap '.concat(
          hidden ? 'form-item-wrap-hidden' : '',
        ),
      },
      addonProps &&
        (addonProps === null || addonProps === void 0
          ? void 0
          : (_addonProps$options7 = addonProps.options) === null ||
            _addonProps$options7 === void 0
          ? void 0
          : _addonProps$options7.length)
        ? /*#__PURE__*/ _react.default.createElement(
            _SearchPrefix.default,
            _objectSpread(
              {
                className: 'addon-select',
              },
              addonProps,
            ),
          )
        : null,
      /*#__PURE__*/ _react.default.createElement(
        _antd.Form.Item,
        {
          name: name,
          style: {
            flex: 1,
          },
          noStyle: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          _antd.DatePicker,
          _objectSpread(
            {
              placeholder: '\u8BF7\u9009\u62E9',
            },
            rest,
          ),
        ),
      ),
    ),
  );
}

function FormDateTimeRangePicker(props) {
  var _addonProps$options8;

  var addonProps = props.addonProps,
    hidden = props.hidden,
    label = props.label,
    name = props.name,
    rest = _objectWithoutProperties(props, _excluded6);

  var defaultOpts = ['=', '>=', '>', '<=', '<'];
  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form.Item,
    {
      label: label,
      hidden: hidden,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'form-item-wrap '.concat(
          hidden ? 'form-item-wrap-hidden' : '',
        ),
      },
      addonProps &&
        (addonProps === null || addonProps === void 0
          ? void 0
          : (_addonProps$options8 = addonProps.options) === null ||
            _addonProps$options8 === void 0
          ? void 0
          : _addonProps$options8.length)
        ? /*#__PURE__*/ _react.default.createElement(
            _SearchPrefix.default,
            _objectSpread(
              {
                className: 'addon-select',
                options: defaultOpts,
              },
              addonProps,
            ),
          )
        : null,
      /*#__PURE__*/ _react.default.createElement(
        _antd.Form.Item,
        {
          name: name,
          style: {
            flex: 1,
          },
          noStyle: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          RangePicker,
          _objectSpread(
            {
              showTime: true,
              placeholder: '\u8D77\u6B62',
            },
            rest,
          ),
        ),
      ),
    ),
  );
}

var FormAutoDatePicker = /*#__PURE__*/ (function (_React$Component) {
  _inherits(FormAutoDatePicker, _React$Component);

  var _super = _createSuper(FormAutoDatePicker);

  function FormAutoDatePicker(props) {
    var _this;

    _classCallCheck(this, FormAutoDatePicker);

    _this = _super.call(this, props);

    _this._onChange = function (value) {
      var form = _this.props.form;
      form.resetFields([_this.props.name]); // console.log(this.props)

      _this.setState({
        type: />=|>|<=|</.test(value) ? 'default' : 'range',
      });
    };

    _this.state = {
      type: 'range',
    };
    return _this;
  }

  _createClass(FormAutoDatePicker, [
    {
      key: 'render',
      value: function render() {
        var _addonProps$options9;

        var _this$props = this.props,
          addonProps = _this$props.addonProps,
          hidden = _this$props.hidden,
          label = _this$props.label,
          name = _this$props.name,
          rest = _objectWithoutProperties(_this$props, _excluded7);

        var defaultOpts = ['=', '>=', '>', '<=', '<'];
        var defaultOptsTips = {
          '>=': '大于等于',
          '>': '大于',
          '<=': '小于等于',
          '<': '小于',
        };
        var component =
          this.state.type === 'default'
            ? /*#__PURE__*/ _react.default.createElement(
                _antd.DatePicker,
                _objectSpread(
                  {
                    placeholder: '\u8BF7\u9009\u62E9',
                  },
                  rest,
                ),
              )
            : /*#__PURE__*/ _react.default.createElement(
                RangePicker,
                _objectSpread(
                  {
                    placeholder: ['起', '止'],
                  },
                  rest,
                ),
              );
        return /*#__PURE__*/ _react.default.createElement(
          _antd.Form.Item,
          {
            label: label,
            hidden: hidden,
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'form-item-wrap '.concat(
                hidden ? 'form-item-wrap-hidden' : '',
              ),
            },
            addonProps &&
              (addonProps === null || addonProps === void 0
                ? void 0
                : (_addonProps$options9 = addonProps.options) === null ||
                  _addonProps$options9 === void 0
                ? void 0
                : _addonProps$options9.length)
              ? /*#__PURE__*/ _react.default.createElement(
                  _SearchPrefix.default,
                  _objectSpread(
                    {
                      className: 'addon-select',
                      options: defaultOpts,
                      optionsTips: defaultOptsTips,
                      onChange: this._onChange,
                    },
                    addonProps,
                  ),
                )
              : null,
            /*#__PURE__*/ _react.default.createElement(
              _antd.Form.Item,
              {
                name: name,
                style: {
                  flex: 1,
                },
                noStyle: true,
              },
              component,
            ),
          ),
        );
      },
    },
  ]);

  return FormAutoDatePicker;
})(_react.default.Component);

exports.FormAutoDatePicker = FormAutoDatePicker;
var CONFIG_SPAN_BREAKPOINTS = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 1057,
  xl: 1057,
  xxl: Infinity,
};
/**
 * 配置表单列变化的容器宽度断点
 */

var BREAKPOINTS = {
  vertical: [
    // [breakpoint, cols, layout]
    [513, 1, 'vertical'],
    [785, 2, 'vertical'],
    [1057, 3, 'vertical'],
    [Infinity, 4, 'vertical'],
  ],
  default: [
    [513, 1, 'vertical'],
    [701, 2, 'vertical'],
    [1062, 3, 'horizontal'],
    [1352, 3, 'horizontal'],
    [Infinity, 4, 'horizontal'],
  ],
};

var getSpanConfig = function getSpanConfig(layout, width, span) {
  if (span && typeof span === 'number') {
    return {
      span: span,
      layout: layout,
    };
  }

  var spanConfig = span
    ? Object.keys(span).map(function (key) {
        return [CONFIG_SPAN_BREAKPOINTS[key], 24 / span[key], 'horizontal'];
      })
    : BREAKPOINTS[layout || 'default'];
  var breakPoint = (spanConfig || BREAKPOINTS.default).find(function (item) {
    return width < item[0] + 16;
  });
  return {
    span: 24 / breakPoint[1],
    layout: breakPoint[2],
  };
};

function SearchForm(props) {
  var defaultColsNumber = props.defaultColsNumber,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    _props$actionBtnPosit = props.actionBtnPosition,
    actionBtnPosition =
      _props$actionBtnPosit === void 0 ? 'bottom' : _props$actionBtnPosit,
    _props$actionBtnBlock = props.actionBtnBlock,
    actionBtnBlock =
      _props$actionBtnBlock === void 0 ? false : _props$actionBtnBlock,
    _props$colSize = props.colSize,
    colSize = _props$colSize === void 0 ? 1 : _props$colSize;

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    expand = _useState2[0],
    setExpand = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
      return getSpanConfig('', 1024 + 16);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    spanSize = _useState4[0],
    setSpanSize = _useState4[1];

  var _ref = (props.form && [props.form]) || _antd.Form.useForm(),
    _ref2 = _slicedToArray(_ref, 1),
    form = _ref2[0];

  var showLength =
    defaultColsNumber !== undefined
      ? defaultColsNumber
      : Math.max(1, 48 / spanSize.span - (actionBtnBlock ? 0 : 1));
  var itemsWithInfo = [];
  var items = Array.isArray(props.children) ? props.children : [props.children];
  var showCollapseBtn = items.length - 1 >= showLength ? undefined : false; // totalSpan 统计控件占的位置，计算 offset 保证查询按钮在最后一列

  var totalSpan = 0;
  var currentSpan = 0;
  var lastVisibleItemIndex = items.length - 1;
  var actionAdd = false;

  var ActionItem = function ActionItem() {
    return /*#__PURE__*/ _react.default.createElement(
      _antd.Col,
      {
        span: actionBtnBlock ? 24 : spanSize.span,
        offset:
          actionBtnPosition === 'top' || actionBtnBlock
            ? 0
            : 24 - spanSize.span - (totalSpan % 24),
        style: {
          textAlign: 'right',
        },
      },
      addonBefore,
      /*#__PURE__*/ _react.default.createElement(
        _antd.Button,
        {
          type: 'primary',
          htmlType: 'submit',
        },
        '\u641C\u7D22',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _antd.Button,
        {
          style: {
            margin: '0 0 0 8px',
          },
          onClick: function onClick() {
            form.resetFields();
            props.onReset && props.onReset();
          },
        },
        '\u91CD\u7F6E',
      ),
      addonAfter,
      showCollapseBtn !== false
        ? /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              style: {
                fontSize: 12,
                marginLeft: '8px',
              },
              onClick: function onClick() {
                setExpand(!expand);
              },
            },
            expand
              ? /*#__PURE__*/ _react.default.createElement('i', {
                  className: 'up-arrow',
                })
              : /*#__PURE__*/ _react.default.createElement('i', {
                  className: 'down-arrow',
                }),
            ' ',
            expand ? '收起' : '展开',
          )
        : null,
    );
  };

  items.forEach(function (item, index) {
    var _item$props, _item$props2, _item$props3;

    // 如果 formItem 自己配置了 hidden，默认使用它自己的
    var hidden =
      (item === null || item === void 0
        ? void 0
        : (_item$props = item.props) === null || _item$props === void 0
        ? void 0
        : _item$props.hidden) || false;
    var colSize = /*#__PURE__*/ _react.default.isValidElement(item)
      ? (item === null || item === void 0
          ? void 0
          : (_item$props2 = item.props) === null || _item$props2 === void 0
          ? void 0
          : _item$props2.colSize) || 1
      : 1;
    var colSpan = Math.min(spanSize.span * colSize, 24);

    if ((!expand && index >= showLength) || hidden) {
      hidden = true;
    } else {
      if (24 - (totalSpan % 24) < colSpan) {
        // 如果当前行空余位置放不下，那么折行
        totalSpan += 24 - (totalSpan % 24);
      }

      totalSpan += colSpan;
      lastVisibleItemIndex = index;
    }
    /* 将展开按钮放置在上面 */

    if (actionBtnPosition === 'top' && !actionAdd && totalSpan + colSpan > 24) {
      itemsWithInfo.push({
        span: spanSize.span,
        element: /*#__PURE__*/ _react.default.createElement(ActionItem, null),
        key: 'action_item',
      });
      actionAdd = true;
    } // console.log('totalSpan', totalSpan)

    itemsWithInfo.push({
      span: colSpan,
      element: item,
      key: /*#__PURE__*/ _react.default.isValidElement(item)
        ? item.key ||
          ''
            .concat(
              ((_item$props3 = item.props) === null || _item$props3 === void 0
                ? void 0
                : _item$props3.name) || index,
              '-',
            )
            .concat(index, '}')
        : index,
      hidden: hidden,
    });
  });
  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form,
    {
      form: form,
      name: 'advanced_search',
      className: 'ant-advanced-search-form  '.concat(
        expand ? '' : 'form-collapse',
      ),
      onFinish: props.onFinish,
      requiredMark: false,
    },
    /*#__PURE__*/ _react.default.createElement(
      _rcResizeObserver.default,
      {
        key: 'resize-observer',
        onResize: function onResize(_ref3) {
          var width = _ref3.width;
          setSpanSize(getSpanConfig('', width));
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        _antd.Row,
        {
          gutter: 16,
          justify: 'start',
          key: 'resize-observer-row',
        },
        itemsWithInfo.map(function (item, index) {
          if (
            /*#__PURE__*/ _react.default.isValidElement(item.element) &&
            item.hidden
          ) {
            return /*#__PURE__*/ _react.default.cloneElement(item.element, {
              hidden: true,
              key: item.key || index,
            });
          }

          currentSpan += item.span;

          if (item.key == 'action_item') {
            return /*#__PURE__*/ _react.default.cloneElement(item.element, {
              key: item.key,
            });
          }

          var colItem = /*#__PURE__*/ _react.default.createElement(
            _antd.Col,
            {
              key: item.key,
              span: item.span,
            },
            /*#__PURE__*/ _react.default.cloneElement(item.element, {
              form: form,
            }),
          ); // if (split && currentSpan % 24 === 0 && index < lastVisibleItemIndex) {
          //     return [
          //         colItem,
          //         <Divider key="line" style={{ marginTop: -8, marginBottom: 16 }} dashed />,
          //     ];
          // }

          return colItem;
        }),
        actionBtnPosition === 'top'
          ? null
          : /*#__PURE__*/ _react.default.createElement(ActionItem, null),
      ),
    ),
  );
}

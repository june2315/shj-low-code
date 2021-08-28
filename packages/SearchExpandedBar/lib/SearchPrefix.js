'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.SearchPrefix = SearchPrefix;
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

var _excluded = ['name', 'options', 'optionsTips', 'className'];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

function SearchPrefix(_ref) {
  var name = _ref.name,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$optionsTips = _ref.optionsTips,
    optionsTips = _ref$optionsTips === void 0 ? {} : _ref$optionsTips,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);

  if (!optionsTips['∈']) optionsTips['∈'] = '包含';
  if (!optionsTips['LIKE']) optionsTips['LIKE'] = '包含';
  if (!optionsTips['<>']) optionsTips['<>'] = '不等于';
  return /*#__PURE__*/ _react.default.createElement(
    _antd.Form.Item,
    {
      name: name,
      noStyle: true,
      initialValue: options[0],
    },
    /*#__PURE__*/ _react.default.createElement(
      _antd.Select,
      _objectSpread(
        _objectSpread({}, rest),
        {},
        {
          className: className,
          style: {
            width: 40,
          },
          showArrow: false,
          size: 'small',
          dropdownStyle: {
            minWidth: 100,
          },
        },
      ),
      options.map(function (sbl, i) {
        return /*#__PURE__*/ _react.default.createElement(
          _antd.Select.Option,
          {
            key: ''.concat(name, '_').concat(sbl, '_').concat(i),
            className: 'symbol-option',
            value: sbl,
          },
          optionsTips[sbl]
            ? /*#__PURE__*/ _react.default.createElement(
                _antd.Tooltip,
                {
                  title: optionsTips[sbl],
                  placement: 'right',
                },
                /*#__PURE__*/ _react.default.createElement('div', null, sbl),
              )
            : /*#__PURE__*/ _react.default.createElement('span', null, sbl),
        );
      }),
    ),
  );
}

var _default = SearchPrefix;
exports.default = _default;

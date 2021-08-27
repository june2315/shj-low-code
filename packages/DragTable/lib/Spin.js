'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Spin = function Spin(props) {
  var _props$tip = props.tip,
    tip = _props$tip === void 0 ? '' : _props$tip;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'shj-spin shj-spin-spinning '.concat(
        tip ? 'shj-spin-show-text' : '',
      ),
    },
    /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'shj-spin-dot shj-spin-dot-spin',
      },
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'shj-spin-text',
      },
      tip,
    ),
  );
};

var _default = Spin;
exports.default = _default;

import React from 'react';

var Spin = function Spin(props) {
  var _props$tip = props.tip,
    tip = _props$tip === void 0 ? '' : _props$tip;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'shj-spin shj-spin-spinning '.concat(
        tip ? 'shj-spin-show-text' : '',
      ),
    },
    /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'shj-spin-dot shj-spin-dot-spin',
      },
      /*#__PURE__*/ React.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
      /*#__PURE__*/ React.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
      /*#__PURE__*/ React.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
      /*#__PURE__*/ React.createElement('i', {
        className: 'shj-spin-dot-item',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'shj-spin-text',
      },
      tip,
    ),
  );
};

export default Spin;

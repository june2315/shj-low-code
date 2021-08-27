import 'antd/es/modal/style';
import _Modal from 'antd/es/modal';
var _excluded = ['okText', 'cancelText', 'prefixCls'];

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

import React from 'react';
import ReactDOM from 'react-dom';
export var destroyFns = [];

var CommonDialog = function CommonDialog() {
  var config =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var div = document.createElement('div');
  document.body.appendChild(div); // eslint-disable-next-line @typescript-eslint/no-use-before-define

  var currentConfig = _objectSpread(
    _objectSpread(
      {
        maskClosable: false,
      },
      config,
    ),
    {},
    {
      close: close,
      visible: true,
    },
  );

  function destroy() {
    var unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i]; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function _onCancel(props) {
    var res = null;
    if (
      Object.prototype.toString.call(config.beforeClose) === '[object Function]'
    )
      res = config.beforeClose();

    if (Object.prototype.toString.call(res) === '[object Promise]') {
      res.then(function () {
        return props.close({
          triggerCancel: true,
        });
      });
    } else {
      props.close({
        triggerCancel: true,
      });
    }
  }

  function render(_ref) {
    var okText = _ref.okText,
      cancelText = _ref.cancelText,
      prefixCls = _ref.prefixCls,
      props = _objectWithoutProperties(_ref, _excluded);

    /**
     * https://github.com/ant-design/ant-design/issues/23623
     * Sync render blocks React event. Let's make this async.
     */
    setTimeout(function () {
      ReactDOM.render(
        /*#__PURE__*/ React.createElement(
          _Modal,
          _objectSpread(
            {
              footer: null,
              onCancel: function onCancel() {
                return _onCancel(props);
              },
            },
            props,
          ),
          props.content,
        ),
        div,
      );
    });
  }

  function close() {
    for (
      var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = _objectSpread(
      _objectSpread({}, currentConfig),
      {},
      {
        visible: false,
        afterClose: function afterClose() {
          return destroy.apply(void 0, args);
        },
      },
    );
    render(currentConfig);
  }

  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = _objectSpread(
        _objectSpread({}, currentConfig),
        configUpdate,
      );
    }

    render(currentConfig);
  }

  render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update: update,
  };
};

export default CommonDialog;

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

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
        e: function e(_e) {
          throw _e;
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
    e: function e(_e2) {
      didErr = true;
      err = _e2;
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

// JSON adapt JS
var ListAdapter = /*#__PURE__*/ (function () {
  function ListAdapter() {
    var props =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ListAdapter);

    this.props = void 0;
    this.props = props;
  }

  _createClass(ListAdapter, [
    {
      key: 'getConfig',
      value: function getConfig() {
        var _ref =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {},
          restData = _ref.restData;

        var _this$props = this.props,
          config = _this$props.config,
          _this$props$customRen = _this$props.customRender,
          customRender =
            _this$props$customRen === void 0 ? {} : _this$props$customRen,
          _this$props$events = _this$props.events,
          events = _this$props$events === void 0 ? {} : _this$props$events,
          _this$props$status = _this$props.status,
          status = _this$props$status === void 0 ? {} : _this$props$status;
        var _config$tabs = config.tabs,
          tabs = _config$tabs === void 0 ? [] : _config$tabs,
          _config$columns = config.columns,
          columns = _config$columns === void 0 ? [] : _config$columns,
          _config$search = config.search,
          search = _config$search === void 0 ? [] : _config$search,
          _config$footer = config.footer,
          footer = _config$footer === void 0 ? [] : _config$footer;

        var _iterator = _createForOfIteratorHelper(columns),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var column = _step.value;

            if (typeof column.render === 'string') {
              column.render =
                customRender[column.render] &&
                customRender[column.render].bind(events);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(search),
          _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var item = _step2.value;

            if (typeof item.data === 'string' && restData[item.data]) {
              item.data = restData[item.data];
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var _iterator3 = _createForOfIteratorHelper(footer),
          _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _item = _step3.value;
            var itemEvents = _item.events,
              disabled = _item.disabled;

            if (itemEvents) {
              var _iterator4 = _createForOfIteratorHelper(itemEvents),
                _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  var itemEvent = _step4.value;
                  var names = itemEvent.split(':');
                  _item[names[0]] = events[names[1] || names[0]];
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              delete _item.events;
            }

            if (typeof disabled === 'string') {
              switch (Object.prototype.toString.call(status[disabled])) {
                case '[object Function]':
                  _item.isDisabled = status[disabled];
                  delete _item.disabled;
                  break;
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return {
          columns: columns,
          search: search,
          footer: footer,
          tabs: tabs,
        };
      },
    },
  ]);

  return ListAdapter;
})();

exports.default = ListAdapter;

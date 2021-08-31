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

var _antd = require('antd');

var _shjFilterTable = _interopRequireDefault(require('shj-filter-table'));

var _ListAdapter = _interopRequireDefault(require('./modules/ListAdapter'));

var _excluded = [
    'request',
    'cacheDisabled',
    'filter',
    'toolbar',
    'sticky',
    'rowSelection',
    'name',
    'paramsFormatter',
  ],
  _excluded2 = ['fetchList'],
  _excluded3 = ['onClick', 'label', 'isDisabled'];

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
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

var TabPane = _antd.Tabs.TabPane;
/**
 * @param {Object} props { config, requests, events, status, customRender }
 */

function SHJLowCodeList(props, ref) {
  var _props$config = props.config,
    request = _props$config.request,
    cacheDisabled = _props$config.cacheDisabled,
    filter = _props$config.filter,
    toolbar = _props$config.toolbar,
    sticky = _props$config.sticky,
    rowSelection = _props$config.rowSelection,
    name = _props$config.name,
    paramsFormatter = _props$config.paramsFormatter,
    rest = _objectWithoutProperties(_props$config, _excluded);

  var _useState = (0, _react.useState)('1'),
    _useState2 = _slicedToArray(_useState, 2),
    tabKey = _useState2[0],
    setTabKey = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRowKeys = _useState4[0],
    setSelectedRowKeys = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedRows = _useState6[0],
    setSelectedRows = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    params = _useState8[0],
    setParams = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    restData = _useState10[0],
    setRestData = _useState10[1];

  var _props$auth = props.auth,
    auth = _props$auth === void 0 ? {} : _props$auth;

  var _ref = props.events || {},
    onTabChange = _ref.onTabChange;

  var _ref2 = props.request || {},
    fetchList = _ref2.fetchList,
    restRequests = _objectWithoutProperties(_ref2, _excluded2);

  var listAdapter = new _ListAdapter.default(_objectSpread({}, props));

  var _listAdapter$getConfi = listAdapter.getConfig({
      restData: restData,
    }),
    tabs = _listAdapter$getConfi.tabs,
    columns = _listAdapter$getConfi.columns,
    search = _listAdapter$getConfi.search,
    footer = _listAdapter$getConfi.footer;

  var tableRef = (0, _react.useRef)();

  var reload = function reload() {
    setSelectedRowKeys([]);
    setSelectedRows([]);
    tableRef.current.reload();
  };

  (0, _react.useImperativeHandle)(
    ref,
    function () {
      return {
        reload: reload,
      };
    },
    [],
  );
  (0, _react.useEffect)(function () {
    fetchRest(restRequests);
    return function () {};
  }, []);
  var fetchData = (0, _react.useCallback)(function () {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    var fetch = fetchList || props.config.request; // 兼容1.0旧版本代码

    return new Promise(
      /*#__PURE__*/ (function () {
        var _ref3 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
            resolve,
            reject,
          ) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    try {
                      if (typeof fetch === 'function') {
                        fetch.apply(void 0, args).then(function (_ref4) {
                          var records = _ref4.records,
                            total = _ref4.total;
                          console.log(records);
                          resolve({
                            data: {
                              data: records,
                              total: total,
                            },
                            success: true,
                          });
                        });
                      }
                    } catch (e) {
                      console.log(e);
                      reject({
                        success: false,
                      });
                    }

                  case 1:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          }),
        );

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      })(),
    );
  }, []);

  var fetchRest = function fetchRest(restRequests) {
    var restReq = [];

    if (restRequests) {
      for (var key in restRequests) {
        if (typeof restRequests[key] === 'function')
          restReq.push(restRequests[key]());
      }
    }

    return Promise.all(restReq).then(function (res) {
      var restData = {};

      var _iterator = _createForOfIteratorHelper(res),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;
          restData = _objectSpread(_objectSpread({}, restData), item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      setRestData(restData);
    });
  };

  var onSearchFinish = (0, _react.useCallback)(function (value) {
    if (
      Object.prototype.toString.call(paramsFormatter) === '[object Function]'
    ) {
      setParams(paramsFormatter(value));
    } else {
      setParams(value);
    }
  }, []);
  var onSearchReset = (0, _react.useCallback)(function () {
    setParams({});
  }, []);

  var onFooterAction = function onFooterAction(func, ev) {
    func &&
      func({
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        methods: {
          reload: reload,
        },
        event: ev,
      });
  };

  var renderFooter = function renderFooter() {
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      footer
        .map(function (d, i) {
          var _onClick = d.onClick,
            label = d.label,
            isDisabled = d.isDisabled,
            rest = _objectWithoutProperties(d, _excluded3);

          var disabled =
            isDisabled &&
            isDisabled({
              selectedRowKeys: selectedRowKeys,
              selectedRows: selectedRows,
            });

          var component = /*#__PURE__*/ _react.default.createElement(
            _antd.Button,
            _objectSpread(
              _objectSpread({}, rest),
              {},
              {
                key: 'footer_btn_'.concat(d.key || i),
                onClick: function onClick(ev) {
                  return onFooterAction(_onClick, ev);
                },
                disabled: disabled,
              },
            ),
            label,
          );

          if (d.auth) return auth[d.auth] ? component : null;
          return component;
        })
        .filter(function (d) {
          return !!d;
        }),
    );
  };

  var wrapperSearch = function wrapperSearch(searchConfig) {
    return searchConfig.map(function (d) {
      if (!d.addonOpts) d.addonOpts = [];
      return d;
    });
  };

  return /*#__PURE__*/ _react.default.createElement(
    _antd.Skeleton,
    {
      loading: props.loading,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: {
          overflow: 'hidden',
        },
      },
      tabs && tabs.length
        ? /*#__PURE__*/ _react.default.createElement(
            _antd.Tabs,
            {
              className: 'common-tab',
              defaultActiveKey: tabKey,
              onChange: onTabChange,
            },
            tabs.map(function (d, i) {
              return /*#__PURE__*/ _react.default.createElement(TabPane, {
                tab: d.tab,
                key: d.key,
              });
            }),
          )
        : null,
      /*#__PURE__*/ _react.default.createElement(
        _shjFilterTable.default,
        _objectSpread(
          _objectSpread({}, rest),
          {},
          {
            cacheKey: name,
            sticky: sticky,
            ref: tableRef,
            search: wrapperSearch(search),
            onSearchFinish: onSearchFinish,
            onSearchReset: onSearchReset,
            columns: columns,
            params: params,
            request: fetchData,
            footer: renderFooter,
            cacheDisabled: cacheDisabled,
            filter: filter,
            toolbar: toolbar,
            rowSelection:
              rowSelection === false
                ? null
                : {
                    selectedRowKeys: selectedRowKeys,
                    onChange: function onChange(selectedRowKeys, selectedRows) {
                      setSelectedRowKeys(selectedRowKeys);
                      setSelectedRows(selectedRows);
                    },
                  },
          },
        ),
      ),
    ),
  );
}

var _default = /*#__PURE__*/ (0, _react.forwardRef)(SHJLowCodeList);

exports.default = _default;

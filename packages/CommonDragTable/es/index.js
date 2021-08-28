import 'antd/es/pagination/style';
import _Pagination from 'antd/es/pagination';
import 'antd/es/menu/style';
import _Menu from 'antd/es/menu';
import 'antd/es/dropdown/style';
import _Dropdown from 'antd/es/dropdown';
import 'antd/es/tooltip/style';
import _Tooltip from 'antd/es/tooltip';
import 'antd/es/space/style';
import _Space from 'antd/es/space';
import 'antd/es/select/style';
import _Select from 'antd/es/select';
import 'antd/es/row/style';
import _Row from 'antd/es/row';
import 'antd/es/config-provider/style';
import _ConfigProvider from 'antd/es/config-provider';
import 'antd/es/form/style';
import _Form from 'antd/es/form';
var _excluded = ['request', 'footer', 'params', 'filterConfig'];

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

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import DragTable from 'shj-drag-table';
import zhCN from 'antd/es/locale/zh_CN';
import { IconReload, IconGutter, IconSetting } from './Icon';
import './index.less';
var CommonDragTable = /*#__PURE__*/ forwardRef(function (props, ref) {
  var request = props.request,
    footer = props.footer,
    params = props.params,
    filterConfig = props.filterConfig,
    others = _objectWithoutProperties(props, _excluded);

  var tableRef = useRef();

  var _Form$useForm = _Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    total = _useState4[0],
    setTotal = _useState4[1];

  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    filter = _useState6[0],
    setFilter = _useState6[1];

  var _useState7 = useState({
      current: 1,
      pageSize: 10,
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    pageParams = _useState8[0],
    setPageParams = _useState8[1];

  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];

  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    tableSizeCls = _useState12[0],
    setTableSizeCls = _useState12[1];

  useImperativeHandle(ref, function () {
    return {
      reload: function reload() {
        return _onReload();
      },
      updateDataOfId: function updateDataOfId(record) {
        var nextData = data.map(function (d, i) {
          if (d.id === record.id) return record;
          return d;
        });
        setData(nextData);
      },
      reset: function reset() {
        var data =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        setPageParams(
          _objectSpread(
            _objectSpread({}, pageParams),
            {},
            {
              current: 1,
            },
          ),
        );
        setFilter(data);
      },
      resetPagination: function resetPagination() {
        _resetPagination();
      },
    };
  });
  useEffect(
    function () {
      _request();

      return function () {};
    },
    [filter, pageParams],
  );
  useEffect(
    function () {
      _resetPagination();

      return function () {};
    },
    [params],
  );

  var _resetPagination = function _resetPagination() {
    setPageParams(
      _objectSpread(
        _objectSpread({}, pageParams),
        {},
        {
          current: 1,
        },
      ),
    );
  };

  var _request = function _request() {
    // console.log('request')
    if (loading) return;
    setLoading(true);
    var result =
      request &&
      request(
        _objectSpread(
          _objectSpread(_objectSpread({}, pageParams), filter),
          {},
          {
            query: params,
          },
        ),
      );

    if (Object.prototype.toString.call(result) === '[object Promise]') {
      result
        .then(function (resp) {
          if (resp.success && resp.data) {
            var _resp$data = resp.data,
              _data = _resp$data.data,
              _total = _resp$data.total;
            setTotal(_total);
            setData(_data);
          }

          setLoading(false);
          return resp;
        })
        .catch(function (error) {
          setLoading(false);
          console.log(error);
        });
    } else {
      setLoading(false);
    }

    return result;
  };

  var _onFilterChange = function _onFilterChange(changedValues, allValues) {
    if (
      Object.values(allValues).filter(function (d) {
        return !!d;
      }).length
    ) {
      allValues.asc = allValues.asc === '1';
    }

    var newFilter = {
      orders: [allValues],
    };
    setFilter(newFilter);
    setPageParams(
      _objectSpread(
        _objectSpread({}, pageParams),
        {},
        {
          current: 1,
        },
      ),
    );
  };

  var _onReload = function _onReload() {
    _request();
  };

  var _onSetting = function _onSetting() {
    tableRef.current.openSetting();
  };

  var _onPageChange = useCallback(function (page, pageSize) {
    setPageParams({
      current: page,
      pageSize: pageSize,
    });
    props.onChange && props.onChange(page, pageSize);
  }, []);

  var _onGutterChange = useCallback(function (value) {
    var key = value.key;
    setTableSizeCls(key !== 'table-default' ? key : '');
  }, []);

  var mergeConfig = function mergeConfig(target, defaultValues) {
    // console.log(target, defaultValues)
    if (!target) return defaultValues;
    if (Object.prototype.toString.call(target) !== '[object Object]')
      return target;

    var result = _objectSpread({}, defaultValues);

    if (target) {
      for (var key in target) {
        var item = target[key];

        if (
          Object.prototype.toString.call(item) !==
          Object.prototype.toString.call(defaultValues[key])
        ) {
          switch (Object.prototype.toString.call(defaultValues[key])) {
            case '[object Array]':
              result[key] = defaultValues[key];

              for (var i in item) {
                result[key][i] = item[i] || defaultValues[key][i];
              }

              break;
          }
        } else {
          switch (Object.prototype.toString.call(item)) {
            case '[object Object]':
              item = mergeConfig(item, defaultValues[key]);
              break;

            case '[object Array]':
              result[key] = item || defaultValues[key];

              for (var _i2 = 0; _i2 < item.length; _i2++) {
                item[_i2] = mergeConfig(item[_i2], defaultValues[key][_i2]);
                result[key][_i2] = item[_i2] || defaultValues[key][_i2];
              }

              break;
          }

          result[key] = item || defaultValues[key];
        }
      }
    } // console.log(result)

    return result;
  };

  var _filterConfig = mergeConfig(filterConfig, {
    column: {
      placeholder: '默认排序',
      options: ['last_updated_time:更新时间', 'created_time:创建时间'],
    },
    asc: {
      placeholder: '排序方式',
      options: ['1:升序', '0:降序'],
    },
  });

  return /*#__PURE__*/ React.createElement(
    _ConfigProvider,
    {
      locale: zhCN,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'shj-common-drag-table',
      },
      /*#__PURE__*/ React.createElement(
        _Row,
        {
          className: 'shj-drag-table-toolbar',
          justify: 'end',
          align: 'middle',
        },
        props.filter === false
          ? null
          : props.filter ||
              /*#__PURE__*/ React.createElement(
                _Form,
                {
                  className: 'shj-table-toolbar-form',
                  form: form,
                  onValuesChange: _onFilterChange,
                },
                /*#__PURE__*/ React.createElement(
                  _Form.Item,
                  {
                    name: 'column',
                    noStyle: true,
                  },
                  /*#__PURE__*/ React.createElement(
                    _Select,
                    {
                      bordered: false,
                      placeholder:
                        _filterConfig.column &&
                        _filterConfig.column.placeholder,
                      allowClear: true,
                      disabled: loading,
                    },
                    _filterConfig.column &&
                      _filterConfig.column.options &&
                      _filterConfig.column.options.map(function (d) {
                        var entry = d.split(':');
                        var value = entry[0];
                        var label = entry[1] || entry[0];
                        return /*#__PURE__*/ React.createElement(
                          _Select.Option,
                          {
                            key: value,
                            value: value,
                          },
                          label,
                        );
                      }),
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  _Form.Item,
                  {
                    name: 'asc',
                    noStyle: true,
                  },
                  /*#__PURE__*/ React.createElement(
                    _Select,
                    {
                      bordered: false,
                      placeholder:
                        _filterConfig.asc && _filterConfig.asc.placeholder,
                      allowClear: true,
                      disabled: loading,
                    },
                    _filterConfig.asc &&
                      _filterConfig.asc.options &&
                      _filterConfig.asc.options.map(function (d) {
                        var entry = d.split(':');
                        var value = entry[0];
                        var label = entry[1] || entry[0];
                        return /*#__PURE__*/ React.createElement(
                          _Select.Option,
                          {
                            key: value,
                            value: value,
                          },
                          label,
                        );
                      }),
                  ),
                ),
              ),
        props.toolbar === false
          ? null
          : props.toolbar ||
              /*#__PURE__*/ React.createElement(
                _Space,
                {
                  size: 18,
                },
                /*#__PURE__*/ React.createElement(
                  _Tooltip,
                  {
                    placement: 'top',
                    title: '刷新',
                  },
                  /*#__PURE__*/ React.createElement(
                    'span',
                    {
                      className: 'shj-toolbar-item',
                      onClick: _onReload,
                    },
                    /*#__PURE__*/ React.createElement(IconReload, null),
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  _Dropdown,
                  {
                    trigger: ['click'],
                    overlay: /*#__PURE__*/ React.createElement(
                      _Menu,
                      {
                        style: {
                          width: 80,
                        },
                        onClick: _onGutterChange,
                      },
                      /*#__PURE__*/ React.createElement(
                        _Menu.Item,
                        {
                          key: 'table-default',
                        },
                        '\u9ED8\u8BA4',
                      ),
                      /*#__PURE__*/ React.createElement(
                        _Menu.Item,
                        {
                          key: 'table-middle',
                        },
                        '\u4E2D\u7B49',
                      ),
                      /*#__PURE__*/ React.createElement(
                        _Menu.Item,
                        {
                          key: 'table-small',
                        },
                        '\u7D27\u51D1',
                      ),
                    ),
                  },
                  /*#__PURE__*/ React.createElement(
                    _Tooltip,
                    {
                      placement: 'top',
                      title: '间距',
                    },
                    /*#__PURE__*/ React.createElement(
                      'span',
                      {
                        className: 'shj-toolbar-item',
                      },
                      /*#__PURE__*/ React.createElement(IconGutter, null),
                    ),
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  _Tooltip,
                  {
                    placement: 'top',
                    title: '设置',
                  },
                  /*#__PURE__*/ React.createElement(
                    'span',
                    {
                      className: 'shj-toolbar-item',
                      onClick: _onSetting,
                    },
                    /*#__PURE__*/ React.createElement(IconSetting, null),
                  ),
                ),
              ),
      ),
      /*#__PURE__*/ React.createElement(
        DragTable,
        _objectSpread(
          _objectSpread({}, others),
          {},
          {
            className: tableSizeCls,
            ref: tableRef,
            data: data,
            total: total,
            loading: loading,
          },
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'shj-drag-table-footer '.concat(
            loading ? 'footer-mask-show' : '',
          ),
        },
        /*#__PURE__*/ React.createElement(_Space, null, footer && footer()),
      ),
      props.pagination === false
        ? null
        : /*#__PURE__*/ React.createElement(_Pagination, {
            className: 'shj-drag-table-pagination',
            total: total,
            current: pageParams.current,
            pageSize: pageParams.pageSize,
            onChange: _onPageChange,
            size: 'small',
            showTotal: function showTotal(total) {
              return '\u5171'.concat(total, '\u6761\u6570\u636E');
            },
            showSizeChanger: true,
            showQuickJumper: true,
            disabled: loading,
          }),
    ),
  );
});
CommonDragTable.defaultProps = {};
export default CommonDragTable;

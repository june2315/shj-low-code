import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import DragTable from 'shj-drag-table';
import {
  ConfigProvider,
  Pagination,
  Space,
  Row,
  Col,
  Form,
  Select,
  Menu,
  Dropdown,
  Tooltip,
} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { IconReload, IconGutter, IconSetting } from './Icon';

import './index.less';

const CommonDragTable = forwardRef((props: any, ref: any) => {
  const { request, footer, params, filterConfig, ...others } = props;

  const tableRef = useRef<any>();
  const [form] = Form.useForm();
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState<any>({});

  const [pageParams, setPageParams] = useState<any>({
    current: 1,
    pageSize: 10,
  });
  const [loading, setLoading] = useState(false);

  const [tableSizeCls, setTableSizeCls] = useState('');

  useImperativeHandle(ref, () => ({
    reload: () => _onReload(),
    updateDataOfId: (record: any) => {
      let nextData = data.map((d, i) => {
        if (d.id === record.id) return record;
        return d;
      });
      setData(nextData);
    },
    reset: (data = {}) => {
      setPageParams({ ...pageParams, current: 1 });
      setFilter(data);
    },
    resetPagination: () => {
      _resetPagination();
    },
  }));

  useEffect(() => {
    _request();
    return () => {};
  }, [filter, pageParams]);

  useEffect(() => {
    _resetPagination();
    return () => {};
  }, [params]);

  const _resetPagination = () => {
    setPageParams({ ...pageParams, current: 1 });
  };

  const _request = () => {
    // console.log('request')
    if (loading) return;
    setLoading(true);
    let result =
      request && request({ ...pageParams, ...filter, query: params });
    if (Object.prototype.toString.call(result) === '[object Promise]') {
      result
        .then((resp: any) => {
          if (resp.success && resp.data) {
            const { data, total } = resp.data;
            setTotal(total);
            setData(data);
          }
          setLoading(false);
          return resp;
        })
        .catch((error: any) => {
          setLoading(false);
          console.log(error);
        });
    } else {
      setLoading(false);
    }
    return result;
  };

  const _onFilterChange = (changedValues: any, allValues: any) => {
    if (Object.values(allValues).filter((d) => !!d).length) {
      allValues.asc = allValues.asc === '1';
    }
    let newFilter = { orders: [allValues] };
    setFilter(newFilter);
    setPageParams({ ...pageParams, current: 1 });
  };

  const _onReload = () => {
    _request();
  };

  const _onSetting = () => {
    tableRef.current.openSetting();
  };

  const _onPageChange = useCallback((page, pageSize) => {
    setPageParams({ current: page, pageSize });
    props.onChange && props.onChange(page, pageSize);
  }, []);

  const _onGutterChange = useCallback((value) => {
    const { key } = value;
    setTableSizeCls(key !== 'table-default' ? key : '');
  }, []);

  const mergeConfig = (target: any, defaultValues: any) => {
    // console.log(target, defaultValues)
    if (!target) return defaultValues;
    if (Object.prototype.toString.call(target) !== '[object Object]')
      return target;
    let result = { ...defaultValues };
    if (target) {
      for (let key in target) {
        let item = target[key];
        if (
          Object.prototype.toString.call(item) !==
          Object.prototype.toString.call(defaultValues[key])
        ) {
          switch (Object.prototype.toString.call(defaultValues[key])) {
            case '[object Array]':
              result[key] = defaultValues[key];
              for (let i in item) {
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
              for (let i = 0; i < item.length; i++) {
                item[i] = mergeConfig(item[i], defaultValues[key][i]);
                result[key][i] = item[i] || defaultValues[key][i];
              }
              break;
          }
          result[key] = item || defaultValues[key];
        }
      }
    }
    // console.log(result)
    return result;
  };

  const _filterConfig = mergeConfig(filterConfig, {
    column: {
      placeholder: '默认排序',
      options: ['last_updated_time:更新时间', 'created_time:创建时间'],
    },
    asc: {
      placeholder: '排序方式',
      options: ['1:升序', '0:降序'],
    },
  });

  return (
    <ConfigProvider locale={zhCN}>
      <div className="shj-common-drag-table">
        <Row className="shj-drag-table-toolbar" justify="end" align="middle">
          {props.filter === false
            ? null
            : props.filter || (
                <Form
                  className="shj-table-toolbar-form"
                  form={form}
                  onValuesChange={_onFilterChange}
                >
                  <Form.Item name="column" noStyle>
                    <Select
                      bordered={false}
                      placeholder={
                        _filterConfig.column && _filterConfig.column.placeholder
                      }
                      allowClear
                      disabled={loading}
                    >
                      {_filterConfig.column &&
                        _filterConfig.column.options &&
                        _filterConfig.column.options.map((d: any) => {
                          let entry = d.split(':');
                          let value = entry[0];
                          let label = entry[1] || entry[0];
                          return (
                            <Select.Option key={value} value={value}>
                              {label}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  </Form.Item>

                  <Form.Item name="asc" noStyle>
                    <Select
                      bordered={false}
                      placeholder={
                        _filterConfig.asc && _filterConfig.asc.placeholder
                      }
                      allowClear
                      disabled={loading}
                    >
                      {_filterConfig.asc &&
                        _filterConfig.asc.options &&
                        _filterConfig.asc.options.map((d: any) => {
                          let entry = d.split(':');
                          let value = entry[0];
                          let label = entry[1] || entry[0];
                          return (
                            <Select.Option key={value} value={value}>
                              {label}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  </Form.Item>
                </Form>
              )}

          {props.toolbar === false
            ? null
            : props.toolbar || (
                <Space size={18}>
                  <Tooltip placement="top" title={'刷新'}>
                    <span className="shj-toolbar-item" onClick={_onReload}>
                      <IconReload />
                    </span>
                  </Tooltip>

                  <Dropdown
                    trigger={['click']}
                    overlay={
                      <Menu style={{ width: 80 }} onClick={_onGutterChange}>
                        <Menu.Item key="table-default">默认</Menu.Item>
                        <Menu.Item key="table-middle">中等</Menu.Item>
                        <Menu.Item key="table-small">紧凑</Menu.Item>
                      </Menu>
                    }
                  >
                    <Tooltip placement="top" title={'间距'}>
                      <span className="shj-toolbar-item">
                        <IconGutter />
                      </span>
                    </Tooltip>
                  </Dropdown>
                  <Tooltip placement="top" title={'设置'}>
                    <span className="shj-toolbar-item" onClick={_onSetting}>
                      <IconSetting />
                    </span>
                  </Tooltip>
                </Space>
              )}
        </Row>
        <DragTable
          {...others}
          className={tableSizeCls}
          ref={tableRef}
          data={data}
          total={total}
          loading={loading}
        />
        <div
          className={`shj-drag-table-footer ${
            loading ? 'footer-mask-show' : ''
          }`}
        >
          <Space>{footer && footer()}</Space>
        </div>
        {props.pagination === false ? null : (
          <Pagination
            className="shj-drag-table-pagination"
            total={total}
            current={pageParams.current}
            pageSize={pageParams.pageSize}
            onChange={_onPageChange}
            size="small"
            showTotal={(total) => `共${total}条数据`}
            showSizeChanger
            showQuickJumper
            disabled={loading}
          />
        )}
      </div>
    </ConfigProvider>
  );
});

CommonDragTable.propTypes = {};

CommonDragTable.defaultProps = {};

export default CommonDragTable;

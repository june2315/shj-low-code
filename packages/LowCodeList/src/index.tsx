import React, {
  forwardRef,
  useState,
  useCallback,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import { Tabs, Button, Row, Skeleton, Table, message } from 'antd';
import FilterTable from 'shj-filter-table';
import ListAdapter from './modules/ListAdapter';
const { TabPane } = Tabs;
/**
 * @param {Object} props { config, requests, events, status, customRender }
 */
function SHJLowCodeList(props: any, ref: any) {
  const {
    request,
    cacheDisabled,
    filter,
    toolbar,
    sticky,
    rowSelection,
    name,
    paramsFormatter,
    ...rest
  } = props.config;

  const [tabKey, setTabKey] = useState('1');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [params, setParams] = useState({});
  const [restData, setRestData] = useState({});

  const { auth = {} } = props;
  const { onTabChange } = props.events || {};
  const { fetchList, ...restRequests } = props.request || {};
  const listAdapter = new ListAdapter({ ...props });
  const { tabs, columns, search, footer } = listAdapter.getConfig({ restData });

  const tableRef = useRef<any>();

  const reload = () => {
    setSelectedRowKeys([]);
    setSelectedRows([]);
    tableRef.current.reload();
  };

  useImperativeHandle(ref, () => ({ reload }), []);

  useEffect(() => {
    fetchRest(restRequests);
    return () => {};
  }, []);

  const fetchData = useCallback((...args) => {
    let fetch = fetchList || props.config.request; // 兼容1.0旧版本代码
    return new Promise(async (resolve, reject) => {
      try {
        if (typeof fetch === 'function') {
          fetch(...args).then(({ records, total }: any) => {
            console.log(records);
            resolve({ data: { data: records, total: total }, success: true });
          });
        }
      } catch (e) {
        console.log(e);
        reject({ success: false });
      }
    });
  }, []);

  const fetchRest = (restRequests: any) => {
    let restReq = [];
    if (restRequests) {
      for (let key in restRequests) {
        if (typeof restRequests[key] === 'function')
          restReq.push(restRequests[key]());
      }
    }
    return Promise.all(restReq).then((res) => {
      let restData = {};
      for (let item of res) {
        restData = { ...restData, ...item };
      }
      setRestData(restData);
    });
  };

  const onSearchFinish = useCallback((value) => {
    if (
      Object.prototype.toString.call(paramsFormatter) === '[object Function]'
    ) {
      setParams(paramsFormatter(value));
    } else {
      setParams(value);
    }
  }, []);

  const onSearchReset = useCallback(() => {
    setParams({});
  }, []);

  const onFooterAction = (func: any, ev: any) => {
    func &&
      func({ selectedRowKeys, selectedRows, methods: { reload }, event: ev });
  };

  const renderFooter = () => {
    return (
      <>
        {footer
          .map((d: any, i: number) => {
            const { onClick, label, isDisabled, ...rest } = d;
            let disabled =
              isDisabled && isDisabled({ selectedRowKeys, selectedRows });
            let component = (
              <Button
                {...rest}
                key={`footer_btn_${d.key || i}`}
                onClick={(ev) => onFooterAction(onClick, ev)}
                disabled={disabled}
              >
                {label}
              </Button>
            );
            if (d.auth) return auth[d.auth] ? component : null;
            return component;
          })
          .filter((d: any) => !!d)}
      </>
    );
  };

  const wrapperSearch = (searchConfig: any) => {
    return searchConfig.map((d: any) => {
      if (!d.addonOpts) d.addonOpts = [];
      return d;
    });
  };

  return (
    <Skeleton loading={props.loading}>
      <div style={{ overflow: 'hidden' }}>
        {tabs && tabs.length ? (
          <Tabs
            className="common-tab"
            defaultActiveKey={tabKey}
            onChange={onTabChange}
          >
            {tabs.map((d: any, i: number) => (
              <TabPane tab={d.tab} key={d.key}></TabPane>
            ))}
          </Tabs>
        ) : null}
        <FilterTable
          {...rest}
          cacheKey={name}
          sticky={sticky}
          ref={tableRef}
          search={wrapperSearch(search)}
          onSearchFinish={onSearchFinish}
          onSearchReset={onSearchReset}
          columns={columns}
          params={params}
          request={fetchData}
          footer={renderFooter}
          cacheDisabled={cacheDisabled}
          filter={filter}
          toolbar={toolbar}
          rowSelection={
            rowSelection === false
              ? null
              : {
                  selectedRowKeys,
                  onChange: (selectedRowKeys: any, selectedRows: any) => {
                    setSelectedRowKeys(selectedRowKeys);
                    setSelectedRows(selectedRows);
                  },
                }
          }
        />
      </div>
    </Skeleton>
  );
}

export default forwardRef(SHJLowCodeList);

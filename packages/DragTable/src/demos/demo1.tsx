/**
 * title: 基础用法
 * desc: 字段可排序、可隐藏等。
 */

import React, { useEffect, useState, useRef } from 'react';
import DragTable from 'shj-drag-table';

export default () => {
  const [columns, setColumns] = useState([
    {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      width: 160,
      fixed: 'left',
      render: (text, record) => (
        <a className="link" onClick={() => console.log(record)}>
          {text}
        </a>
      ),
    },
    {
      title: '年龄',
      key: 'age',
      dataIndex: 'age',
      width: 200,
      hidden: true,
    },
    {
      title: '客户名称',
      dataIndex: 'customerName',
      width: 130,
      // search: false,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
      width: 130,
      search: false,
    },
    {
      title: '楼盘名称',
      dataIndex: 'buildingName',
      key: 'buildingName',
      width: 160,
      search: false,
    },
    {
      title: '公司',
      key: 'companyName',
      dataIndex: 'companyName',
      width: 100,
      fixed: 'left',
    },
    {
      title: '房号',
      key: 'roomNo',
      dataIndex: 'roomNo',
      width: 100,
      // fixed: 'left'
    },
    {
      title: '来源',
      dataIndex: 'source',
      key: 'source',
      width: 180,
    },
    {
      title: '户型',
      dataIndex: 'roomType',
      key: 'roomType',
      width: 80,
      // search: false,
    },
    {
      title: '风格',
      dataIndex: 'styleName',
      key: 'styleName',
      width: 80,
      // search: false,
    },
    {
      title: '建筑面积',
      dataIndex: 'buildingArea',
      key: 'buildingArea',
      width: 80,
      // search: false,
    },
    {
      title: '套内面积（㎡）',
      dataIndex: 'innerArea',
      key: 'innerArea',
      width: 120,
      // search: false,
    },
    {
      title: '品牌',
      key: 'brandName',
      dataIndex: 'brandName',
      width: 300,
    },
    {
      title: '房屋属性',
      key: 'roomAttrName',
      dataIndex: 'roomAttrName',
      width: 200,
      // fixed: 'right'
    },
    {
      title: '房屋类型',
      key: 'roomCateName',
      dataIndex: 'roomCateName',
      width: 300,
    },
    {
      title: '交房日期',
      dataIndex: 'deliverDate',
      key: 'deliverDate',
      width: 80,
      // search: false,
    },
    {
      title: '状态',
      dataIndex: 'decorStatusName',
      key: 'decorStatusName',
      width: 80,
      // search: false,
    },
    {
      title: '跟进人',
      dataIndex: 'currentWorkerName',
      key: 'currentWorkerName',
      width: 80,
      // search: false,
    },
    {
      title: '更新时间',
      dataIndex: 'lastUpdatedTime',
      width: 220,
      search: false,
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
      width: 220,
    },
    {
      title: '创建时间2',
      dataIndex: 'createdTime',
      key: 'createdTime',
      width: 220,
    },
    {
      title: '更新人',
      dataIndex: 'modifiedByName',
      key: 'modifiedByName',
      width: 220,
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      width: 100,
      fixed: 'right',
    },
  ]);
  const [columnsState, setColumnsState] = useState({
    buildingName: { show: false },
    companyName: { show: false },
    roomNo: { show: false },
    source: { show: false },
    roomType: { show: false },
    styleName: { show: false },
    buildingArea: { show: false },
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);

  const tableRef = useRef<any>();

  useEffect(() => {
    let data = [];
    let total = 10;
    for (let i = 0; i < total; i++) {
      data.push({
        id: i + 1,
        name: 'Jasmine_' + i,
        age: 18,
        companyName: '产品_' + i,
        roomNo: 'roomNo_' + i,
        brandName: 'brandName_' + i,
        roomAttrName: 'roomAttrName_' + i,
        roomCateName: 'roomCateName_' + i,
        styleName: 'styleName_' + i,
        source: 'source_' + i,
        roomType: 'roomType_' + i,
        buildingArea: 'buildingArea_' + i,
        innerArea: 'innerArea_' + i,
        deliverDate: 'deliverDate_' + i,
        decorStatusName: 'decorStatusName_' + i,
        currentWorkerName: 'currentWorkerName_' + i,
        lastUpdatedTime: 'lastUpdatedTime_' + i,
        createdTime: 'createdTime_' + i,
        modifiedByName: 'modifiedByName_' + i,
        customerName: 'customerName_' + i,
        phone: 'phone_' + i,
        buildingName: 'buildingName_' + i,
        desc: '这是展开的描述啊_' + i,
      });
    }
    setTimeout(() => {
      setData(data);
      setLoading(false);
      setTotal(total);
    }, 1000);
  }, []);

  const onSetting = () => {
    tableRef.current.openSetting();
  };

  const onReload = () => {
    setSelectedRows([]);
  };

  return (
    <div>
      <button onClick={onSetting.bind(this)}>设置</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={onReload.bind(this)}>重载</button>
      <DragTable
        // cacheDisabled
        ref={tableRef}
        columns={columns}
        columnsState={columnsState}
        data={data}
        total={total}
        loading={loading}
        // cacheKey="test1"
        sticky
        rowSelection={{
          selectedRowKeys: selectedRows,
          onChange: (selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
        // rowSelection={null}
      />
    </div>
  );
};

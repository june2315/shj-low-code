import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FilterTable from 'shj-filter-table';

export default (props: any) => {
  const [columns, setColumns] = useState([
    {
      title: '线索编号',
      dataIndex: 'code',
      width: 100,
      render: (text, record) => <a className="link">{text}</a>,
    },
    {
      title: '客户名称',
      dataIndex: 'customerName',
      width: 100,
    },
    {
      title: '来源',
      dataIndex: 'sourceName',
      width: 180,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      width: 120,
    },
    {
      title: '楼盘名称',
      dataIndex: 'buildingName',
      width: 120,
    },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [params, setParams] = useState({});

  const fetchData = (params, sort, filter) => {
    const { current, pageSize, ...rest } = params;
    console.log(params);
    return new Promise((resolve) => {
      let records = [];
      let total = 50;
      for (let i = 0; i < 10; i++) {
        records.push({
          key: 'clue_' + i,
          id: 'clue_' + i,
          code: 'ZX' + (2020123100001 + i),
          phone: 18295829189 + i,
          customerName: '20200925-' + i + '号',
          sourceName: '集团总部>集团总裁办>房屋00' + i,
          buildingName: '百悦城' + (1 + i) + '期',
        });
      }
      setTimeout(() => resolve({ total, records }), 2000);
    })
      .then((resp: any) => {
        const { total, records } = resp;
        return { data: { data: records, total: total }, success: true };
      })
      .catch((error) => {
        return { success: false };
      });
  };

  const onSearchFinish = (params) => {
    setParams(params);
  };

  const onSearchReset = () => {
    console.log('search reset');
    setParams({});
  };

  const searchConfig = [
    {
      name: 'dataRange',
      label: '筛选范围',
      itemType: 'select',
      data: { ALL: '全部', MINE: '我的', SUB: '下级' },
    },
    {
      name: 'customerName',
      label: '客户名称',
      addonOpts: ['=', '∈'],
    },
    {
      name: 'phone',
      label: '联系电话',
      addonOpts: ['=', '∈'],
    },
    {
      name: 'createDate',
      label: '创建日期',
      colSize: 2,
      itemType: 'autoDate',
    },
  ];

  return (
    <div>
      <FilterTable
        drag
        sticky
        filterConfig={{
          column: {
            options: {
              0: 'update_date:更新时间1',
              1: 'create_date:创建时间2',
            },
          },
        }}
        search={searchConfig}
        onSearchFinish={onSearchFinish}
        onSearchReset={onSearchReset}
        params={params}
        request={fetchData}
        columns={columns}
        rowSelection={{
          onChange: (selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
    </div>
  );
};

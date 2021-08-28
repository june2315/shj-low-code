import React, { Component, useState, useRef } from 'react';
import CommonDragTable from 'shj-common-drag-table';

import { Button } from 'antd';

export default () => {
  const tableRef = useRef<any>();
  const [params, setParams] = useState<any>({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([
    {
      title: '商机编号',
      dataIndex: 'id',
      width: 160,
      fixed: 'left',
    },
    {
      title: '客户名称',
      dataIndex: 'customerName',
      width: 200,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      width: 130,
    },
    {
      title: '联系电话2',
      dataIndex: 'phone',
      width: 130,
    },
    {
      title: '联系电话3',
      dataIndex: 'phone',
      width: 300,
    },
  ]);

  const fetchData = (params) => {
    console.log('request', params);
    return new Promise((resolve, reject) => {
      const { current, pageSize } = params;
      let records = [];
      let total = 500;
      for (let i = 0; i < pageSize; i++) {
        records.push({
          id: 'ZX' + ('2020123100001-' + current + '-' + i),
          phone: 18295829189 + i,
          customerName: '20210224-' + current + '-' + i,
        });
      }
      setTimeout(() => {
        resolve({
          data: { data: records, total: total },
          success: true,
        });
      }, 100);
    });
  };

  return (
    <div>
      <CommonDragTable
        cacheKey="common_drag_table"
        filterConfig={{
          column: {
            placeholder: 'placeholder',
            options: ['foo', 'hello'],
          },
        }}
        params={params}
        columns={columns}
        request={fetchData}
        ref={tableRef}
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedRows) => {
            setSelectedRowKeys(selectedRows);
          },
        }}
        sticky
        footer={() => {
          return (
            <>
              <Button type="primary">新增</Button>
              <Button>下载模板</Button>
            </>
          );
        }}
      />
    </div>
  );
};

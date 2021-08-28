import React, { Component } from 'react';
import SearchForm, {
  FormText,
  FormSelect,
  FormAutoDatePicker,
  FormCascader,
  FormDatePicker,
  FormDateTimePicker,
  FormDateTimeRangePicker,
} from 'shj-search-expanded-bar';

import { Button } from 'antd';

export default () => {
  const onSearchFinish = (value) => {
    alert('onSearchFinish:' + JSON.stringify(value));
  };

  // 重置
  const onSearchReset = () => {
    alert('onSearchReset');
  };

  return (
    <div>
      <SearchForm
        onFinish={onSearchFinish}
        onReset={onSearchReset}
        // actionBtnPosition={'top'}

        // defaultColsNumber={4}
        // actionBtnBlock
        // addonBefore={<>
        //   <Button style={{ margin: '0 0 0 8px' }}>新增</Button>
        //   <Button style={{ margin: '0 8px 0 8px' }}>删除</Button>
        // </>}
        // addonAfter={
        //   <>
        //     <Button style={{ margin: '0 0 0 8px' }}>启用</Button>
        //     <Button style={{ margin: '0 8px 0 8px' }}>禁用</Button>
        //   </>
        // }
      >
        <FormSelect
          name="scope"
          label="筛选范围"
          showSearch
          valueEnum={{ ALL: '全部', MINE: '我的', SUB: '下级' }}
          addonProps={{
            name: 'scope_prefix',
            options: ['='],
          }}
        />

        <FormText
          name="name"
          label="名称"
          addonProps={{
            name: 'name_prefix',
            options: ['=', 'LIKE'],
          }}
          rules={[{ max: 10, message: '名称过长！' }]}
        />

        <FormText
          name="phone"
          label="联系电话"
          addonProps={{
            name: 'phone_prefix',
            options: ['=', 'LIKE'],
          }}
        />

        <FormAutoDatePicker
          name="time"
          label="创建日期"
          // colSize={2}
          addonProps={{
            name: 'time_prefix',
            options: ['=', '>=', '>', '<', '<='],
          }}
        />

        <FormText
          name="channel"
          label="渠道"
          addonProps={{
            name: 'channel_prefix',
            options: ['=', 'LIKE'],
          }}
        />

        <FormText
          name="follow"
          label="跟进人"
          addonProps={{
            name: 'follow_prefix',
            options: ['=', 'LIKE'],
          }}
        />

        <FormText
          name="building_name"
          label="楼盘名称"
          addonProps={{
            name: 'building_name_prefix',
            options: ['=', 'LIKE'],
          }}
        />
      </SearchForm>
    </div>
  );
};

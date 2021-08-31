import React, { useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import SHJLowCodeList from 'shj-low-code-list';
import config from './config.json';

import { message, Switch } from 'antd';

export default function () {
  const listRef = useRef<any>();

  const [auth] = useState({
    'btn.icrm.member.user.ration': true,
  });

  const fetchList = (values) => {
    return new Promise(async (resolve, reject) => {
      try {
        // return resolve({ records: [] })
        const { current, pageSize, ...rest } = values;

        const records = [
          {
            id: 1,
            levelName: 'test1',
            weight: '111',
            growthStartVal: '1111',
            rights: '11111',
            status: false,
            lastUpdatedTime: '2021-8-31',
          },
          {
            id: 2,
            levelName: 'test2',
            weight: '222',
            growthStartVal: '2222',
            rights: '22222',
            status: true,
            lastUpdatedTime: '2021-8-31',
          },
        ];
        const total = 100;

        setTimeout(() => resolve({ records, total }), 1000);
      } catch (e) {
        console.log(e);
        reject({ success: false });
      }
    });
  };

  const getStatusOptions = () => {
    return new Promise((resolve, reject) => {
      resolve({
        statusOptions: {
          true: '启用',
          false: '停用',
        },
      });
    });
  };

  const onSave = useCallback((values, dialogDestroy) => {}, []);

  const onAdd = useCallback(() => {
    // if (!selectedRowKeys.length) return message.warning('请选择用户')
    message.success('新增');
  }, [onSave]);

  const onEdit = useCallback((record) => {}, [onSave]);

  const onDisable = useCallback(({ record, rows, selectedRows } = {}) => {
    message.error('禁用');
  }, []);

  const onEnable = useCallback(({ record, rows, selectedRows } = {}) => {
    message.warning('启用');
  }, []);

  const onEnableChange = (checked, record) => {
    if (checked) {
      onEnable({ record });
    } else {
      onDisable({ record });
    }
  };

  const extension = {
    request: { fetchList, getStatusOptions },
    events: { onAdd, onEnable, onDisable },
    auth,
    status: {
      btnDisabled: ({ selectedRowKeys }) => selectedRowKeys.length <= 0,
    },
    customRender: {
      idCell(text, record) {
        return (
          <a className="link" onClick={() => onEdit(record)}>
            {text}
          </a>
        );
      },
      statusCell(text, record) {
        return (
          <Switch
            checkedChildren="启用"
            unCheckedChildren="停用"
            checked={text}
            onChange={(checked) => onEnableChange(checked, record)}
          />
        );
      },
    },
  };

  return <SHJLowCodeList config={config} ref={listRef} {...extension} />;
}

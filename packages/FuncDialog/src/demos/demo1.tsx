/**
 * title: 基础用法
 * desc: 点击调用弹出框。
 */

import React from 'react';
import funcDialog from 'shj-func-dialog';
import { Button } from 'antd';

export default () => {
  const showModal = () => {
    const dialog = funcDialog({
      title: '提示框',
      maskClosable: true,
      content: (
        <div>
          <p>Common Dialog</p>
          <Button onClick={() => dialog.destroy()}>关闭</Button>
        </div>
      ),
    });
  };

  return (
    <div>
      <Button type="primary" onClick={showModal.bind(this)}>
        提示框
      </Button>
    </div>
  );
};

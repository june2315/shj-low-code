import React, { useState, useEffect, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';

export const destroyFns: any[] = [];

export interface IDialog {
  /**
   * 关闭弹框
   */
  destroy: () => void;
  /**
   * 更新弹框
   */
  update: (configUpdate: any) => void;
}

const CommonDialog = (config: any = {}): IDialog => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  let currentConfig = { maskClosable: false, ...config, close, visible: true };

  function destroy(...args: any[]) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function onCancel(props: any) {
    let res = null;
    if (
      Object.prototype.toString.call(config.beforeClose) === '[object Function]'
    )
      res = config.beforeClose();
    if (Object.prototype.toString.call(res) === '[object Promise]') {
      res.then(() => props.close({ triggerCancel: true }));
    } else {
      props.close({ triggerCancel: true });
    }
  }

  function render({ okText, cancelText, prefixCls, ...props }: any) {
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     * Sync render blocks React event. Let's make this async.
     */
    setTimeout(() => {
      ReactDOM.render(
        <Modal footer={null} onCancel={() => onCancel(props)} {...props}>
          {props.content}
        </Modal>,
        div,
      );
    });
  }

  function close(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: () => destroy(...args),
    };
    render(currentConfig);
  }

  function update(configUpdate: any) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate,
      };
    }
    render(currentConfig);
  }

  render(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close,
    update,
  };
};

export default CommonDialog;

import React, { useState } from 'react';
import RcResizeObserver from 'rc-resize-observer';

import {
  Form,
  Row,
  Col,
  Button,
  Input,
  Select,
  Cascader,
  TreeSelect,
  DatePicker,
} from 'antd';

import SearchPrefix from './SearchPrefix';
export { CompanySelect } from './CompanySelect';
export { DeptSelect } from './DepartmentSelect';

import './index.less';

const { RangePicker } = DatePicker;

export function renderAddonFormItem(
  text: any,
  options: any,
  dom: any,
  addonProps: any,
) {
  return (
    <div
      className={`form-item-wrap ${
        addonProps && addonProps?.options?.length ? 'addon-wrap' : ''
      }`}
    >
      {addonProps && addonProps?.options?.length ? (
        <SearchPrefix className={'addon-select'} {...addonProps} />
      ) : null}
      {dom}
    </div>
  );
}

export function FormText(props: any) {
  const { addonProps, hidden, label, name, ...rest } = props;
  return (
    <Form.Item label={label} hidden={hidden}>
      <div
        className={`form-item-wrap ${hidden ? 'form-item-wrap-hidden' : ''}`}
      >
        {addonProps && addonProps?.options?.length ? (
          <SearchPrefix className={'addon-select'} {...addonProps} />
        ) : null}
        <Form.Item name={name} style={{ flex: 1 }} noStyle>
          <Input placeholder="请输入" {...rest} />
        </Form.Item>
      </div>
    </Form.Item>
  );
}

export function FormSelect(props: any) {
  const { addonProps, hidden, label, name, valueEnum = {}, ...rest } = props;
  const _options =
    props.options ||
    Object.entries(valueEnum).map((d) => ({ label: d[1], value: d[0] }));
  return (
    <Form.Item label={label} hidden={hidden}>
      <div
        className={`form-item-wrap ${hidden ? 'form-item-wrap-hidden' : ''}`}
      >
        {addonProps && addonProps?.options?.length ? (
          <SearchPrefix className={'addon-select'} {...addonProps} />
        ) : null}
        <Form.Item name={name} style={{ flex: 1 }} noStyle>
          <Select placeholder="请选择" {...rest} options={_options} />
        </Form.Item>
      </div>
    </Form.Item>
  );
}

export function FormTreeSelect(props: any) {
  const { addonProps, hidden, label, name, ...rest } = props;
  return (
    <Form.Item label={label} hidden={hidden}>
      <div
        className={`form-item-wrap ${hidden ? 'form-item-wrap-hidden' : ''}`}
      >
        {addonProps && addonProps?.options?.length ? (
          <SearchPrefix className={'addon-select'} {...addonProps} />
        ) : null}
        <Form.Item name={name} style={{ flex: 1 }} noStyle>
          <TreeSelect placeholder="请选择" {...rest} />
        </Form.Item>
      </div>
    </Form.Item>
  );
}

export function FormCascader(props: any) {
  const { addonProps, hidden, label, name, rules, normalize, ...rest } = props;
  // console.log(rules)
  return (
    <Form.Item label={label} hidden={hidden} rules={rules}>
      <div
        className={`form-item-wrap ${hidden ? 'form-item-wrap-hidden' : ''}`}
      >
        {addonProps && addonProps?.options?.length ? (
          <SearchPrefix className={'addon-select'} {...addonProps} />
        ) : null}
        <Form.Item
          name={name}
          label={label}
          normalize={normalize}
          style={{ flex: 1 }}
          noStyle
        >
          <Cascader
            {...rest}
            showSearch={(inputValue: any, path: any) => {
              return path.some(
                (option: any) =>
                  option.label.toLowerCase().indexOf(inputValue.toLowerCase()) >
                  -1,
              );
            }}
          />
        </Form.Item>
      </div>
    </Form.Item>
  );
}

export function FormDatePicker(props: any) {
  const { addonProps, hidden, label, name, ...rest } = props;
  return (
    <Form.Item label={label} hidden={hidden}>
      <div
        className={`form-item-wrap ${hidden ? 'form-item-wrap-hidden' : ''}`}
      >
        {addonProps && addonProps?.options?.length ? (
          <SearchPrefix className={'addon-select'} {...addonProps} />
        ) : null}
        <Form.Item name={name} style={{ flex: 1 }} noStyle>
          <DatePicker placeholder="请选择" {...rest} />
        </Form.Item>
      </div>
    </Form.Item>
  );
}

export function FormDateTimeRangePicker(props: any) {
  const { addonProps, hidden, label, name, ...rest } = props;

  const defaultOpts = ['=', '>=', '>', '<=', '<'];
  return (
    <Form.Item label={label} hidden={hidden}>
      <div
        className={`form-item-wrap ${hidden ? 'form-item-wrap-hidden' : ''}`}
      >
        {addonProps && addonProps?.options?.length ? (
          <SearchPrefix
            className={'addon-select'}
            options={defaultOpts}
            {...addonProps}
          />
        ) : null}
        <Form.Item name={name} style={{ flex: 1 }} noStyle>
          <RangePicker showTime placeholder="起止" {...rest} />
        </Form.Item>
      </div>
    </Form.Item>
  );
}

interface IFormAutoDatePicker {
  name?: string;
  addonProps?: any;
  hidden?: boolean;
  label?: string;
}

interface IFormAutoDatePickerState {
  type: any;
}

export class FormAutoDatePicker extends React.Component<
  IFormAutoDatePicker,
  IFormAutoDatePickerState
> {
  constructor(props: IFormAutoDatePicker) {
    super(props);
    this.state = {
      type: 'range',
    };
  }

  _onChange = (value: any) => {
    const { form }: any = this.props;
    form.resetFields([this.props.name]);
    // console.log(this.props)
    this.setState({
      type: />=|>|<=|</.test(value) ? 'default' : 'range',
    });
  };

  render() {
    const { addonProps, hidden, label, name, ...rest } = this.props;
    const defaultOpts = ['=', '>=', '>', '<=', '<'];
    const defaultOptsTips = {
      '>=': '大于等于',
      '>': '大于',
      '<=': '小于等于',
      '<': '小于',
    };

    let component =
      this.state.type === 'default' ? (
        <DatePicker placeholder="请选择" {...rest} />
      ) : (
        <RangePicker placeholder={['起', '止']} {...rest} />
      );

    return (
      <Form.Item label={label} hidden={hidden}>
        <div
          className={`form-item-wrap ${hidden ? 'form-item-wrap-hidden' : ''}`}
        >
          {addonProps && addonProps?.options?.length ? (
            <SearchPrefix
              className={'addon-select'}
              options={defaultOpts}
              optionsTips={defaultOptsTips}
              onChange={this._onChange}
              {...addonProps}
            />
          ) : null}
          <Form.Item name={name} style={{ flex: 1 }} noStyle>
            {component}
          </Form.Item>
        </div>
      </Form.Item>
    );
  }
}

const CONFIG_SPAN_BREAKPOINTS: any = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 1057,
  xl: 1057,
  xxl: Infinity,
};

/**
 * 配置表单列变化的容器宽度断点
 */
const BREAKPOINTS: any = {
  vertical: [
    // [breakpoint, cols, layout]
    [513, 1, 'vertical'],
    [785, 2, 'vertical'],
    [1057, 3, 'vertical'],
    [Infinity, 4, 'vertical'],
  ],
  default: [
    [513, 1, 'vertical'],
    [701, 2, 'vertical'],
    [1062, 3, 'horizontal'],
    [1352, 3, 'horizontal'],
    [Infinity, 4, 'horizontal'],
  ],
};

const getSpanConfig = (layout: any, width: number, span?: any) => {
  if (span && typeof span === 'number') {
    return {
      span,
      layout,
    };
  }
  const spanConfig = span
    ? Object.keys(span).map((key) => [
        CONFIG_SPAN_BREAKPOINTS[key],
        24 / span[key],
        'horizontal',
      ])
    : BREAKPOINTS[layout || 'default'];

  const breakPoint = (spanConfig || BREAKPOINTS.default).find(
    (item: any) => width < item[0] + 16, // 16 = 2 * (ant-row -8px margin)
  );

  return {
    span: 24 / breakPoint[1],
    layout: breakPoint[2],
  };
};

export default function SearchForm(props: any) {
  const {
    defaultColsNumber,
    addonBefore,
    addonAfter,
    actionBtnPosition = 'bottom',
    actionBtnBlock = false,
    colSize = 1,
  } = props;
  const [expand, setExpand] = useState(false);

  const [spanSize, setSpanSize] = useState(() => getSpanConfig('', 1024 + 16));

  const [form] = (props.form && [props.form]) || Form.useForm();

  const showLength =
    defaultColsNumber !== undefined
      ? defaultColsNumber
      : Math.max(1, 48 / spanSize.span - (actionBtnBlock ? 0 : 1));

  const itemsWithInfo: any[] = [];
  const items: any[] = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const showCollapseBtn = items.length - 1 >= showLength ? undefined : false;
  // totalSpan 统计控件占的位置，计算 offset 保证查询按钮在最后一列
  let totalSpan = 0;
  let currentSpan = 0;
  let lastVisibleItemIndex = items.length - 1;
  let actionAdd = false;

  const ActionItem = () => (
    <Col
      span={actionBtnBlock ? 24 : spanSize.span}
      offset={
        actionBtnPosition === 'top' || actionBtnBlock
          ? 0
          : 24 - spanSize.span - (totalSpan % 24)
      }
      style={{ textAlign: 'right' }}
    >
      {addonBefore}
      <Button type="primary" htmlType="submit">
        搜索
      </Button>
      <Button
        style={{ margin: '0 0 0 8px' }}
        onClick={() => {
          form.resetFields();
          props.onReset && props.onReset();
        }}
      >
        重置
      </Button>
      {addonAfter}
      {showCollapseBtn !== false ? (
        <a
          style={{ fontSize: 12, marginLeft: '8px' }}
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? (
            <i className="up-arrow"></i>
          ) : (
            <i className="down-arrow"></i>
          )}{' '}
          {expand ? '收起' : '展开'}
        </a>
      ) : null}
    </Col>
  );

  items.forEach((item: any, index: number) => {
    // 如果 formItem 自己配置了 hidden，默认使用它自己的
    let hidden = item?.props?.hidden || false;
    const colSize = React.isValidElement(item)
      ? (item as any)?.props?.colSize || 1
      : 1;
    const colSpan = Math.min(spanSize.span * colSize, 24);

    if ((!expand && index >= showLength) || hidden) {
      hidden = true;
    } else {
      if (24 - (totalSpan % 24) < colSpan) {
        // 如果当前行空余位置放不下，那么折行
        totalSpan += 24 - (totalSpan % 24);
      }
      totalSpan += colSpan;
      lastVisibleItemIndex = index;
    }

    /* 将展开按钮放置在上面 */
    if (actionBtnPosition === 'top' && !actionAdd && totalSpan + colSpan > 24) {
      itemsWithInfo.push({
        span: spanSize.span,
        element: <ActionItem />,
        key: 'action_item',
      });
      actionAdd = true;
    }

    // console.log('totalSpan', totalSpan)

    itemsWithInfo.push({
      span: colSpan,
      element: item,
      key: React.isValidElement(item)
        ? item.key || `${(item as any).props?.name || index}-${index}}`
        : index,
      hidden,
    });
  });

  return (
    <Form
      form={form}
      name="advanced_search"
      className={`ant-advanced-search-form  ${expand ? '' : 'form-collapse'}`}
      onFinish={props.onFinish}
      requiredMark={false}
    >
      {
        <RcResizeObserver
          key="resize-observer"
          onResize={({ width }) => {
            setSpanSize(getSpanConfig('', width));
          }}
        >
          <Row gutter={16} justify="start" key="resize-observer-row">
            {itemsWithInfo.map((item, index) => {
              if (React.isValidElement(item.element) && item.hidden) {
                return React.cloneElement(item.element, {
                  hidden: true,
                  key: item.key || index,
                });
              }
              currentSpan += item.span;

              if (item.key == 'action_item') {
                return React.cloneElement(item.element, { key: item.key });
              }

              const colItem = (
                <Col key={item.key} span={item.span}>
                  {React.cloneElement(item.element, { form: form })}
                </Col>
              );
              // if (split && currentSpan % 24 === 0 && index < lastVisibleItemIndex) {
              //     return [
              //         colItem,
              //         <Divider key="line" style={{ marginTop: -8, marginBottom: 16 }} dashed />,
              //     ];
              // }
              return colItem;
            })}
            {actionBtnPosition === 'top' ? null : <ActionItem />}
          </Row>
        </RcResizeObserver>
      }
    </Form>
  );
}

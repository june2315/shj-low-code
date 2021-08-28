import React from 'react';
export { CompanySelect } from './CompanySelect';
export { DeptSelect } from './DepartmentSelect';
import './index.less';
export declare function renderAddonFormItem(
  text: any,
  options: any,
  dom: any,
  addonProps: any,
): JSX.Element;
export declare function FormText(props: any): JSX.Element;
export declare function FormSelect(props: any): JSX.Element;
export declare function FormTreeSelect(props: any): JSX.Element;
export declare function FormCascader(props: any): JSX.Element;
export declare function FormDatePicker(props: any): JSX.Element;
export declare function FormDateTimeRangePicker(props: any): JSX.Element;
interface IFormAutoDatePicker {
  name?: string;
  addonProps?: any;
  hidden?: boolean;
  label?: string;
}
interface IFormAutoDatePickerState {
  type: any;
}
export declare class FormAutoDatePicker extends React.Component<
  IFormAutoDatePicker,
  IFormAutoDatePickerState
> {
  constructor(props: IFormAutoDatePicker);
  _onChange: (value: any) => void;
  render(): JSX.Element;
}
export default function SearchForm(props: any): JSX.Element;

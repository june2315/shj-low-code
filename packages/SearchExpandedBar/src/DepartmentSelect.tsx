import React, {
  useEffect,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { FormCascader } from './index';

const DeptSelect = forwardRef((props: any, ref) => {
  const { addonProps, hidden, label, name, data, fieldNames, ...rest } = props;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(data);
    return () => {};
  }, [data]);

  useImperativeHandle(ref, () => ({
    setData: (val: any) => {
      setOptions(val);
    },
  }));

  return (
    <FormCascader
      {...props}
      name="deptCode"
      label="部门"
      expandTrigger="hover"
      addonProps={{
        name: 'deptCode_prefix',
      }}
      fieldNames={
        fieldNames || { label: 'name', value: 'ihrCode', children: 'childs' }
      }
      options={options}
    />
  );
});

export default DeptSelect;

export { DeptSelect };

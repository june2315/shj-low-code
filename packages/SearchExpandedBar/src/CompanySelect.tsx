import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { FormSelect } from './index';

const CompanySelect = forwardRef((props: any, ref) => {
  const { deptRef, data, form, ...rest } = props;
  const [options, setOptions] = useState([]);

  useImperativeHandle(ref, () => ({
    setData: (val: any) => {
      setOptions(val);
    },
  }));

  useEffect(() => {
    setOptions(data);
    return () => {};
  }, [data]);

  const name = props.name;
  return (
    <FormSelect
      {...props}
      name={name}
      label="公司"
      showSearch
      valueEnum={options}
      addonProps={{ name: name + '_prefix' }}
      fieldProps={{
        onChange: async (value: any) => {
          const { name, subName, getSubOptions } = props;
          props.onChange &&
            props.onChange({ value, form, name, subName, getSubOptions });
        },
      }}
    />
  );
});

export default CompanySelect;
export { CompanySelect };

import React, { useState, useEffect, useReducer, useRef } from 'react';
import { Form, Select, Tooltip } from 'antd';

function SearchPrefix({
  name,
  options = [],
  optionsTips = {},
  className,
  ...rest
}: any) {
  if (!optionsTips['∈']) optionsTips['∈'] = '包含';
  if (!optionsTips['LIKE']) optionsTips['LIKE'] = '包含';
  if (!optionsTips['<>']) optionsTips['<>'] = '不等于';
  return (
    <Form.Item name={name} noStyle initialValue={options[0]}>
      <Select
        {...rest}
        className={className}
        style={{ width: 40 }}
        showArrow={false}
        size="small"
        dropdownStyle={{
          minWidth: 100,
        }}
      >
        {options.map((sbl: any, i: number) => (
          <Select.Option
            key={`${name}_${sbl}_${i}`}
            className="symbol-option"
            value={sbl}
          >
            {optionsTips[sbl] ? (
              <Tooltip title={optionsTips[sbl]} placement="right">
                <div>{sbl}</div>
              </Tooltip>
            ) : (
              <span>{sbl}</span>
            )}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export { SearchPrefix };

export default SearchPrefix;

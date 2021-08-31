import React, { useState, useRef, useCallback, forwardRef } from 'react';

import SearchForm, {
  FormText,
  FormSelect,
  FormAutoDatePicker,
  DeptSelect,
  CompanySelect,
} from 'shj-search-expanded-bar';

import CommonDragTable from 'shj-common-drag-table';
import './index.less';

function FilterTable(props: any, ref: any) {
  const {
    columns,
    onSearchFinish,
    onSearchReset,
    actionBtnBlock,
    addonBefore,
    addonAfter,
    search = [],
    ...rest
  } = props;

  const deptRef = useRef();
  const [deptOpts, setDeptOpts] = useState([]);

  const onCompanyChange = useCallback(
    ({ value, form, name, subName, getSubOptions } = {}) => {
      form.setFieldsValue({ [name]: value });
      form.resetFields([subName]);
      if (typeof getSubOptions === 'function') {
        let res = getSubOptions(value);
        if (Object.prototype.toString.call(res) === '[object Promise]') {
          res.then(setDeptOpts);
        }
      }
    },
    [],
  );

  const TableComponent = CommonDragTable;
  return (
    <div className="filter-table">
      <div className={'search-wrap'}>
        <SearchForm
          onFinish={onSearchFinish}
          onReset={onSearchReset}
          actionBtnBlock={actionBtnBlock}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
        >
          {search.map((d: any, i: number) => {
            const { itemType, addonOpts, addonTips, data, ...rest } = d;
            let itemProps = {
              ...rest,
              addonProps: {
                name: `${rest.name}_prefix`,
                options: addonOpts ? addonOpts : ['='],
                optionsTips: addonTips ? addonTips : {},
              },
            };

            if (itemType === 'select') {
              return <FormSelect key={i} valueEnum={data} {...itemProps} />;
            }

            if (itemType === 'company') {
              return (
                <CompanySelect
                  key={i}
                  data={data}
                  {...itemProps}
                  onChange={onCompanyChange}
                />
              );
            }

            if (itemType === 'department') {
              return <DeptSelect key={i} data={deptOpts} {...itemProps} />;
            }

            if (itemType === 'autoDate') {
              return <FormAutoDatePicker key={i} {...itemProps} />;
            }

            return <FormText key={i} {...itemProps} />;
          })}
        </SearchForm>
      </div>
      <TableComponent {...rest} ref={ref} columns={columns} />
    </div>
  );
}

export default forwardRef(FilterTable);

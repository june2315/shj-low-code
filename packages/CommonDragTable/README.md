# shj-common-drag-table

```plaintext
依赖项
【shj-drag-table】
```

增加分页与 footer 的可拖拽表格

## Install

Using npm:

```bash
$ npm install --save shj-common-drag-table
```

or using yarn:

```bash
$ yarn add shj-common-drag-table
```

## API

| 参数名       | 说明                      | 必填  | 类型                                                            | 默认值       | 备注                        |
| ------------ | ------------------------- | ----- | --------------------------------------------------------------- | ------------ | --------------------------- |
| request      | 请求数据方法              | true  | function                                                        | -            |                             |
| sticky       | 表头浮动                  | false | boolean                                                         | false        |                             |
| columns      | 表格列配置，同 antd       | false | [ColumnsType[]](https://ant.design/components/table-cn/#Column) | -            | 配置 hidden 可隐藏字段      |
| rowSelection | 表格行是否可选择，同 antd | false | {}                                                              | -            |                             |
| footer       | 表格底部渲染方法          | false | function                                                        | -            |                             |
| pagination   | 分页显示控制              | false | boolean                                                         | -            | 为 false 时，不显示分页组件 |
| filterConfig | 排序选项配置              | false | object                                                          | FilterConfig | -                           |

### FilterConfig

```javascript
{
    column: {
        placeholder: '默认排序',
        options: ['last_updated_time:更新时间', 'created_time:创建时间']
    },
    asc: {
        placeholder: '排序方式',
        options: ['1:升序', '0:降序']
    }
}
```

## Methods

| 名称   | 说明               | 备注 |
| ------ | ------------------ | ---- |
| reload | 重新加载数据       | -    |
| reset  | 重置参数并加载数据 | -    |

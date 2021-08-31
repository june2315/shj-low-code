// JSON adapt JS

export default class ListAdapter {
  props: any;

  constructor(props = {}) {
    this.props = props;
  }

  getConfig({ restData }: any = {}) {
    const { config, customRender = {}, events = {}, status = {} } = this.props;
    let { tabs = [], columns = [], search = [], footer = [] } = config;

    for (let column of columns) {
      if (typeof column.render === 'string') {
        column.render =
          customRender[column.render] &&
          customRender[column.render].bind(events);
      }
    }

    for (let item of search) {
      if (typeof item.data === 'string' && restData[item.data]) {
        item.data = restData[item.data];
      }
    }

    for (let item of footer) {
      const { events: itemEvents, disabled } = item;
      if (itemEvents) {
        for (let itemEvent of itemEvents) {
          let names = itemEvent.split(':');
          item[names[0]] = events[names[1] || names[0]];
        }
        delete item.events;
      }

      if (typeof disabled === 'string') {
        switch (Object.prototype.toString.call(status[disabled])) {
          case '[object Function]':
            item.isDisabled = status[disabled];
            delete item.disabled;
            break;
        }
      }
    }

    return {
      columns,
      search,
      footer,
      tabs,
    };
  }
}

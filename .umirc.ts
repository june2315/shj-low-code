import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'shj-low-code',
  favicon: '/logo.png',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  resolve: {
    includes: ['docs', 'packages'],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  mode: 'site',
  navs: [
    // null,
    {
      title: 'PC',
      path: '/components',
    },
    {
      title: 'Mobile',
      path: '/mobile_components',
    },
    {
      title: 'GitLab',
      path: 'https://github.com/umijs/dumi',
    },
    // {
    //   title: '我有二级导航',
    //   path: '链接是可选的',
    //   // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
    //   children: [
    //     { title: '第一项', path: 'https://d.umijs.org' },
    //     { title: '第二项', path: '/guide' },
    //   ],
    // },
  ],
  devServer: {
    port: 8008,
  },
  // more config: https://d.umijs.org/config
});

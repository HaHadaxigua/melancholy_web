# 1. 构建项目
Vite 是一个由原生 ES 模块驱动的 Web 开发构建工具，支持模块热更新和按需加载。
用尤大的话来讲，用了 Vite 之后就可以告别 webpack 了。

使用Vite创建一个项目
1. `npm install vite-app melancholy`
2. `yarn` 打包项目
3. `yarn dev` 运行服务

# 2. 项目结构
├─ public             # 静态资源
├─ src                # 源码
│  ├─ @types          # ts 声明
│  ├─ apis            # 接口请求
│  ├─ assets          # webpack打包的资源
│  ├─ components      # 公共组件
│  ├─ config          # 全部配置
│  ├─ constant        # 常量
│  ├─ directives      # 全局指令
│  ├─ layout          # 全局Layout
│  ├─ locales         # 国际化
│  ├─ model           # 全部model存放
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # 全局store管理
│  ├─ styles          # 全局样式
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有业务页面
├─ tsconfig.json      # ts 编译配置
└─ vue.config.js      # vue-cli 配置
————————————————


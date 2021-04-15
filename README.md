# 0. base
setup 函数在组件创建之前就会触发，最终返回一个我们定义的对象，这个对象的字段可以在组件的其他地方直接使用

比如上例中返回了变量 list 和函数 fetchList，我们可以直接在组件的 methods 或者其他地方，通过 this.list 、this.fetchList 使用他们

在实际项目中，可以将上面的逻辑单独封装成一个函数并在 setup 中调用，最终返回函数的返回值


# 1. 构建项目
Vite 是一个由原生 ES 模块驱动的 Web 开发构建工具，支持模块热更新和按需加载。
用尤大的话来讲，用了 Vite 之后就可以告别 webpack 了。

使用Vite创建一个项目
1. `npm install vite-app melancholy`
2. `yarn` 打包项目
3. `yarn dev` 运行服务

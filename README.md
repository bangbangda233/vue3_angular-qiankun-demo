# vue为主应用angular为子应用CocosCreator内嵌web的微前端qiankun实践

主应用使用的是vue3

子应用使用的是angular13

子应用添加了CocosCreator内嵌web实践
## 技术储备

> 提前了解和学习以下知识会对您使用本项目有很大的帮助

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) -项目开发环境
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基础语法
- [Angularjs](https://docs.angularjs.org/api) - angularjs 基本语法
- [CocosCreator](http://docs.cocos.com/) - CocosCreator
- [qiankun](https://qiankun.umijs.org/) - qiankun 基本使用

## 常见问题
* ionic路由未绑定key值，导致页面重定向混乱<ion-router-outlet :key="$route.fullPath" />；
* 子应用custom-webpack.config.js中的jsonpFunction更新为chunkLoadingGlobal，详情可查看webpack官方文档；
* angular13运行ts报错，"typescript": "~4.4.4"改为"typescript": "~4.3.5"
* 子应用内嵌cocos文件资源文件打包尽量配置在一级目录；
* 子应用和子应用同为静态资源时，入口文件entry需指向index.html;
* cocos资源文件读取需加上一级目录名，如本项目的/app-angular;
* 主应用whiteWords非必要，我是按照自己项目需要添加的。

## 安装使用
（进入子项目）
# 安装依赖
npm install

# 启动服务
npm run serve
```

## 打包发布

```bash
npm run build
```

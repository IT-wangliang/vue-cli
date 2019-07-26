<!--[TOC]-->

# 1 项目介绍

> 警务大数据平台前端 VUE 脚手架

# 2 目录结构

```
    |-- public      静态资源目录
    |-- script      webpack脚本目录
    |-- src
    |   |-- assets
    |   |   |-- font        字体图标
    |   |   |-- image       图片资源
    |   |   |-- js          js公共方法
    |   |   |-- style       样式文件
    |   |-- components
    |   |   |-- common      模块公用组件目录
    |   |   |-- global      全局组件目录
    |   |   |-- layout      布局组件目录
    |   |-- libs
    |   |   |-- directives.js       vue指令
    |   |   |-- filters.js          vue过滤器
    |   |-- router      路由配置
    |   |-- service     http请求封装
    |   |-- store       vuex模块
    |   |-- views       业务页面
    |   |-- App.vue     主组件
    |   |-- main.js     入口文件
    |-- tests
    |-- .browserslistrc
    |-- .eslintrc.js        ESLint规则
    |-- .gitignore
    |-- babel.config.js
    |-- jest.config
    |-- package.json        npm包管理,项目的配置信息
    |-- postcss.config.js
    |-- vue.config.js       webpack配置文件
    |-- README.md
```

# 3 功能说明

1、 启动开发环境

   `npm run serve`

2、 项目打包

   `npm run build`

3、 ESLint 代码修复

   `npm run lint`

4、 模块模板生成脚本

   `npm run new:comp`

> 在控制台输入模块名称，将在 view 目录下生成对应的模块

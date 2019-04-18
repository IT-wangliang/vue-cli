import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
Vue.use(Router);
const IndexRoute = {
  path: "/",
  component: Home,
  children: []
};

let routes = [
  IndexRoute,
  {
    path: "*",
    redirect: "/"
  }
];

/**
 *@description 自动注册 views 目录下 router.js 中的路由信息
 * @param {*} 要搜索的文件夹目录
 * @param {*} 是否还应该搜索它的子目录
 * @param {*} 一个匹配文件的正则表达式
 */
const routerContext = require.context("../views", true, /router.js$/);
routerContext.keys().forEach(route => {
  const routerModule = routerContext(route);
  IndexRoute.children = [
    ...IndexRoute.children,
    ...(routerModule.default || routerModule)
  ];
});
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

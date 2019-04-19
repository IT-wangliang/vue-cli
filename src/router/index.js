import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import NotFound from "@/views/404";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
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
    name: "404",
    component: NotFound
  },
  {
    path: "/login",
    component: Login
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

let router = new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});
export default router;

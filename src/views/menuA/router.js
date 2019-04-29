import lazyLoading from "@/router/lazyLoading";
export default [
  {
    name: "菜单A",
    path: "/menuA",
    meta: {
      icon: "setting"
    },
    component: lazyLoading("menuA", true)
  }
];

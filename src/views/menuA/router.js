import lazyLoading from "@/router/lazyLoading";
export default [
  {
    name: "菜单A",
    path: "/menuA",
    meta: {
      icon: "edit"
    },
    component: lazyLoading("menuA", true)
  }
];

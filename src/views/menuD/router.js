import lazyLoading from "@/router/lazyLoading";
export default [
  {
    name: "menuD",
    path: "/menuD",
    meta: {
      icon: "edit"
    },
    component: lazyLoading("menuD", true)
  }
];
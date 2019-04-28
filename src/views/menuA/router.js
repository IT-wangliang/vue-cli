import lazyLoading from "@/router/lazyLoading";
export default [
  {
    path: "/menuA",
    component: lazyLoading("menuA", true)
  }
];

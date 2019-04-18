import lazyLoading from "@/router/lazyLoading";
export default [
  {
    path: "/modalA",
    component: lazyLoading("modalA", true)
  }
];

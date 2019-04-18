import lazyLoading from "@/router/lazyLoading";
export default [
  {
    path: "/modalB",
    component: lazyLoading("modalB", true)
  }
];

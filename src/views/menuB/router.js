import lazyLoading from "@/router/lazyLoading";
export default [
  {
    name: "菜单B",
    path: "/menuB",
    component: { render: h => h("router-view") },
    children: [
      {
        name: "菜单B_A",
        path: "/menuB/menuB_A",
        component: lazyLoading("menuB/menuB_A", false)
      },
      {
        name: "菜单B_B",
        path: "/menuB/menuB_B",
        component: lazyLoading("menuB/menuB_B", false)
      }
    ]
  }
];

import lazyLoading from "@/router/lazyLoading";
export default [
  {
    name: "菜单C",
    path: "/menuC",
    meta: {
      icon: "setting"
    },
    component: { render: h => h("router-view") },
    children: [
      {
        name: "菜单C_A",
        path: "/menuC/menuC_A",
        meta: {
          icon: ""
        },
        component: lazyLoading("menuC/menuC_A", false)
      },
      {
        name: "菜单C_B",
        path: "/menuC/menuC_B",
        meta: {
          icon: ""
        },
        component: lazyLoading("menuC/menuC_B", false)
      }
    ]
  }
];

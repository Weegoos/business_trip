const routes = [
  {
    path: "/",
    component: () => import("../pages/IndexPage.vue"),
  },
  {
    path: "/about",
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: "/properties",
    component: () => import("../pages/PropertiesPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

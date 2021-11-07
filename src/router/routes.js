const routes = [
  /***************
   * Login routes
   **************/

  {
    path: "/login",
    component: () => import("pages/Login/Login.vue"),
  },

  /****************
   * Sign Up routes
   ***************/

  {
    path: "/sign-up",
    component: () => import("pages/SignUp/SignUp"),
  },

  /**************
   * Home routes
   *************/

  {
    path: "/page1",
    component: () => import("pages/Page1/Page1"),
  },
  {
    meta: { requiresAuth: true },
    path: "/page2",
    component: () => import("pages/Page2/Page2"),
  },
  {
    path: "/",
    component: () => import("pages/Home/Home.vue"),
  },
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push(
    // Always leave this as last one,
    // but you can also remove it
    {
      path: "/:catchAll(.*)*",
      component: () => import("pages/Error404.vue"),
    }
  );
}

export default routes;

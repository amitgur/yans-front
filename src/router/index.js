import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

export default function ({ store /* ssrContext*/ }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  // check authentication
  Router.beforeEach(async (to, from, next) => {
    if (to.matched.some((route) => route.meta.requiresAuth)) {
      // init user for the first time
      await store.dispatch("Auth/checkSignIn");
      const isSignIn = store.getters["Auth/getIsSignIn"];
      // route by user
      if (isSignIn) {
        next();
      } else {
        next("/login");
      }
    } else {
      // user was init
      next();
    }
  });

  return Router;
}

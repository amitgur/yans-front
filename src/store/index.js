import { createStore } from "vuex";

import Auth from "./Auth";

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      Auth,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
}

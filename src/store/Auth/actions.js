export async function signOut({ commit }) {
  return this._vm.$axios
    .get("/apiV1/logout_user")
    .then(async () => {
      console.log("logging out user in bandpad-back");

      commit("setUser", null);
      commit("setIsSignIn", false);
    })
    .catch((e) => {
      console.error(e);
    });
}

export async function checkSignIn(context) {
  return new Promise(async (resolve, reject) => {
    if (!context.getters["getAuthChecked"]) {
      context.commit("setAuthChecked", true);
      // call server for authentication
      try {
        const response = await this._vm.$axios.get("/apiV1/get_user");
        context.commit("setUser", response.data);
        context.commit("setIsSignIn", true);
        resolve();
      } catch {
        context.commit("setUser", null);
        context.commit("setIsSignIn", false);
        resolve();
      }
    } else {
      resolve();
    }
  });
}

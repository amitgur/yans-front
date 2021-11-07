import { api } from "boot/axios";

export async function dispatchLanguage({ getters, commit }) {
  return new Promise(async (resolve, reject) => {
    let response;
    if (!getters["getLanguage"]) {
      try {
        response = await api.get(
          "https://yans.bandpadtest.com/apiV1/get_language"
          // {
          //   params: { language: "he" },
          // }
        );
        commit("setLanguage", response.data);
        console.log(response);
        resolve();
      } catch (err) {
        reject(err);
      }
    }
  });
}

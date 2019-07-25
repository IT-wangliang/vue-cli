import { login } from "@/service";
import { getStorage } from "@/assets/js/util";

const state = {
  user: getStorage("user"),
  login: getStorage("login")
};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  SET_LOGIN: (state, login) => {
    state.login = login;
  }
};

const actions = {
  login({ commit }, userInfo) {
    const { loginName, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ loginName, password })
        .then(response => {
          const { data } = response;
          commit("SET_USER", data);
          commit("SET_LOGIN", "true");
          sessionStorage.setItem("user", JSON.stringify(data));
          sessionStorage.setItem("login", "true");
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

import types from "../mutation-types";

export const state = {
  aaa: 1
};

export const mutations = {
  [types.examData](state, options) {
    state.examData = {
      data: options["data"],
      type: options["type"],
      status: options["status"],
      options: options["options"]
    };
  }
};
export default {
  state,
  mutations
};

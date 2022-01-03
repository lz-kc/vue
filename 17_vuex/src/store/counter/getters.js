export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    return finalCounter > 100 ? 100 : finalCounter;
  },
  testAuth(state) {
    return state.isLoggedIn;
  },
  // testAuth(state, getters, rootState, rootGetters) {
  //   return state.isLoggedIn;
  // },
};

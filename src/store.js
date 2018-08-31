import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({
  state: {
    emptyFieldError: true,
    minAmount: undefined,
    minFee: undefined,
    maxFee: undefined,
  },
  getters: {
    getEmptyFieldError: state => state.emptyFieldError,
    getMinAmount: state => state.minAmount,
    getMinFee: state => state.minFee,
    getMaxFee: state => state.maxFee,
  },
  mutations: {
    setEmptyFieldError(state, newState) {
      state.emptyFieldError = newState;
    },
    setMinAmount(state, newState) {
      state.minAmount = newState;
    },
    setMinFee(state, newState) {
      state.minFee = newState;
    },
    setMaxFee(state, newState) {
      state.maxFee = newState;
    },
  },
  actions: {
    changeEmptyFieldError({ commit }, newState) {
      commit('setEmptyFieldError', newState);
    },
    changeMinAmount({ commit }, newState) {
      commit('setMinAmount', newState);
    },
    changeMinFee({ commit }, newState) {
      commit('setMinFee', newState);
    },
    changeMaxFee({ commit }, newState) {
      commit('setMaxFee', newState);
    },
  }
});

export default store;

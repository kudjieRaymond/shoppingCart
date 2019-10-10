const message = {

  //namespaced: true,
  state: {
    messageGroup: {
      message: '',
      messageColor: '',
      timeoutEvent: null
    }
  },
  mutations: {
    addMessage(state, { message, messageColor }) {
      state.messageGroup = { message, messageColor };
      if (state.timeoutEvent) {
        clearTimeout(state.timeoutEvent);
      }
      // state.timeoutEvent = setTimeout(function() {
      //   state.messageGroup = {
      //     messageColor: '',
      //     message: ''
      //   };
      // }, 5000);
    },
    clearMessage(state) {
      state.messageGroup = {
        messageColor: '',
        message: ''
      };
    }
  },
  actions: {
    clearMessage({ commit }) {
      commit('clearMessage');
    },
    addMessage({ commit }, payload) {
      commit('addMessage', payload);
    }
  },
  getters: {
    getMessage: state => {
      return state.messageGroup;
    }
  }
};

export default message;

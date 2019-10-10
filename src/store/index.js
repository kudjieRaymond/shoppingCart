import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import products from './modules/products'
import cart from './modules/cart'
import message from './modules/message'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
		auth,
		products,
		cart,
		message
  },
  strict: true
});

export default store;

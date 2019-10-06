import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import products from './modules/products'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
		auth,
		products
  },
  strict: true
});

export default store;

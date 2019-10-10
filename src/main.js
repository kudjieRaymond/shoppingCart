import "@babel/polyfill";
import Vue from 'vue'
import App from './App.vue'
import "@/firebase/";
import vuetify from './plugins/vuetify';
import router from './routes'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	store,
  render: h => h(App)
}).$mount('#app')

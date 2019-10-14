import "@babel/polyfill";
import Vue from 'vue'
import App from './App.vue'
import "@/firebase/";
import vuetify from './plugins/vuetify';
import router from './routes'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { firebaseListener } from './firebase';

firebaseListener(authStatusChange);

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	store,
  render: h => h(App)
}).$mount('#app')

function authStatusChange(loggedIn, user) 
{
	if(store){
		
		store.dispatch('fetchUser', user);
		// //store.dispatch('auth/authStatusChanged');
		// if(user){
		// 	//get shopppingCart
		// }
	}

}

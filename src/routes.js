import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/HomePage'

Vue.use(VueRouter);

const routes = [
  {
		path: '/login',
		name: 'login',
		component: () => import('./views/Login.vue')
  },
  {
		path: '/register',
		name: 'register',
    component: () => import('./views/Register.vue')
	},
	{
		path: '/',
		name: 'homePage',
		component: HomePage
	}
	// { 
	// 	path: '*', 
	// 	redirect: '/' 
	// }
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router
import Vue from 'vue';
import VueRouter from 'vue-router';
import Shop from './views/Shop';

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
    component: Shop
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('./components/ProductDetails.vue')
	},
	{
		path: '/cart',
		name: 'cart',
		component: ()=> import('./views/Cart.vue')
	}
  // {
  // 	path: '*',
  // 	redirect: '/'
  // }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

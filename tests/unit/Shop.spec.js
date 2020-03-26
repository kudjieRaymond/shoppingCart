import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Shop from '@/views/Shop'
import Vuex from 'vuex'
import products from '@/store/modules/products';
import RingLoader from 'vue-spinner/src/RingLoader.vue';
import ProductItem from '@/components/ProductItem';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Store.vue', ()=>{

	let state;
  let store;
	let vuetify;

  beforeEach(() => {
		vuetify = new Vuetify();
    state = {
				isLoading: true,
				productList :	 [
					{
					id: 1,
					title: 'macbook Retina 13.3" ME662 (2013)',
					thumbnail_url:
						'https://www.dropbox.com/s/6tqcep7rk29l59e/img2.jpeg?raw=1',
					price: 999.9,
					quantity: 10,
					description:
						'3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM'
				},
				{
					id: 2,
					title: 'Macbook Pro 13.3" Retina MF841LL/A',
					thumbnail_url:
						'http://media.bizwebmedia.net//sites/72783/data/images/2015/11/3220113retina13.jpg',
					price: 1199.9,
					quantity: 15,
					description:
						'Macbook Pro 13.3" Retina MF841LL/A Model 2015 Option Ram Care 12/2016'
				}
			]
		}

		store = new Vuex.Store({
      modules: {
        products: {
          state,
          getters: products.getters
        }
      }
    });
	})

	const mountFunction = options => {
    return shallowMount(Shop, {
			store,
      localVue,
      vuetify,
      ...options
    });
  };
		
		it('display a list of products', ()=>{
			const wrapper = mountFunction()
			expect(wrapper.html()).toMatchSnapshot();
			
		})

		it('display a loader', ()=>{
			const wrapper = mountFunction();
			expect(wrapper.find(RingLoader).exists()).toBe(true);
		})

		it('display products', () => {
      const wrapper = mountFunction();
      expect(wrapper.find(ProductItem).exists()).toBe(true);
    });

});
	
	
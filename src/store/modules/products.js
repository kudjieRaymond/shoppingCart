import { ref } from '@/firebase';

const products = {
  //namespaced: true,

  state: {
    isLoading: true,
    productList: [
      // {
      //   id: 1,
      //   title: 'macbook Retina 13.3" ME662 (2013)',
      //   thumbnail_url:
      //     'https://www.dropbox.com/s/6tqcep7rk29l59e/img2.jpeg?raw=1',
      //   price: 999.9,
      //   quantity: 10,
      //   category: 'macbook',
      //   description:
      //     '3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM'
      // },
      // {
      //   id: 2,
      //   title: 'Macbook Pro 13.3" Retina MF841LL/A',
      //   thumbnail_url:
      //     'http://media.bizwebmedia.net//sites/72783/data/images/2015/11/3220113retina13.jpg',
      //   price: 1199.9,
      //   quantity: 15,
      //   category: 'macbook',
      //   description:
      //     'Macbook Pro 13.3" Retina MF841LL/A Model 2015 Option Ram Care 12/2016'
      // },
      // {
      //   id: 3,
      //   title: 'Macbook Pro 15.4" Retina MC975LL/A Model 2012',
      //   thumbnail_url:
      //     'https://www.dropbox.com/s/6tqcep7rk29l59e/img2.jpeg?raw=1',
      //   price: 1800,
      //   quantity: 1,
      //   category: 'macbook',
      //   description:
      //     '3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM'
      // },
      // {
      //   id: 4,
      //   title: 'Retina MacBook Pro 13 inch MF841',
      //   thumbnail_url:
      //     'http://media.bizwebmedia.net//sites/72783/data/images/2016/2/4713895macbook_pro_retina.png',
      //   price: 1000,
      //   quantity: 0,
      //   category: 'macbook',
      //   description:
      //     '2.9 Ghz Dual-Core Intel Core i5 Broadwell Tubro boost up to 3.3 GHz with L3 3MB cache'
      // }
    ]
  },
  getters: {
    products(state) {
      return state.productList;
    },
    isProductLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    updateProductList(state, productList) {
      state.productList = productList;
      state.isLoading = false;
    }
  },
  actions: {
    updateProductList({commit}) {
			ref.child("products").on('value', function(snapshot) {
				commit('updateProductList', snapshot.val());
      });
      
    }
  }
};

export default products;

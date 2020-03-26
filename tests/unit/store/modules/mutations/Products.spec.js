import products from '@/store/modules/products';

describe('UPDATE PRODUCT LIST', () => {
  
  it('update the list of products and set the loader to false', () => {
		const productList = [
      {
        id: 1,
        title: 'macbook Retina 13.3" ME662 (2013)',
        thumbnail_url: 'https://www.dropbox.com/s/6tqcep7rk29l59e/img2.jpeg?raw=1',
        price: 999.9,
        quantity: 10,
        description: '3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM'
      },
      {
        id: 2,
        title: 'Macbook Pro 13.3" Retina MF841LL/A',
        thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2015/11/3220113retina13.jpg',
        price: 1199.9,
        quantity: 15,
        description: 'Macbook Pro 13.3" Retina MF841LL/A Model 2015 Option Ram Care 12/2016'
      }
		];
		
		const state = {
			productList :[],
			isLoading: true
		}
		products.mutations.updateProductList(state, productList)

		expect(state).toEqual({
			isLoading:false,
			productList,
		})
	});

	
	
});

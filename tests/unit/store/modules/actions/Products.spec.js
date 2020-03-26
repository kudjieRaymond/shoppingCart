import products from '@/store/modules/products';
import { ref } from '@/firebase';
 
	
jest.mock('@/firebase', () => ({
	ref:{
		child:jest.fn(()=>({
			on:jest.fn()
		}))
	}
	}));


// jest.mock('ref', () => ({
// 	child:(_url)=>{
// 		return {
// 			on:(_body)
// 		}
// 	},
  
// }));

describe('updateProductList', ()=>{

	it('gets a list of products from firebase and update the state', ()=>{

		
		const commit = jest.fn() 

		products.actions.updateProductList(commit);

		expect(commit).toBeCalledWith('updateProductList')
	})
})
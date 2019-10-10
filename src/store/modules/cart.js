const cart = {


	state:{
		itemList: [],
	},
	mutations:{
		updateCart(state, {item, quantity, isAdd}){
			const record  = state.itemList.find(el=> el.id == item.id)
			if(record){
				isAdd ? record.quantity += quantity : record.quantity = quantity
			}else{
				state.itemList.push({...item, quantity})
			}
		},
		setCart(state, productList){
			if(productList){
				state.itemList = productList
			}
		},
		removeCartItem(state, item){
			const record = state.itemList.find(el=> el.id == item.id)
			state.itemList.splice(state.itemList.indexOf(record), 1)
		}
	}, 
	actions:{
		clearCart({commit}){
			commit('setCart', [])
		},
		updateCart({ commit}, payload){
			commit('updateCart', payload)
		},
		removeCartItem({commit},item){
			commit('removeCartItem', item)
		}

	},
	getters:{
		itemList(state){
			return state.itemList
		},
		cartTotal(state){
			let total = state.itemList.reduce((acc, curr)=>{
				return acc += curr.quantity * curr.price
			},0 )

			return total
			
		}
	}
}

export default cart
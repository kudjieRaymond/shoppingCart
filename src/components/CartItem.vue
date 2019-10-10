<template>
	<tr>
		<td>
			<v-img :src="cartItem.thumbnail_url" lazy-src transition="fade-transition" width="50" height="50"></v-img>
		</td>
		<td>{{cartItem.title}}</td>
		<td>GHC {{cartItem.price}}</td>
		<td><input type="number"  min="0" :value="cartItem.quantity" @input="updateQuantity"></td>
		<td>GHC {{subTotal}}</td>
		<td>
			<v-icon @click="removeItem">cancel</v-icon>
		</td>
	</tr>
</template>
<script>
import {mapActions} from 'vuex'
export default {
	data(){
		return {
			
		}
	},
	props:['cartItem'],
	computed:{
		subTotal(){
			return this.cartItem.price * this.cartItem.quantity
		}
	}, 
	methods:{
		...mapActions( ['updateCart', 'removeCartItem' ]),
		removeItem(){
			this.removeCartItem(this.cartItem)
		},
		updateQuantity(e){
			this.updateCart({
				item: this.cartItem, 
				quantity: e.target.value ,
				 isAdd:false
				})
		}
	}	

}
</script>
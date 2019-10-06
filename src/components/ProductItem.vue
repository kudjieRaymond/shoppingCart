<template>
	
		<v-card>
				<v-responsive>
						<v-img :src="item.thumbnail_url"></v-img>
				</v-responsive>

				<v-card-text>
						<div class="title my-2">
							<v-btn text small >{{item.title}}</v-btn>
						</div>
						<div class="subheading">{{ item.quantity }} left in stock</div>
						<div class="text--primary">
							{{item.description | shortDescription}}
						</div>
				</v-card-text>

				<v-card-actions>
						<v-btn color="green" :disabled="item.quantity=== 0" dark @click="addItem"
								>Add to cart</v-btn
						>
				</v-card-actions>
		</v-card>
           
</template>
<script>
export default {
	props:['item'],

	data(){

	},
	methods:{
		addItem(){

		}
	},
	filters:{
		shortDescription(value){
			if(value && value.length >100){
				return value.substring(0, 100) + '...'
			}
			return $value
		}
	}
}
</script>
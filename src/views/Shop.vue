<template>
	<v-container grid-list-lg>
		<v-layout row wrap>
			<v-flex  xs12 sm6 md4 lg4>
				<product-item v-for="prod in products" :item="prod" :key="prod.id"></product-item>
			</v-flex>
		</v-layout>

	</v-container>
</template>
<script>
import ProductItem from '@/components/ProductItem'
export default {
	components:{
		ProductItem,
	},
	data(){

	}
}
</script>
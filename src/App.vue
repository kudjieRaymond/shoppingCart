<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
			<alert></alert>
			<router-view></router-view>
		</v-content>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import Alert from "@/components/Alert"
import {mapActions} from 'vuex'
export default {
  name: "App",
  components: {
		AppNavigation,
		Alert
	},
	methods: {
      ...mapActions([ 'updateProductList'])
		},
		created(){
			this.updateProductList()
			//let uid = this.$store.getters.currentUser.uid;

			//this.retrieveShoppingCart({uid, currentCart: this.$store.getters.itemList})
		}
};
</script>

<style>
</style>
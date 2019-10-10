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
export default {
  name: "App",
  components: {
		AppNavigation,
		Alert
  }
};
</script>

<style>
</style>
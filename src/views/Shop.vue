<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <product-item v-for="prod in products" :item="prod" :key="prod.id"></product-item>
    </v-layout>
  </v-container>
</template>
<script>
import ProductItem from '@/components/ProductItem';
import { mapGetters } from 'vuex';
export default {
  components: {
    ProductItem
  },

  computed: {
    ...mapGetters('products', ['products'])
  }
};
</script>
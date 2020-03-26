<template>
  <v-container grid-list-lg>
    <div class="d-flex justify-center" v-if="isLoading">
      <ring-loader :loading="isProductLoading" :height="loaderHeight" :color="loaderColor" :size="loaderSize"></ring-loader>
    </div>
    <v-layout row wrap>
      <product-item v-for="prod in products" :item="prod" :key="prod.id"></product-item>
    </v-layout>
  </v-container>
</template>
<script>
import ProductItem from '@/components/ProductItem';
import { mapGetters } from 'vuex';
import RingLoader from 'vue-spinner/src/RingLoader.vue';

export default {
  components: {
    ProductItem,
    RingLoader
  },
  data() {
    return {
      loaderColor: '#5cb85c',
			loaderSize: '100px',
			loaderHeight: '100px',
      isLoading: true
    };
  },

  computed: {
    ...mapGetters(['products', 'isProductLoading'])
  }
};
</script>
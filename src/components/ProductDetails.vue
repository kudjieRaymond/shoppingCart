<template>
  <v-container>
		<div class="d-flex justify-center" v-if="isLoading">
      <ring-loader :loading="isProductLoading" :height="loaderHeight" :color="loaderColor" :size="loaderSize"></ring-loader>
    </div>
    <v-card>
      <div class="d-flex justify-center align-item-center">
				<div class="">
					<v-img :src="item.thumbnail_url"></v-img>
				</div>
      </div>

      <v-card-text>
        <div class="headline font-weight-bold">
          <h4>{{item.title}}</h4>
        </div>
        <div class="subheading">{{ item.quantity }} left in stock</div>
        <div class="text--primary">{{ item.description }}</div>
      </v-card-text>

      <v-card-actions class="d-flex justify-end">
        <v-btn color="primary" :disabled="item.quantity=== 0" @click="addItem">Add to cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import RingLoader from 'vue-spinner/src/RingLoader.vue';

export default {
	
	components: {
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
    ...mapGetters( ['isProductLoading','products']),
    item() {
      let id = this.$route.params.id;
      let product = {};
      if (this.products.length >= id) {
        product = this.products.find(item => {
          return item.id == id;
        });
      }
      return product;
    }
  },
  methods: {
		...mapActions(['updateCart']),
    addItem() {
			const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      // console.log(order);
      this.updateCart(order);
		}
  }
};
</script>
<style  scoped>
	.img-fluid{
		height:250px;
	}
</style>
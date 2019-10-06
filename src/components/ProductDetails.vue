<template>
  <v-container>
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
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('products', ['products']),
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
    addItem() {}
  }
};
</script>
<style  scoped>
	.img-fluid{
		height:250px;
	}
</style>
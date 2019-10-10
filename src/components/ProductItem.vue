<template>
  <v-flex xs12 sm6 md4 lg4>
    <v-card>
      <div>
        <v-img :src="item.thumbnail_url"></v-img>
      </div>

      <v-card-text>
        <div class="title my-2">
          <v-btn text small color="green" :to="{name:'product', params:{id:item.id}}">{{item.title}}</v-btn>
        </div>
        <div class="subheading">{{ item.quantity }} left in stock</div>
        <div class="text--primary">{{ item.description | shortDescription}}</div>
      </v-card-text>

      <v-card-actions class="d-flex justify-end">
        <v-btn color="primary" :disabled="item.quantity=== 0"  @click="addItem">Add to cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
import  {mapActions} from 'vuex'
export default {
  props: ['item'],

  //data() {},
  methods: {
		...mapActions(['updateCart'] ),
    addItem(){
			let order = {
				item: Object.assign({}, this.item),
				quantity: 1,
				isAdd:true
			}
			this.updateCart(order)
		}
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      }
      return value;
    }
  }
};
</script>
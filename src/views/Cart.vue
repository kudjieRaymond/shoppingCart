<template>
  <v-container>
    <v-card>
      <v-simple-table>
        <thead>
          <tr>
            <th></th>
            <th class="text-left">Product</th>
            <th class="text-left">Price</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Subtotal</th>
            <th class="text-left"></th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <cart-item v-for="item in itemList" :cartItem="item" :key="item.id"></cart-item>
          <tr>
            <td>
              <v-btn dark color="red" @click="saveShoppingCartToFirebase">
                <v-icon>home</v-icon>Save And Continue
              </v-btn>
            </td>
            <td colspan="2"></td>
            <td>GHC {{cartTotal}}</td>
            <td>
              <v-btn dark color="green" @click="checkout">Checkout</v-btn>
            </td>
            <td>
              <v-btn color="warning" @click="clearCart">Clear Cart</v-btn>
            </td>
          </tr>
        </tfoot>
      </v-simple-table>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import CartItem from '@/components/CartItem';

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters([
      'itemList',
      'cartTotal',
      'isAuthenticated',
			'products',
			'currentUser'
    ])
  },
  methods: {
    ...mapActions(['saveShoppingCart', 'addMessage', 'clearCart']),
    validateCart(itemList, productList) {
      let isValid = true;
      let message = '';

      itemList.map(item => {
        for (let prodIndex = 0; prodIndex < productList.length; prodIndex++) {
          if (productList[prodIndex].id == item.id) {
            if (productList[prodIndex].quantity < item.quantity) {
              message = `Only ${productList[prodIndex].quantity} ${item.title} available in stock`;
              isValid = false;
              return;
            }
            break;
          }
        }
      });

      return {
        isValid,
        message
      };
    },
    saveShoppingCartToFirebase() {
      if (this.isAuthenticated) {
        let { isValid, message } = this.validateCart(
          this.itemList,
          this.products
				);

        if (isValid) {
					//save data to firebase
          this.saveShoppingCart({
            uid: this.currentUser.uid,
            itemList: this.itemList
          }).then(() => {
            this.addMessage({
              messageColor: 'success',
              message: 'Your shopping cart is saved successfully'
						});
						this.$router.push('/');
          }).catch((err)=>{
						console.log(err)
					});
         
        } else {
          //notify user  that cart is invalid
          this.addMessage({
            messageColor: 'danger',
            message: message
          });
        }
      } else {
        //notify user to login
        this.addMessage({
          messageColor: 'warning',
          message: 'Please login to save your cart'
        });
      }
    },
    checkout() {
      if (this.isAuthenticated) {
        if (!this.itemList || this.itemList.length == 0) {
          this.addMessage({
            messageClass: 'warning',
            message: 'Your cart is empty!'
          });
          return;
        }
        let { isValid, message } = this.validateCart(
          this.itemList,
          this.products
        );

        if (isValid) {
          this.addMessage({
            messageColor: 'success',
            message: 'Your order has been successfully processed!'
          });

          this.clearCart();
          this.$router.push('/');
        } else {
          this.addMessage({
            messageColor: 'danger',
            message: message
          });
        }
      } else {
        this.addMessage({
          messageColor: 'warning',
          message: 'Please login to checkout!'
        });
      }
    }
  }
};
</script>
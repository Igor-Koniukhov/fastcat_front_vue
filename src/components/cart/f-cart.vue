<template>
  <div class='f-cart'>
<f-breadcrumb/>
    <h1 v-if="cart_data.length" class="dancing">Cart</h1>
    <p v-if="!cart_data.length" class="dancing-sm">There are no products in cart...</p>
    <f-cart-item
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="f-cart__total" v-if="cart_data.length">
      <p class="total__name">Total:</p>
      <p>{{cartTotalCost | toFix | formattedPrice}}</p>
    </div>
  </div>
</template>

<script>
  import fCartItem from './f-cart-item'
  import toFix from "../../filters/toFix";
  import formattedPrice from "../../filters/price-format";
  import {mapActions} from 'vuex'
  import fBreadcrumb from "../general-pages/f-breadcrumb";

  export default {
    name: "f-cart",
    components: {
      fBreadcrumb,
      fCartItem
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      formattedPrice,
      toFix
    },
    computed: {
      cartTotalCost() {
        let result = []

        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>

<style lang="scss">
  .v-cart {
    margin-bottom: 100px;
    &__total {
      position: absolute;
      top: 86px;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      background: $yellow;
      color: #ffffff;
      font-size: 20px;
    }
.back-to-catr-link{
  position: fixed;
  top: 60px;
  padding: 1px;
  z-index: 350;
  left: 0;
  right:0;
  color: #333;
  font-weight: bold;

}

    .total__name {
      margin-right: $margin*2;
    }
  }
</style>

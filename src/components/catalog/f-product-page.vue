<template>
  <div class="f-product-page">
    <img v-if="product.image" class="f-catalog-item__image" :src="( product.image)"
         alt="img">
    <p>Product name: {{product.name}}</p>
    <p>Type: {{product.type}}</p>
    <p>Price: {{product.price | toFix | formattedPrice}}</p>
    <button
        class="f-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >Add to cart
    </button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import toFix from "../../filters/toFix";
  import formattedPrice from "../../filters/price-format";

  export default {
    name: "f-product-page",
    props: {},
    data() {
      return {}
    },
    filters: {
      formattedPrice,
      toFix
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      product() {
        let result = {}
        let vm = this;
        this.PRODUCTS.find(function (item) {
          if (item.type === vm.$route.query.product) {
            result = item;
          }
        })
        return result;
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart() {
        this.ADD_TO_CART(this.product)
      },
    },
    mounted() {
      if (!this.PRODUCTS.length) {
        this.GET_PRODUCTS_FROM_API()
      }
    }
  }
</script>

<style scoped>

</style>

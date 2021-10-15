<template>
  <div class="">
    <div class="container">
      <h1>This is an cart page</h1>
      <CartItemCart
      v-for="product in products"
      :key="product.id"
      :product="product"
      />
    </div>

  </div>
</template>

<script>
  import CartItemCart from "../components/cart/CartItemCart";
    export default {
        name: "Cart",
      components:{
          CartItemCart
      },
      computed:{
          products(){
            return this.$store.getters.cartItems
          }
      }
    }
</script>

<style scoped>

</style>

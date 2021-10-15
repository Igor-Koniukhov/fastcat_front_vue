<template>
<div class="cart-item">
  <h3>Cart Total: ${{ cart_total.toFixed(2) }}</h3>
  <button class="view-product-button">Pay</button>
</div>
</template>

<script>
    export default {
        name: "PaymentCartSummary",
      props: ['products'],
      computed: {
          cart_total(){
            return this.$store.getters.cartTotal
          }
      }
    }
</script>

<style scoped>

</style>

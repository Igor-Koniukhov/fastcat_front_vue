<template>
  <div class="cart-item">
    <div class="header">
      <h3>{{ product.name}}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost.toFixed(2)}}</h4>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CartItemCart",
      props: ['product'],
      computed:{
          item_cost(){
            return this.product.price * this.product.quantity
          }
      }
    }
</script>

<style scoped>

</style>

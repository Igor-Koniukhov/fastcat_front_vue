<template>
  <div class="cart-item">
    <div class="header">
      <h3>{{ product.name}}</h3>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CartItemCart",
      props: ['product']
    }
</script>

<style scoped>

</style>

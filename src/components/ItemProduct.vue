<template>
  <div class="product">
    <div class="product__image">
      <h3 class=" icon-title text-center">{{product.name}}</h3>
      <div class="ingredients-title">
        <p><span class="product-price__current">{{product.price}}</span><span>$</span></p>
        <p><span class="product-id" hidden>{{product.id}}</span><span></span></p>
        <p><span class="supplier-id" hidden>{{product.suppliers_id}}</span><span></span></p>
        <span class="product__term">type:{{product.type}}:</span>
        <p class="ingredients">
          <ingredients v-for="( ingredient, index) in product.ingredients" :ingredient="ingredient"
                       :key="index"></ingredients>
        </p>
      </div>
      <div class="product__switch image-switch">
        <div class="image-switch__item items-cover background-img" :style="`background-image:url(`+product.image+`)`">
        </div>
      </div>
    </div>
    <button class="view-product-button" @click="$emit('view-product', product)">Add</button>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Ingredients from './Ingredients'

  export default {
    name: 'ItemProduct',
    components: {
      Ingredients
    },
    props: {
      product: {
        type: Object,
        required: true,
        ingredients: {
          type: Array,
          required: true
        },
      },
    },
    methods: {
      ...mapActions('basket', ['addProduct']),
      logIng () {
        console.log(this.product.ingredients)
      }
    },
    mounted () {
      this.logIng()
    }
  }
</script>

<style lang="scss">
  .view-product-button {
    background-color: #ffc107;
    margin: 1px;
    border: unset;
    padding: 6px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .3);

    &:hover {
      background-color: #b98d09;
      color: #fff;
    }

    &:active {
      box-shadow: -1px 1px 1px rgba(0, 0, 0, .3);
    }
  }
</style>

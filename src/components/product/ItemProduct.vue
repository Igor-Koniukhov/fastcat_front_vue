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
          <ingredients
            v-for="( ingredient, index) in product.ingredients"
            :ingredient="ingredient"
            :key="index"/>

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

<script>/* eslint-disable */
  import Ingredients from "./Ingredients";
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
  }
</script>

<style lang="scss">
  .image-switch {
    left: 0;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .content {
    padding: 90px 0;
  }
  .product__image {
    position: relative;
    height: 240px;
  }
  .product{
    display: flex;
    flex-direction: column;
    padding: 1px;
    justify-content: center;
    border-radius: 5px;
  }
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


  .background-img {
    width: 100%;
    content: '';
    background-position: center;
    position: absolute;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .items-cover {
    position: relative;
  }

  .items-cover:before {
    background-image: url(/../../img/covers/deep_space.jpg);
    display: block;
    content: '';
    opacity: .4;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .icon-title {
    position: absolute;
    display: block;
    padding-top: 14px;
    width: 100%;
    color: #ffc107;
    font-size: 21px;
    font-weight: bold;
    z-index: 24;
    text-decoration: underline red;
  }

  .ingredients-title {
    position: absolute;
    display: block;
    bottom: 0;
    width: 100%;
    min-height: 50px;
    color: #ffffff;
    font-size: 16px;
    padding: 0 0 7px 14px;
    z-index: 24;
  }

</style>

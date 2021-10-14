<template>
  <div>
    <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')"></div>

    <div class="drawer" :class='{show:active}'>
      <div class="drawer-close" @click="$emit('close-product-drawer')">
        x
      </div>

      <div v-if="product" class="product-details">
        <div class="details-container">
          <h3 class="in-cart-title">In Cart</h3>
          <div class="product-info-container row">
            <img class="img-product-in-cart col" :src=" product.image" :alt="product.name + product.type">
            <div class="col">
              <h4 class="product-name-in-cart col">{{ product.name }}</h4>
              <div class="ingredients-in-cart">
                <ingredients v-for="( ingredient, index) in product.ingredients" :ingredient="ingredient"
                             :key="index"></ingredients>
              </div>
            </div>
          </div>
          <div class="price-container row">
            <div class="price-in-cart col"><b>Price:</b>{{product.price.toFixed(2)}}</div>
            <div class="amount-in-cart col"><b>Total:</b>{{product_total}}</div>
          </div>
          <div class="button-container row">
            <button class="remove button-in-cart col">Remove</button>
            <button class="add button-in-cart col">Add</button>
          </div>
          <p class="description">{{ product.description}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Ingredients from './Ingredients'

  export default {
    components: { Ingredients },
    props: ['product', 'active'],
    computed: {
      product_total () {
        return 56.00
      }
    }
  }
</script>

<style lang="scss">
  .drawer-background {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(124, 124, 124, 0.55);
    z-index: 100;
    display: none;
    transition: display .5s;
    &.show {
      display: block;
    }
  }
.in-cart-title{
  text-align: center;
}
  .drawer {
    width: 95vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    right: -105vw;
    padding: 15px;
    transition: right .5s;
    z-index: 101;
    overflow-y: scroll;
    &.show {
      right: 0;
    }
  }

  .drawer-close {
    background-color: #b98d09;
    font-size: 1.6rem;
    line-height: 100%;
    border-radius: 5px;
    color: white;
    width: 1.6rem;
    cursor: pointer;
    box-shadow: -2px 2px 2px rgba(0,0,0,.3);
    &:hover {
      color:#ffc107;
      background-color: #d52e27;
    }
    &:active{
      box-shadow: -1px 1px 1px rgba(0,0,0,.3);
    }
  }


  .product-details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    p.description {
      padding: 20px;
      line-height: 1.5rem;
    }

    .product-name-in-cart {
      display: flex;
      justify-content: center;
    }

    .button-container {
      justify-content: space-between;
      button {
        max-width: 150px;
        width: 100%;
        border: none;
        padding: 10px;
        border-radius: 5px;
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
  .button-in-cart{
    background-color: #b98d09;
    box-shadow: -2px 2px 2px rgba(0,0,0,.3);
    color: white;
    &:hover{
      background-color: #ffc107;
      color: #333;
      &:active{
        box-shadow: -1px 1px 1px rgba(0,0,0,.3);
      }
    }
  }
  .details-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;

    .ingredients-in-cart {
      text-align: left;
    }
    .price-container{
      justify-content: space-between;
      margin-bottom: 10px;
      .price-in-cart{
        max-width: 150px;
        width: 100%;
        text-align: left;
      }
      .amount-in-cart{
        max-width: 150px;
        width: 100%;
        text-align: right;
      }
    }
    .product-info-container{
      justify-content: space-around;
      margin-bottom: 10px;
      flex-direction: column;
    }
  }

  .img-product-in-cart {
    max-width: 280px;
    margin: 0 auto;
    width: 100%;
    display: block;
  }

  @media (min-width: 500px) {
    .drawer {
      max-width: 400px;
      width: 100%;
    }

  }


</style>

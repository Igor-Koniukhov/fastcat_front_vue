<template>
  <div class='f-cart-item'>
    <img class="f-cart-item__image" :src="( cart_item_data.image) " alt="">
    <div class="f-cart-item__info">
      <h4 class=" custom-h4">{{cart_item_data.name}}</h4>
      <p>{{cart_item_data.price | toFix | formattedPrice}}</p>
      <p>{{cart_item_data.type}}</p>
    </div>
    <div class="f-cart-item__quantity">
      <p class="dancing-sm quantity">Quantity:</p>
      <span class="quantity__tools">
        <button class="quantity__btn btn-sm" @click="decrementItem">-</button>
        {{cart_item_data.quantity}}
        <button class="quantity__btn btn-sm" @click="incrementItem">+</button>
      </span>
    </div>
    <button class="btn btn-sm btn-cart-del" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from "../../filters/price-format";


  export default {
    name: "f-cart-item",
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      toFix,
      formattedPrice
    },
    computed: {},
    methods: {
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    }
  }

</script>

<style lang="scss">
  .f-cart-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      max-width: 80px;
    }

    .quantity__btn {
      cursor: pointer;
      border: none;
      padding: 2px;
      width: 25px;
      border-radius: 50%;
      box-shadow: 2px 2px 3px rgba(0,0,0, .4) ;
      &:active{
        box-shadow: 1px 1px 1px rgba(0,0,0, .4)
      }
    }
    .quantity{
      font-size: 18px;
    }
    .btn-cart-del{
      box-shadow: 2px 2px 3px rgba(0,0,0, .4) ;
      &:active{
        box-shadow: 1px 1px 1px rgba(0,0,0, .4)
      }
    }
    .quantity__tools {
      user-select: none;
    }
  }
  .custom-h4{
    font-size: 17px;
    font-family: 'Dancing Script', cursive;
  }
</style>

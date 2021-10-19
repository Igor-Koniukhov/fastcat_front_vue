<template>
  <div class='f-catalog'>

    <f-notification
        :messages="messages"
    />

    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="f-catalog__link_to_cart cart"><span class="cart-counter">{{CART.length}}</span></div>
    </router-link>
    <h1 class="dancing"><span style="color:red">Fast</span><span style="clolor:#333">Cat</span></h1>
    <h2 class="dancing-sm">Catalog</h2>
    <div class="filters">
      <f-select
          :selected="selected"
          :options="type"
          @select="sortByCategories"
      />

    </div>
    <div class="f-catalog__list">
      <f-catalog-item
          v-for="product in filteredProducts"
          :key="product.id"
          :product_data="product"
          @addToCart="addToCart"
          @productClick="productClick"
      />
    </div>
  </div>
</template>

<script>
  import fCatalogItem from './f-catalog-item'
  import {mapActions, mapGetters} from 'vuex'
  import fSelect from '../f-select'
  import fNotification from '../notifications/f-notification'

  export default {
    name: "f-catalog",
    components: {
      fCatalogItem,
      fSelect,
      fNotification
    },
    props: {},
    data() {
      return {
        type: [
          {name: 'Select by type', value: 'All'},
          {name: 'pizza', value: 'pizza'},
          {name: 'burger', value: 'burger'},
          {name: 'sushi', value: 'sushi'},
          {name: 'frozen_meal', value: 'frozen_meal'},
        ],
        selected: 'Select by type',
        sortedProducts: [],
        minPrice: 0,
        maxPrice: 100,
        messages: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'IS_MOBILE',
        'IS_DESKTOP',
        'SEARCH_VALUE'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      productClick(type) {
        this.$router.push( {name: 'product', query: { 'product': type }})
      },

      sortByCategories(category) {
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS]
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.price >= vm.minPrice && item.price <= vm.maxPrice
        })
        if (category) {
          this.sortedProducts = this.sortedProducts.filter(function (e) {
            vm.selected === category.name;
            return e.type === category.name
          })
        }
      },
      addToCart(data) {
        this.ADD_TO_CART(data)
          .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
              {name: 'Товар добавлен в корзину', icon: 'check_circle', id: timeStamp}
            )
          })
      },
      sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS;
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
    }
  }
</script>

<style lang="scss">
  .f-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      margin-top:20px;
    }

    &__link_to_cart {
      position: fixed;
      top: 30px;
      right: 10px;
      padding: $padding*2;
      z-index: 350;
    }
  }
  .cart-counter{
    background-color: #fff;
    color: #333;
    width: 19px;
    padding: 1px;
    border-radius: 50px;
    position: absolute;
    font-size: 12px;
    top: -9px;
    left: 4px;


  }
  .cart:before {
    display: block;
    content: "";
    position: absolute;
    background-image: url(../../assets/images/trolley.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
  }
  .filters {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }

  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>

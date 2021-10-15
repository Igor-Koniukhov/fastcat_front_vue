<template>
  <div class="products">
    <ProductDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="productDrawerClose()"/>

    <div class="main-wrapper-content">
      <section class="first-section restaurant-list">
        <div class="content">
          <div class="container">
            <div class="row" id="input">

              <item-product
                class=" col-lg-4 col-md-6"
                v-for="product in products"
                :product="product"
                :key="product.id"
                v-on:view-product="viewProduct($event)"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>/* eslint-disable */
import ItemProduct from '../components/product/ItemProduct'
import ProductDrawer from '../components/product/ProductDrawer'

export default {
  name: 'Products',
  components: {ItemProduct, ProductDrawer},
  data() {
    return {
      products: {
        type: Array,
        required: true
      },
      product: null,
      active: {
        product_drawer: false
      },
    }
  },
  methods: {
    generateItems() {
      fetch('http://localhost:8090/products-json')
        .then((resp) => resp.json())
        .then((data) => {
          this.products = data
        })
    },
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
    },
    productDrawerClose() {
      this.active.product_drawer = false
    }

  },
  created() {
    this.generateItems()
  }

}


</script>

<style scoped>

</style>

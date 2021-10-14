<template>
  <div class="products">
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
<script>
  import ItemProduct from '../components/ItemProduct'

  export default {
    name: 'Products',
    components: { ItemProduct },
    props: {
      products: {
        type: Array,
        required: true
      },
      product: null,
    },
    methods: {
      generateItems () {
        fetch('http://localhost:8090/products-json')
          .then((resp) => resp.json())
          .then((data) => {
            this.products = data
          })
      },
      viewProduct(product){
        this.product = product
        console.log(this.product)
      }

    },
    created () {
      this.generateItems()
    }

  }


</script>

<style scoped>

</style>

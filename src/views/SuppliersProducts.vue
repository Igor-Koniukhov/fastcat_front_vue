<template>
  <div class="suppliers-products">
    <ProductDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="productDrawerClose()"/>
    <div class="row">
      <ItemProduct
        class="col-lg-4 col-md-6"
        v-for="product in suppliersProducts.Items"
        :product="product"
        :key="product.id"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>

</template>

<script>
  import ItemProduct from "../components/product/ItemProduct";
  import ProductDrawer from "../components/product/ProductDrawer";
let url = 'http://localhost:8090/suppliers-products/';
  export default {
    name: "SuppliersProducts",
    components: {ItemProduct,ProductDrawer},
    data() {
      return {
        suppliersProducts: {
          Supplier: Object,
          Items: Object,
        },
        product: null,
        active: {
          product_drawer: false
        },
        id: Number
      }
    },
    methods: {
      getSuppliersId() {
        this.id = window.location.href.split("=")[1]
      },
      generateSuppliersProducts() {
        fetch(url+this.id)
          .then((resp) => resp.json())
          .then((data) => {
            this.suppliersProducts = data
            console.log(this.suppliersProducts.Items)

          })
      },
    },
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
    },
    productDrawerClose() {
      this.active.product_drawer = false
    },
    created() {
      this.getSuppliersId()
      this.generateSuppliersProducts()

    }
  }
</script>

<style scoped>

</style>

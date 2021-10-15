<template>
  <div class="supplier">
    <div class=" suppliers-icons items-cover background-img m-auto">
      <form  action="/suppliers-products">
        <input type="text" :value="supplier.id" hidden id="supplier_id" name="supplier_id">
        <button  class="btn-icon-wrapper" ></button>
        <div class=" text-center">
          <div class="icon-title icon-title_suppliers text-center">
            <h3 style="color: #ffffff">{{supplier.name}}</h3>
            <p><b>{{supplier.type}}</b></p>
          </div>
          <div class=" suppliers-img "
               :style="`background-image:url(`+supplier.image +`)`">
            <div class=" restaurant-icon restaurant-icon_square">
              <img :src= "supplier.image" :alt= "supplier.name"  style="display: none;">
            </div>
          </div>
          <div class="bottom-title">
            <p>Opens: {{supplier.WorkingHours.opening}} Closes: {{supplier.WorkingHours.closing}}</p>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Suppliers",
    props: {
      supplier:{
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>

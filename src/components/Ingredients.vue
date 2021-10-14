<template>
    <span class="ingredient">
        {{ingredient}},
    </span>
</template>

<script>
    export default {
        name: "Ingredietns",
      props:{
        ingredient: String,
      },
      methods:{
          dataIng(){
            console.log(this.ingredient, "this is ingr-ts")
          }
      },
      mounted() {
          this.dataIng()
      }
    }
</script>

<style scoped>

</style>

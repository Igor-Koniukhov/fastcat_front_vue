<template>
  <div class="f-main-wrapper">
    <f-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import fHeader from './layouts/f-header'

  export default {
    name: 'f-main-wrapper',
    components: {
      fHeader
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<style>
  .f-main-wrapper {
    padding: 1px;
    margin: 0 auto;
  }
</style>

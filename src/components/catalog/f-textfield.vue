<template>
  <div class='f-textfield'>
    <label>{{label}}
      <input type="text"
             :value="value"
             @input="input"
      >
    </label>
  </div>
</template>

<script>
  export default {
    name: "f-textfield",
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      input(e) {
        let value = e.target.value;
        this.$emit('input', value)
      }
    }
  }
</script>

<style >

</style>

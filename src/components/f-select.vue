<template>
  <div class='f-select'>
    <p
        class="title"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
        class="options"
        v-if="areOptionsVisible || isExpanded"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "f-select",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      },
      isExpanded: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        areOptionsVisible: false
      }
    },
    methods: {
      selectOption(option) {
        this.$emit('select', option)
        this.areOptionsVisible = false;
      },
      hideSelect() {
        this.areOptionsVisible = false;
      }

    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style>
  .f-select {
    position: relative;

    cursor: pointer;
    text-align: left;
    z-index: 50;
    max-width: 200px;
    width: 100%;
    line-height: unset;
    font-size: 14px;
    font-style: italic;
    letter-spacing: 1px;
    opacity: 0.9;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .title {
    border: solid 1px #aeaeae;
    padding: 8px;
  }
  .f-select p {
    margin: 0;
  }

  .options {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    padding: 5px;
  }

  .options p:hover {
    background: #e7e7e7;
  }
</style>

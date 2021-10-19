<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class='f-popup'>
      <div class="f-popup__header">
        <span>{{popupTitle}}</span>
        <span>
        <i
            class="material-icons close-cross"
            @click="closePopup"
        >
          close
        </i>
      </span>
      </div>
      <div class="f-popup__content">
        <slot></slot>
      </div>
      <div class="f-popup__footer">
        <button class="close_modal" @click="closePopup">Close</button>
        <button
            class="submit_btn"
            @click="rightBtnAction"
        >
          {{rightBtnTitle}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "f-popup",
    props: {
      popupTitle: {
        type: String,
        default: 'Popup name'
      },
      rightBtnTitle: {
        type: String,
        default: 'Ok'
      }
    },
    data() {
      return {}
    },
    methods: {
      rightBtnAction() {
        this.$emit('rightBtnAction')
      },
      closePopup() {
        this.$emit('closePopup')
      }
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closePopup()
        }
      })
    },
  }
</script>

<style lang="scss">
  .popup_wrapper {
    background: rgba(64,64,64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
  }
  .f-popup {
    padding: 16px;
    position: fixed;
    top: 30%;
    max-width: 500px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit_btn {
      padding: 4px;
      color: #ffffff;
      background: #ffc107;
      border: none;
      border-radius: 5px;
      box-shadow: 2px 2px 3px rgba(0,0,0,.4);
      &:active{
        box-shadow: 1px 1px 2px rgba(0,0,0,.4);
      }
    }
    .close_modal {
      padding: 4px;
      color: #ffffff;
      background: blue;
      border: none;
      border-radius: 5px;
      box-shadow: 2px 2px 3px rgba(0,0,0,.4);
      &:active{
        box-shadow: 1px 1px 2px rgba(0,0,0,.4);
      }
    }
  }
  .close-cross{
    z-index: 1000;
    border: 1px solid #ffc107;
    border-radius: 50%;
    background-color: #ffc107;
    box-shadow: 2px 2px 3px rgba(0,0,0,.4);
    &:hover{
      cursor: pointer;
    }
    &:active{
      box-shadow: 1px 1px 2px rgba(0,0,0,.4);
    }
  }
</style>

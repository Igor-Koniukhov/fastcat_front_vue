<template>
  <div class='f-notification'>
    <transition-group
        name="f-transition-animate"
        class="messages_list"
    >
      <div
          class="f-notification__content"
          v-for="message in messages"
          :key="message.id"
          :class="message.icon"
      >
        <div class="content__text">
          <span>{{message.name}}</span>
          <i class="material-icons">{{message.icon}}</i>
        </div>
        <div class="content_buttons">
          <button v-if="rightButton.length">{{rightButton}}</button>
          <button v-if="leftButton.length">{{leftButton}}</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "f-notification",
    props: {
      messages: {
        type: Array,
        default: () => {
          return []
        }
      },
      rightButton: {
        type: String,
        default: ''
      },
      leftButton: {
        type: String,
        default: ''
      },
      timeout: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {}
    },
    methods: {
      hideNotification() {
        let vm = this;
        if (this.messages.length) {
          setTimeout(function () {
            vm.messages.splice(vm.messages.length - 1, 1)
          }, vm.timeout)
        }
      }
    },
    watch: {
      messages() {
        this.hideNotification()
      }
    },
    mounted() {
      this.hideNotification()
    }
  }
</script>

<style lang="scss">
  .f-notification {
    position: fixed;
    top: 80px;
    right: 16px;
    z-index: 360;
    &__messages_list {
      display: flex;
      flex-direction: column-reverse;
    }
    &__content {
      padding: 16px;
      border-radius: 4px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin-bottom: 16px;
      background: #ffc107;
      &.error {
        background: red;
      }
      &.warning {
        background: orange;
      }
      &.check_circle {
        position: relative;
        background: #ffc107;
        &:before{
          background-color: rgba(0,0,0,.3);
          position: absolute;
          display: block;
          content: '';
          background-repeat: no-repeat;
          background-size: cover;
          top:0;
          bottom:0;
          left: 0;
          right: 0;
          border-radius: 4px;


        }
      }
    }
    .content {
      &__text {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .material-icons {
      margin-left: 16px;
    }
  }

  .v-transition-animate {
    &-enter {
      transform: translateX(120px);
      opacity: 0;
    }
    &-enter-active {
      transition: all .6s ease;
    }
    &-enter-to {
      opacity: 1;
    }

    &-leave {
      height: 50px;
      opacity: 1;
    }
    &-leave-active {
      transition: transform .6s ease, opacity .6s, height .6s .2s;
    }
    &-leave-to {
      height: 0;
      transform: translateX(120px);
      opacity: 0;
    }

    &-move {
      transition: transform .6s ease;
    }

  }
</style>

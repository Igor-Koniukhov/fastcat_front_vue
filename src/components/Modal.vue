<template>
<div class="modal">
  <div class="modals">
    <div class="modal-custom">
      <button class="mod-btn"></button>
      <button class="mobile-close" data-swipe-threshold="20" data-swipe-timeout="500"
              data-swipe-ignore="false"></button>
      <form class="modal__form form">
        <label for="email_login">Email:</label>
        <input type="email" class="form__input" id="email_login" name="email_login"
               placeholder="your@email.com">
        <label for="pass_login">Password</label>
        <input type="tel" class="form__input" id="pass_login" name="pass_login" placeholder="password">
        <button class="form__btn button-custom">Log-in</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>

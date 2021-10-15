<template>
  <div id="app">
    <headers></headers>

    <router-view/>

  </div>
</template>
<script>
  import ButtonUpp from "./components/ButtonUpp";

  export default {
    components: {
      ButtonUpp
    },
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: red;
      }
    }

    :root {
      --color-dark: #4d4d4d;
      --color-light: #808080;
      --color-accent: #5d71dd;
      --color-yellow: #ffc107;
      --gutter: 20px;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      vertical-align: top;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    body {
      margin: 0;
      font-family: 'Noto Sans', sans-serif;
      font-weight: 400;
      overflow-anchor: none;
    }

    ul {
      list-style-type: none;
    }

    .product__btn,
    .order__btn,
    .cart-content__btn {
      border: none;
      padding: 14px 0;
      border-radius: 4px;
      width: 100%;
      color: #fff;
      background-color: var(--color-yellow);
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }

    .btn:hover {
      background-color: #6078f1;
      transition: background-color 0.3s ease-in-out;
    }

    .btn:disabled {
      opacity: 0.4;
      pointer-events: none;
    }


    .header {
      position: relative;
      z-index: 100;
      background-color: #fff;
      box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .nav__list {
      display: flex;
      align-items: center;
    }

    .nav__item:not(:last-child) {
      margin-right: 61px;
    }

    .nav__link {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: right;
      color: var(--color-dark);
    }

  }

  :root {
    --color-dark: #4d4d4d;
    --color-light: #808080;
    --color-accent: #5d71dd;
    --gutter: 20px;
    --yellow: rgba(255, 193, 7, 0.9);
    --red: rgba(255, 0, 0, 0.9);
    --red-light: rgba(255, 0, 0, 0.7);
    --white-text: #ffffff;
    --button-shadow: rgba(0, 0, 0, .7) 2px 2px 2px;

  }

  .col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12,
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12,
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12,
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .co-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg11, .col-lg-12,
  .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {
    padding: unset;
  }

  p {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #333333;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    font-family: 'Roboto Light', sans-serif;
    font-weight: 200;

  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body, html {
    height: 100%;

  }

  .dancing {
    font-family: 'Dancing Script', cursive;
    font-size: 100px;
  }

  .dancing-sm {
    font-family: 'Dancing Script', cursive;
    font-size: 50px;
  }

  .dancing-sm {
    font-family: 'Dancing Script', cursive;
    font-size: 40px;
  }

  .main-wrapper-content {
    height: 100%;
  }

  .logo-cat {
    width: 50px;
    height: 50px;
    opacity: 0.9;
  }

  .wrapper-footer {
    background-color: #333;
    color: #fff;
    padding-top: 20px;
    border: none;

  }

  .wrapper-footer li {
    margin-bottom: 20px;
  }

  .wrapper-footer li a {
    color: #e4e4e4;
    text-align: left;


  }

  .footer-low-writing {
    width: 100%;
    text-align: center;
    font-size: 11px;
    opacity: 0.7;
    letter-spacing: 2px;
    padding-bottom: 15px;
  }

  .burger-go-background {
    position: relative;
    z-index: 2;
  }

  .burger-go-background:before {
    background-image: url(/../../img/burger-go.png);
    background-position: center;
    background-size: contain;
    content: "";
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    right: 0;
    bottom: -24px;
    z-index: -2;
  }

  .cat-on-delivery {
    display: block;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }

  .direction-col {
    position: relative;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    max-width: 150px;
    width: 100%;
    margin-bottom: 30px;
  }

  .restaurant-icon {
    border-radius: 50%;

  }

  .restaurant-icon_square {
    margin: auto 0;
    border-radius: 5px;
  }

  .wrapper-content {
    position: relative;
    width: 100%;
  }

  .wrapper-content-yellow {
    background-color: var(--yellow);
  }

  .btn-custom {
    max-width: 35px;
    width: 100%;
    margin: 1px;
    padding: 0 12px;
  }

  .header-fixed {
    width: 100%;
    position: fixed;
    display: block;
    top: 0;
    z-index: 50;
  }

  .margin-bottom-hidden {
    padding-bottom: 15px;
    margin-bottom: -40px;
  }

  .form-control-custom-search {
    max-width: 200px;
    width: 100%;
    padding: 0 15px;
    line-height: unset;
    font-size: 14px;
    font-style: italic;
    letter-spacing: 1px;
    opacity: 0.7;

  }

  .btn:hover {
    background-color: #6078f1;
    transition: background-color 0.3s ease-in-out;
  }

  .btn:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  .btn.custom-search {
    border: unset;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    padding: 2px 2px;

  }

  .btn.custom-search:hover {
    opacity: .7;

  }

  .bottom-title {
    position: absolute;
    display: block;
    bottom: 0;
    width: 100%;
    color: #ffffff;
    z-index: 24;
  }

  .suppliers-icons {
    position: relative;
    max-width: 320px;
    height: 320px;
    width: 100%;
    background-color: var(--color-yellow);
    padding: unset;
  }

  .icon-title.icon-title_suppliers {
    padding-top: 14px;
    width: 100%;
    color: #ffffff;
    font-size: 21px;
    font-weight: bold;
    text-decoration: unset;
  }

  .suppliers-img {
    width: 100%;
    background-position: center;
    position: absolute;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .btn-icon-wrapper {
    position: absolute;
    border: 1px solid red;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 30;
    opacity: 0;
  }

  .all-items-inline {
    display: flex;
    justify-content: center;
    align-items: self-end;
  }

  .btn-in-line {
    border: none;
    width: 100%;
    padding: 10px;
    display: block;
    background-color: var(--color-yellow);
    text-align: center;
    justify-content: center;
  }

  .frame {
    border: 1px solid rgba(0, 0, 0, .2);
    width: 100%;
    display: flex;
    border-radius: 5px;
  }

  .schedule {
    background-color: #14141f1f;
    text-align: center;

  }

  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 235, 59, .9);
    opacity: .2;
    position: fixed;
    top: 0;
    z-index: 100;
    transition: 0.6s;

  }

  .hidden_field {
    background-color: rgba(255, 235, 59, .1);
  }

  .spiner {
    width: 77px;
    height: 77px;
    border: 7px solid rgba(156, 39, 176, 0.9);
    border-radius: 50%;
    border-left-color: #ff0000;
    animation: spiner 1.3s linear infinite;
    background: radial-gradient(circle, rgba(251, 97, 63, 1) 0%, rgba(239, 252, 70, 1) 100%);
  }


  .roll-up {
    display: none;
    position: fixed;
    right: 20px;
    top: 75vh;
    z-index: 50;
    width: 40px;
    height: 80px;
  }
  .roll-up-button {
    width: 40px;
    height: 80px;
    opacity: 0.9;
  }

  .roll-up:hover {
    cursor: pointer;
  }

  @keyframes spiner {
    100% {
      transform: rotate(360deg);
    }
  }

  .suppliers{
    margin: 0 auto;
    display: flex;
    max-width: 320px;
    flex-direction: column;
    padding: 1px;
    justify-content: center;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, .3);
    border-radius: 5px;
  }


</style>

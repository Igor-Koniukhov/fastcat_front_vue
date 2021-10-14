<template>
  <div id="app">
    <headers></headers>

    <router-view/>

  </div>
</template>

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

    /* Global */
    html {
      box-sizing: border-box;
    }

    * {

      padding: 0;
      margin: 0;
      box-sizing: border-box;
      vertical-align: top;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    h1,
    h2,
    h3,
    p,
    ul {
      margin: 0;
      padding: 0;
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
</style>

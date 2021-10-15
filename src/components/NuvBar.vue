<template>
<div class="nuv-bar">
  <nav id="nav" class="navbar navbar-expand-md navbar-light bg-yellow-custom">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img class="logo-cat" src="img/fast-cat.png"
                                            alt="fast cat - symbol of fast catering"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                         data-bs-toggle="dropdown" aria-expanded="false">
              Get started
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item log-in" to="/products">Products</router-link></li>
              <li><router-link class="dropdown-item log-in" to="/cart">Cart</router-link></li>
              <li><router-link class="dropdown-item log-in" to="#">Log In</router-link></li>
              <li><router-link class="dropdown-item" to="/registration">Sing Up</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacts">Contacts</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2 form-control-custom-search" type="search" placeholder="Search"
                 aria-label="Search">
          <button class="btn btn-outline-success custom-search" type="submit">
            🔎
          </button>
        </form>
      </div>
      <div class="header__cart cart">
        <router-link class="dropdown-item  cart__text navbar-brand" to="/cart">
          <span class="cart__quantity" id="cart-quantity">0</span></router-link>

      </div>
    </div>
  </nav>
</div>
</template>

<script>
    export default {
        name: "NuvBar"
    }
</script>

<style scoped>
  .navbar-nav{
    max-width: 400px;
    width: 100%;
    justify-content: space-around;

  }

  .cart {
    position: relative;
    width: 40px;
    height: 40px;
    padding: 40px 19px;
    transition: background-color 0.3s;
    z-index: 100;
  }
  .cart__quantity {
    position: absolute;
    right: 14px;
    top: 10px;
    transform: translateY(-50%);
    min-width: 16px;
    background-color: #ffffff;
    border-radius: 100%;
    padding: 0;
    color: var(--color-dark);
    font-size: 12px;
    z-index: 5;
  }
  .cart:before {
    display: block;
    content: "";
    position: absolute;
    background-image: url(/../../img/trolley.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
  }
  .bg-yellow-custom {
    background-color: #ffc107;
  }

</style>

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
      <div class="header__cart cart" tabindex="0">
        <div class="cart__text navbar-brand"><span class="cart__quantity">0</span>
        </div>

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

</style>

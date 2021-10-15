<template>
  <div class="headers">
  <header class="first-header">
    <div class=""></div>
    <div class="section-decoration section-decoration-120"
         style="background-image: url(../../public/img/section-decor/divider1_desktop.svg);">
      <h1 class="text-center dancing go-in-rocket"><span style="color: #ff0000;">Fast</span><span
        style="color: #333">Cat</span>
      </h1></div>
  </header>
  <header class="header-support"></header>
  <header class="second-header ">
   <nuv-bar></nuv-bar>
  </header>
  <header>
    <div class="section-decoration section-decoration-50 "
         style="background-image: url(../../public/img/section-decor/header-wave2.svg);">
    </div>
  </header>
  </div>
</template>

<script>
    export default {
        name: "Headers"
    }
</script>

<style scoped>
  .section-decoration {
    display: block;
    width: 100%;
    margin-bottom: -5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .section-decoration-120 {
    height: 120px;
    /*margin-top: -5px;*/

  }

  .section-decoration-50 {
    height: 50px;
    /*margin-top: -5px;*/

  }
  .underline-word {
    position: relative;
  }

  .underline-word:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    background-color: var(--red);
    height: 1px;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;

  }
  .go-in-rocket:before {
    background-image: url(/../../img/go-in-rocket.png);
    background-position: center;
    background-size: contain;
    content: "";
    display: block;
    position: absolute;
    width: 130px;
    height: 65px;
    background-repeat: no-repeat;
    right: 270px;
    top: 0px;
    z-index: -1;

  }


  .header-support {
    display: none;
    background-color: red;
  }

</style>

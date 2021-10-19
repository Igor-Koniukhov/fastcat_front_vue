<template>
  <div id="app">
    <f-main-wrapper />
    <div class="field">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
  import fMainWrapper from './components/f-main-wrapper'
  import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    fMainWrapper
  },
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),
  },
  mounted() {
    let vm = this;
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP()
        console.log('Desktop',vm.IS_DESKTOP)
      } else {
        vm.SET_MOBILE()
        console.log('Mobile',vm.IS_MOBILE)
      }
    })
    let field = document.querySelector('.field')
    window.addEventListener('load', () =>{
      field.classList.add('hidden_field');
      setTimeout(()=> {
        field.remove();
      }, 1000);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}

.burger-go-background {
  position: relative;
  z-index: 2;
}

.burger-go-background:before {
  background-image: url(/../src/assets/images/burger-go.png);
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
</style>

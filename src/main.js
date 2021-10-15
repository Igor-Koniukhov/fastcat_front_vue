import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin, LayoutPlugin, ModalPlugin, CardPlugin, DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import Headers from "./components/Headers";
import NuvBar from "./components/NuvBar";
import ProductDrawer from "./components/product/ProductDrawer";
import ItemProduct from "./components/product/ItemProduct";
import store from './store'
Vue.component('headers', Headers).default
Vue.component('nuv-bar', NuvBar).default
Vue.component('product-drawer', ProductDrawer).default
Vue.component('item-product', ItemProduct).default

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

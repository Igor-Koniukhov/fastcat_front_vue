import Vue from 'vue'
import { BootstrapVue, LayoutPlugin,  DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/styles.scss'
import 'material-design-icons-iconfont'
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

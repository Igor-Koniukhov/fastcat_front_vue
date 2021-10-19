import Vue from 'vue'
import Router from 'vue-router'

import fCatalog from '../components/catalog/f-catalog'
import fCart from '../components/cart/f-cart'
import fMainPage from '../components/main-page/f-main-page'
import fProductPage from '../components/catalog/f-product-page'
import fAbout from '../components/general-pages/f-about'
import fContacts from '../components/general-pages/f-contacts'
import fRegistration from '../components/general-pages/f-registration'
import fLogin from '../components/general-pages/f-login'
import fProfile from '../components/general-pages/f-profile'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: fMainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: fCatalog
    },
    {
      path: '/product',
      name: 'product',
      component: fProductPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: fCart,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: fAbout,
      props: true
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: fContacts,
      props: true
    },
    {
      path: '/registration',
      name: 'registration',
      component: fRegistration,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: fLogin,
      props: true
    },
    {
      path: '/profile',
      name: 'profile',
      component: fProfile,
      props: true
    }
  ]
})

export default router;

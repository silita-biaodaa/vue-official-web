import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import productBig from '@/pages/productBig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/productBig',
      name: productBig,
      component: productBig
    },
  ]
})

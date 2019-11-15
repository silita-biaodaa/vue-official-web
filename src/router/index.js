import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import productBig from '@/pages/productBig'
import dataService from '@/pages/dataService'
import smallOrder from '@/pages/smallOrder'
import building from '@/pages/building'
import advice from '@/pages/advice'
import appDevelop from '@/pages/appDevelop'
import webDevelop from '@/pages/webDevelop'
import weChatDevelop from '@/pages/weChatDevelop'
import appletDevelop from '@/pages/appletDevelop'
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
      name: "productBig",
      component: productBig
    },
    {
      path:'/dataService',
      name: "dataService",
      component: dataService
    },
    {
      path:'/smallOrder',
      name: "smallOrder",
      component: smallOrder
    },
    {
      path:'/building',
      name: "building",
      component: building
    },
    {
      path:'/advice',
      name: "advice",
      component: advice
    },
    {
      path:'/appDevelop',
      name: "appDevelop",
      component: appDevelop
    },
    {
      path:'/webDevelop',
      name: "webDevelop",
      component: webDevelop
    },
    {
      path:'/weChatDevelop',
      name: "weChatDevelop",
      component: weChatDevelop
    },
    {
      path:'/appletDevelop',
      name: "appletDevelop",
      component: appletDevelop
    }
  ]
})

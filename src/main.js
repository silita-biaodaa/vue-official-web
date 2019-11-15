// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible';
import 'lib-flexible';
import narBar from '../src/components/navBar.vue';
import publicInfo from '../src/components/publicInfo.vue';
import publicProduct from '../src/components/publicProduct.vue';
import publicTable from '../src/components/publicTable.vue';
import currentTab from '../src/components/currentTab.vue';
import topBar from '../src/components/topBar.vue';
import productInfo from '../src/components/productInfo.vue';
import barTitle from '../src/components/barTitle.vue';
//自定义组件
Vue.component('narBar', narBar);
Vue.component('publicProduct', publicProduct);
Vue.component('publicInfo', publicInfo);
Vue.component('publicTable', publicTable);
Vue.component('currentTab', currentTab);
Vue.component('topBar', topBar);
Vue.component('productInfo', productInfo);
Vue.component('barTitle', barTitle);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {routes} from './routes'
import store from './store/store'
Vue.filter('currency',(value)=>{
  return value.toLocaleString()+ '  $';
})
const router =new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

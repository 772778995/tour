// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import '@/assets/css/iconfont.css'
import 'swiper/swiper-bundle.css'
import fastClick from 'fastClick'


fastClick.attach(document.body)
Vue.prototype.$axios = axios
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

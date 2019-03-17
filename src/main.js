import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClikc from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/index.styl'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClikc.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

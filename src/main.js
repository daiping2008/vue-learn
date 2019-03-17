import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.styl'
import fastClikc from 'fastclick'

Vue.config.productionTip = false
fastClikc.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

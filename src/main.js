import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from "fastclick"
import '@/assets/reset.css'
import './assets/styles/border.css'
import rem from './assets/js/rem'
rem()
fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

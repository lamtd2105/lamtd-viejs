import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import i18n from './translations/index'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')

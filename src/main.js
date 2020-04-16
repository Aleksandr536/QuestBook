import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from "axios";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import dateFilter from "./filters/date.filter";

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.filter('date',dateFilter)
Vue.use(Buefy)

Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.prototype.$http = Axios.create({
  baseURL: 'http://diplomzayabackend:8080/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',

  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

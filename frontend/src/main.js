import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'

// https://juejin.im/post/5b3f0ab25188251aef4e3e38 send req to backend
var axiosInstance = axios.create({
  baseURL: location.protocol + '//127.0.0.1:8081/',
  transformRequest: function (data) {
    return Qs.stringify(data)
  },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

Vue.use(VueAxios, axiosInstance)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

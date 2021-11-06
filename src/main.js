import Vue from 'vue'
import App from './App.vue'
import './assets/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


new Vue({
  render: h => h(App),
  axios
}).$mount('#app')

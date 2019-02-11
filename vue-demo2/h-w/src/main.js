import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import './lib/hotcss/hotcss.js'
// import VeeValidate from '../node_modules/vee-validate/dist/vee-validate.esm.js';


Vue.config.productionTip = false
// Vue.use(VeeValidate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

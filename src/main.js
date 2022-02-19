import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/app.css'
import Notifications from 'vue-notification'
import 'animate.css';

Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  render: h => h(App),
}).$mount('#app')

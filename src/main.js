import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'vant/lib/index.css'
import './assets/iconfont.css'
import 'placeholder-loading/src/scss/placeholder-loading.scss'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(MuseUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

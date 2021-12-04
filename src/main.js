import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach(
  (to,from,next)=>{next();
    document.title=to.matched[0].meta.title}
)

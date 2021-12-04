import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./action";
import mutations from "./mutations";
import getters from "./getters";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义一个购物车数组
 cart:[]
  },
mutations,
 actions,
  getters,

  modules: {
  }
})

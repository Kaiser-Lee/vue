import Vue from 'vue'
import Vuex from 'vuex'
import loginInfo from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginInfo
  }
})

/**
 * @file 用户登录
 * @author lufangpu
 * @since 2018-098-17
 */
import Vue from 'vue'
// import { APIS } from 'configPort'
// import nativeApi from 'nativeApi'
import resource from 'vue-resource'

Vue.use(resource)

const state = {
  loginName: '开发中！'
}

const actions = {
  inintLoginInfo ({commit, state}, args) {
    return new Promise((resolve, reject) => {
      console.log(args)
      console.log(state)
      Vue.http(args).then(function (retData) {
        console.log(retData)
      })
    })
  }
}

export default {
  state,
  actions
}

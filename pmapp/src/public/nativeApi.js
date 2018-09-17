/**
 * @author lufangpu
 * @since 2018-09-17
 * @description 原生API
 * */
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
define(function (require, exports, module) {
  // let userList = [
  //   {
  //     'name': '0039260',
  //     'password': '123456'
  //   }
  // ]
  // let loginData = userList[0]
  // let APIS = require('./config.js').APIS
  let requestCount = 0
  // let showLoading = 0
  function managementAjax (option, noloading) {
    if (!option.url) {
      return
    }
    option.type = option.type || 'post'
    let param = option.param
    let arr = []
    // let flag = option.url.indexof('.json') === (option.url.length - 5)
    option.type = option.type.toLowerCase()
    if (option.type === 'get') {
      if (param) {
        for (var key in param) {
          arr.push(key + '=' + param[key])
        }
      }
      param = arr.join('&')
      // 转义
    }
    // showLoading++
    requestCount++
    let funcName = 'requestFinish' + requestCount
    let errorName = 'requestFinish' + requestCount
    // let postData = {
    //   'header': {
    //     'Content-Type': 'application/json'
    //   },
    //   'reqURL': option.url,
    //   'reqType': option.type,
    //   'body': option.param,
    //   'datas': '',
    //   'sCallback': funcName,
    //   'fCallback': errorName
    // }
    if (option.isEncode) {
      funcName += 'encode'
    }
    window[funcName] = function (retData) {
      // showLoading--
      // showLoading ? '' : loading.hide()
      /* 请求成功 */
      if (typeof retData === 'string') {
        try {
          retData = JSON.parse(retData)
          if (retData.body) {
            retData = retData.body
          }
        } catch (e) {
          console.log(e)
        }
      }
      if (retData.data && typeof retData.data === 'string' && !isNum(retData.data)) {
        console.log('======base64======')
        try {
        } catch (e) {
          console.log(retData)
        }
      }

      if (retData.code === -1) {
        console.log('未登录')
        // return
      }
    }
    let vuePostData = {
      headers: option.headers || {},
      url: option.url,
      method: option.type
    }
    if (option.headers && option.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      vuePostData.body = option.param
      vuePostData.emulateJSON = true
    } else {
      if (option.type.toLocaleLowerCase() === 'get') {
        vuePostData.params = option.param
      } else {
        vuePostData.body = JSON.stringify(option.param)
      }
    }
    Vue.http(vuePostData).then(function (retData) {
      if (typeof retData === 'object') {
        retData = JSON.stringify(retData)
      }
      window[funcName](retData)
    }, function (retData) {
      if (typeof retData === 'object') {
        retData = JSON.stringify(retData)
      }
      window[errorName](retData)
    })
  }

  function isNum (val) {
    var pattern = '^[0-9]*$'
    if (new RegExp(pattern).test(val)) {
      return true
    } else {
      return false
    }
  }

  // let loading = {
  //   hide: () => {
  //     console.log('隐藏了!')
  //   },
  //   show: () => {
  //     console.log('显示了！')
  //   }
  // }

  let nativeApi = {
    initAjax: managementAjax
  }

  module.exports = nativeApi

  window.nativeApi = nativeApi
})

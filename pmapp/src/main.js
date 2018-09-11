// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import MessageBox from 'mint-ui/lib/message-box'
import 'mint-ui/lib/message-box/style.css'
import './assets/ali_icon/iconfont.css'

window.MessageBox = MessageBox // 挂在window的对象中，就不用每个文件需要引入，方便又省事，axios的使用方法和此类似

Vue.config.productionTip = false

let vRouter = new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
Vue.use({
  vRouter
})

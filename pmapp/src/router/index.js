import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import { MessageBox } from 'mint-ui'

import login from '@/page/login/login'
import home from '@/page/home/home'
import personalcenter from '@/page/usercenter/personal-center'
import { getLogin } from '../assets/script/local.storage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/personalcenter',
    name: 'personalcenter',
    component: personalcenter,
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  store,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (getLogin().name && getLogin().phone) { // 通过store获取当前的token是否存在
      next()
    } else {
      MessageBox.alert('未登录，请先登录').then(() => {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      })
    }
  } else {
    next()
  }
})

export default router

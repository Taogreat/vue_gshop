import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', //路由模式 默认hash,地址带#号;history不带#号
  routes
})

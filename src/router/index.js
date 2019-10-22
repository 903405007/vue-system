import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'

Vue.use(Router)

const routes=[
  {
    name:'login',
    path: '/login',
    component:Login
  }
]

export default new Router({
  routes
})

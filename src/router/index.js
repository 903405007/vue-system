import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import Users from '@/components/users'

Vue.use(Router)

const routes=[
  {
    name:'login',
    path: '/login',
    component:Login
  },
  {
    name:'home',
    path: '/',
    component: Home,
    children: [
      {
      name:'users',
      path: 'users',
      component:Users
      }
    ]
  }
]

export default new Router({
  routes
})

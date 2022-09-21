import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'noteHome',
    component: () => import('../views/noteHome.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/userLogin.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/user/userRegister.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router

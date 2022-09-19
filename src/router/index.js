import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'noteHome',
    component: () => import('../views/noteHome.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

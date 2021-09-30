import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PopList from '../views/PopList.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PopList',
    name: 'PopList',
    component: PopList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

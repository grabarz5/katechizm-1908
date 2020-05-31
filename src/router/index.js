import Vue from 'vue'
import VueRouter from 'vue-router'
import Chapter from '@/views/Chapter'
import Home from '@/views/Home'
import Converter from '@/views/Converter'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chapter/:id',
    name: 'Chapter',
    component: Chapter,
    props: true
  },
  {
    path: '/converter',
    name: 'Converter',
    component: Converter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

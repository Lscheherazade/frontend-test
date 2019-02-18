import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/'
import About from '@/views/about/'
import Docs from '@/views/docs/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs
    }
  ]
})

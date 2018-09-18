import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import About from '@/components/about/About'
import Layout from '@/components/layout/Layout'
import Header from '@/components/header/Header'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Index,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
    },
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import About from '@/components/about/About'
import Layout from '@/components/layout/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
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

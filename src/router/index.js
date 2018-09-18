import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/header/Header'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Vue.component('Header',require('@/components/header/Header')),
      children: []
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})

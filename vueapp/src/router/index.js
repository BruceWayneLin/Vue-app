import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Customers',
      name: 'Customers',
      component: Customers
    }, {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})

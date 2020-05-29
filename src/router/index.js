import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Book from '@/components/Book'
import SubBook from '@/components/SubBook'
import SubVipBook from '@/components/SubVipBook'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/subbook',
      name: 'SubBook',
      component: SubBook
    },
    {
      path: '/subvipbook',
      name: 'SubVipBook',
      component: SubVipBook
    }
  ]
})

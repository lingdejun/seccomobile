import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Book from '@/components/Book'
import SubBook from '@/components/SubBook'
import SubVipBook from '@/components/SubVipBook'
import AppointmentList from '@/components/AppointmentList'
import AppointmentDetail from '@/components/AppointmentDetail'
import HistoryList from '@/components/HistoryList'
import VipList from '@/components/VipList'
import VipDetail from '@/components/VipDetail'
import Train from '@/components/Train'
import TrainResult from '@/components/TrainResult'
import Training from '@/components/Training'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/VisitMobileView/',
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
    },
    {
      path: '/appointmentlist',
      name: 'AppointmentList',
      component: AppointmentList
    },
    {
      path: '/appointmentdetail/:id',
      name: 'AppointmentDetail',
      component: AppointmentDetail
    },
    {
      path: '/historylist',
      name: 'HistoryList',
      component: HistoryList
    },
    {
      path: '/viplist',
      name: 'VipList',
      component: VipList
    },
    {
      path: '/vipdetail/:id',
      name: 'VipDetail',
      component: VipDetail
    },
    {
      path: '/train',
      name: 'Train',
      component: Train
    },
    {
      path: '/trainresult',
      name: 'TrainResult',
      component: TrainResult
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    }
  ]
})

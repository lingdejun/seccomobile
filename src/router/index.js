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
      component: Home,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/book',
      name: 'Book',
      component: Book,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/subbook',
      name: 'SubBook',
      component: SubBook,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/subvipbook',
      name: 'SubVipBook',
      component: SubVipBook,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/appointmentlist',
      name: 'AppointmentList',
      component: AppointmentList,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/appointmentdetail/:id',
      name: 'AppointmentDetail',
      component: AppointmentDetail,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/historylist',
      name: 'HistoryList',
      component: HistoryList,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/viplist',
      name: 'VipList',
      component: VipList,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/vipdetail/:id',
      name: 'VipDetail',
      component: VipDetail,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/train',
      name: 'Train',
      component: Train,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/trainresult',
      name: 'TrainResult',
      component: TrainResult,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/training',
      name: 'Training',
      component: Training,
      meta: {
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
      }
    }
  ]
})

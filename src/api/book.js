import request from '@/utils/request'

export function subBook(data) {
  return request({
    url: '/appointment/save',
    method: 'post',
    data
  })
}

export function getHomeList(data) {
  return request({
    url: '/appointment/gethomelist',
    method: 'post',
    data
  })
}

export function getAmountStat(data) {
  return request({
    url: '/appointment/getamountstat',
    method: 'post',
    data
  })
}

export function getAppointmentList(data) {
  return request({
    url: '/appointment/getlist',
    method: 'post',
    data
  })
}

export function getAppointmentDetail(data) {
  return request({
    url: '/appointment/getdetail',
    method: 'post',
    data
  })
}

export function getHistoryList(data) {
  return request({
    url: '/appointment/gethistorylist',
    method: 'post',
    data
  })
}

export function getVipList(data) {
  return request({
    url: '/appointment/getviplist',
    method: 'post',
    data
  })
}

export function getVipDetail(data) {
  return request({
    url: '/appointment/getvipdetail',
    method: 'post',
    data
  })
}

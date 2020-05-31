import request from '@/utils/request'

export function getAreas() {
  return request({
    url: '/controldata/getarea',
    method: 'post'
  })
}

export function getReasons() {
  return request({
    url: '/controldata/getreason',
    method: 'post'
  })
}
export function getIdTypes() {
  return request({
    url: '/controldata/getidtype',
    method: 'post'
  })
}

export function getReceiveName(data) {
  return request({
    url: '/controldata/getempnamelist',
    method: 'post',
    data
  })
}

export function checkReceiveEmail(data) {
  return request({
    url: '/controldata/validateemail',
    method: 'post',
    data
  })
}

export function gethealth(data) {
  return request({
    url: '/sysconfig/gethealth',
    method: 'post',
    data
  })
}

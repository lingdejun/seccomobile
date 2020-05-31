import request from '@/utils/request'

export function blackvalid(data) {
  return request({
    url: '/blacklist/validate',
    method: 'post',
    data
  })
}


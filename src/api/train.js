import request from '@/utils/request'

export function getTrainResult(data) {
  return request({
    url: '/train/gettrainresult',
    method: 'post',
    data
  })
}

export function getTrain(data) {
  return request({
    url: '/train/get',
    method: 'post',
    data
  })
}

export function submit(data) {
  return request({
    url: '/train/submit',
    method: 'post',
    data
  })
}

import request from '@/utils/request'

export default {
  findByPage(queryObj) {
    return request({
      url: '/accountInfo/findByPage',
      method: 'post',
      data: queryObj
    })
  },

  delById(delObj) {
    return request({
      url: '/accountInfo/delById',
		    method: 'post',
		    data: delObj
    })
  },

  save(account) {
    return request({
      url: '/accountInfo/save',
		    method: 'post',
		    data: account
    })
  }
}

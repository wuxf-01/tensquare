import request from '@/utils/request'

export default {
	findByPage(queryObj) {
	  return request({
	    url: '/orderInfo/findByPage',
	    method: 'post',
	    data:queryObj
	  })
	},

	delById(delObj){
		return request({
			url: '/orderInfo/delById',
		    method: 'post',
		    data:delObj
		})
	},

	save(order){
		return request({
			url: '/orderInfo/save',
		    method: 'post',
		    data:account
		})
	}
}
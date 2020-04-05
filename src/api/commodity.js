import request from '@/utils/request'

export default {
	findByPage(queryObj) {
	  return request({
	    url: '/commodityInfo/findByPage',
	    method: 'post',
	    data:queryObj
	  })
	},

	delById(delObj){
		return request({
			url: '/commodityInfo/delById',
		    method: 'post',
		    data:delObj
		})
	},

	save(account){
		return request({
			url: '/commodityInfo/save',
		    method: 'post',
		    data:account
		})
	}
}
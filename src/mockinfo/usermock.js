import Mock from 'mockjs';

var user=Mock.mock({
	"user|3-5":[
		{
			"name":'@cname',
			"id":"@id",
			"address":'@city(true)'
		}
	]
})

Mock.mock('http://www.jingdong.com/api/user',user)

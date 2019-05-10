<template>
	<div>
		<van-nav-bar
		  left-text="logo"
		  fixed
		/>		

		<van-button type="default" class="btn" @click="tip" size='small'>签到</van-button>
		<van-search placeholder="搜索你想知道的"  shape='round'/>
		<van-popup v-model="show"  :overlay="true" class='tan'>{{str}}</van-popup>
		<van-swipe :autoplay="3000" :height="200" :width="450">
		  <van-swipe-item v-for="(image, index) in images" :key="index">
		    <img :src="image.banner_img_url" @click="banner"/>
		  </van-swipe-item>
		</van-swipe>
		<div class="mid">
			<van-button type="info" class='zhuan' to='/club'>组织入住</van-button>
			<van-button type="info" class='zhuan' to='/voluntary'>成为志愿者</van-button>
		</div>
		<van-row type="flex">
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 1 }}" round >扶贫助困</van-button>
			</van-col>
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 2 }}" round >敬老助老</van-button>
		  </van-col>
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 3 }}" round >关爱儿童</van-button>
		  </van-col>
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 4 }}" round >社区便民</van-button></van-col>		  
		</van-row>
		<van-row type="flex">
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 5 }}" round >教育科普</van-button></van-col>
		  </van-col>
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 6 }}" round >绿色环保</van-button></van-col>
		  </van-col>
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 7 }}" round >文化活动</van-button></van-col>
		  </van-col>
		  <van-col span="6">
			  <van-button type="primary" :to="{path:'/activity',query: { active: 0 }}" round >全部活动</van-button></van-col></van-col>		  
		</van-row>
		<router-link to='/recruit' tag='h4'>
			<van-cell title="最新招募" value="查看更多" size="large" />
		</router-link>
		<van-card v-for="item in list"
		  :price="item.pprice"
		  :desc="item.pdesc"  
		  :title="item.pname"
		  :thumb="item.pimg"
		  @click="detail1(item.pid)">
		</van-card>
		
		<router-link to='/aid'  tag='h4'>
			<van-cell title="公益项目" value="查看更多" size="large" />
		</router-link>
		<div v-for="item in list"  class="ex">
			<img :src='item.pimg' @click="detail(item.pid)">
			<span>{{item.pname}}</span>
		</div>
	
	</div>
</template>

<script>
//	import Head from '@/components/Head'	
	import { Row, Col } from 'vant';	
	import { Uploader } from 'vant';	
	import axios from 'axios'
	export default{
		name:'Main',
//		components:{
//			Head
//		},
		data(){
			return{
				title:'首页',
				images:[],
				list:[],
				show:false,
				str:'',
				bool:true,
				Plist:[]
				
			}
		},
		mounted(){
			this.$emit('toTitle',this.title)
			var _this=this;
//			轮播
			axios({
				method:'post',
				url:'http://47.107.138.115:8081/weishan/weishan.weishan/project/list.do',
				params:{limit:4,page:1}
			}).then((data)=>{
				console.log(data.data.data.records)
				_this.images=data.data.data.records
			})
//			数据列表
			axios({
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
				params:{uid:6295}
			}).then((data)=>{
				_this.list=data.data.data
			}),
			axios({
				method:'post',
				url:'http://47.107.138.115:8081/weishan/weishan.weishan/project/list.do',
				params:{limit:3,page:1}
			}).then((data)=>{
				console.log(data);
				this.Plist = data.data.data.records;
            })
		},
		methods:{
			detail(id){
				// this.$router.push({name:'Prodetail',query:{id:id}})
				this.$router.push('/enter')
			},
			detail1(id){
				//详情页跳转
				this.$router.push({name:'Detail',query:{id:id}})
				// this.$router.push('/enter')
			},
			baoming(){
                this.$router.push({name:'Enter'})
            },
			banner(){
				this.$router.push({name:'Banner'})
			},
			// fupin(){
			// 	this.$router.push({name:'Activity'})
			// },
			tip(){
				this.show = true;
				axios({
					method:'get',
					//headers:{'Content-Type':'application/x-www-form-urlencoded'},
					url:'http://47.107.138.115:8081/weishan/weishan.weishan/signin/signin.do',
					params:{
					  "location": "郑州",
					  "uid": this.$store.state.uid
					}
					// params:{uid:1}
				}).then((data)=>{
					console.log(data);
					if(this.$store.state.uid){
						this.str = data.data.msg
					}else{
						this.str = '未登录'
					}
					
				})
			}
		}
	}
</script>

<style scoped="">
	img{
		width: 100%;
		height: 100%;
	}
	.van-swipe__track{
		width: 100%;
		height: 200px;
	}
	.btn{
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 20;
		border:none;
	}

	h4{
		margin:10px 0; 
	}
	.tan{
		position:fixed;
		width: 150px;
		height: 150px;
		left: 50%;
		top: 20%;
		border-radius: 50%;
		text-align: center;
		line-height: 150px;
	}

	.van-search{
		margin-bottom: 0;
		/*margin-top: 46px;*/
	}
	.mid{
		height: 70px;
		vertical-align: middle;
	}
	.zhuan{
		margin-top: 20px;
		margin-left: 60px;
	}
	.van-col{
		height: 100px;
		text-align: center;
		line-height: 100px;
		font-size: 12px;
	}
	.ex{
		margin: 10px 0;
		padding: 20px;
	}
	.ex img{
		width: 100%;
		height: 100px;
	}
</style>
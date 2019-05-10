<template>
	<div class="box">
		<Headmine/>
		
		<van-card
		  :desc="username"  
		  :title="phone"
		  :thumb="imageURL"
		/>
		<hr />
		<van-tabs>
			<van-tab :title="'关注'+medals"></van-tab>
		    <van-tab :title="'关注者'+organizations"></van-tab>
			<van-tab :title="'我的勋章'+organizations"></van-tab>
		</van-tabs>
		<div class="fis">
			<van-cell title="我的动态" icon="location-o" is-link to='/trends'/></van-cell>
			<van-cell title="我的组织" icon="friends-o" is-link :value='medals' to='/club'/></van-cell>
			<van-cell title="我的消息" icon="chat-o" is-link :value='messagrs' :to="{path:'/none',query: { code: '暂无我的消息' }}"/></van-cell>
		</div>
		<div>
			<van-cell title="捐助项目" icon="award-o" is-link :to="{path:'/none',query: { code: '暂无捐助项目' }}" /></van-cell>
			<van-cell title="志愿服务" icon="like-o" is-link to='/voluntary' /></van-cell>
		</div>
		<div>
			<van-cell title="设置" icon="discount" is-link /></van-cell>
			<van-cell title="意见反馈" icon="records" is-link :to="{path:'/none',query: { code: '我们不接受建议' }}"/></van-cell>
			<van-cell title="关于我们" icon="idcard" is-link to='/about'/></van-cell>
		</div>	
		<div>
			<van-cell title="退出/重新登录" icon="close" to='/login' is-link />
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';
import Headmine from '@/components/Headmine';
	export default {
		name:'Mine',
		components:{
			Headmine
		},
		data(){
		    return{
		       title:'我的' ,
			   imageURL:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1222929928,1326821480&fm=27&gp=0.jpg',
               active:'',
               username:'游客',
               phone:'***'	,
               messagrs:'',
               medals:'',
               organizations:''
			}			
		},
		methods: {
            onClick(index, title) {
            this.$toast(title);
            }
        },
        computed: {
            ...mapState(['uid'])
        },
        mounted() {
			var _this = this;
			if(this.$store.state.uid){
				axios({
					method:'get',
					url:'http://47.107.138.115:8081/weishan/weishan.weishan/user/userinfo.do',
					params:{uid:this.$store.state.uid},           
				}).then(function(data){
					console.log(data)
					_this.username = data.data.data.username
					_this.phone = data.data.data.phone
					_this.messagrs = data.data.data.messagrs
					_this.medals = data.data.data.medals
					_this.organizations = data.data.data.organizations

				})
			}
            
        },
	}
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.fis{margin-top:50px;}
	.van-card{background: #fff;}
	.van-card__header{margin: 20px auto;width: 90%;}
	.van-card__thumb img{border-radius: 50%;border: 1px solid #000;}
	.van-card__title{font-size: 22px;margin-left: 15px;margin-top: 20px;height: 26px;line-height: 26px;}
	.van-card__desc{margin-left: 15px;font-size: 16px;}
	hr{width: 90%;margin: 0 auto;}
	.van-cell{width: 90%;margin: 10px auto;height: 45px;line-height: 44px}
    .van-icon{line-height: 44px}
</style>

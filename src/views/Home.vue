<template>
	<div>

		<div class="container">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<router-view @toTitle="tap"></router-view>
			</van-pull-refresh>
		</div>
		
		<van-tabbar v-model="actives">
		  <van-tabbar-item icon="home-o" :to="{path:'/main',query:{actives:0}}">首页</van-tabbar-item>
		  <van-tabbar-item icon="search" :to="{path:'/trends',query:{actives:1}}">动态</van-tabbar-item>
		  <van-tabbar-item icon="setting-o" :to="{path:'/publish',query:{actives:2}}">发布</van-tabbar-item>
		  <van-tabbar-item icon="friends-o" :to="{path:'/mine',query:{actives:3}}">我的</van-tabbar-item>
		</van-tabbar>
		
	</div>
</template>

<script>

	import axios from 'axios'
	export default{
		name:'Home',
		data(){
			return{
				actives:0,
				isLoading:false,
				show:false,
				str:''
			}
		},
		methods:{
			tap(msg){
				this.title=msg
			},
			onRefresh(){
				setTimeout(() => {
			        this.$toast('刷新成功');
			        this.isLoading = false;
			      }, 1000);
			}
//			,
//			tip(){
//				this.show = true;
//				axios({
//					url:'http://jx.xuzhixiang.top/ap/api/bannerlist.php',
//					params:{uid:1017}
//					title		this.str = data.data.data[0].banner_img_url;
//				})
//			}
		},
		mounted(){
			this.actives= Number(this.$route.query.actives) 
			console.log(this.$route.query.actives)
		},
		watch:{
			$route(aa){
				// console.log(aa.query.actives)
			}
		}
	}
</script>

<style scoped="">
	.container{
		margin-bottom: 50px;
	}
	.btn{
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 20;
		border:none;
	}
	.tan{
		position:fixed;
		left: 45%;
		top: 45%;
	}
	img{
		width: 100px;
		height: 100px;
	}
	.search{
		margin-top:46px;
		margin-bottom: 0;
	}
</style>
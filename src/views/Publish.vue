<template>
	<div>
		<van-nav-bar
		  title="困难求助"
		  right-text="用户"
		  @click-right="onClickRight"
		/>	
		
		<div v-for="item in list"  class="ex" @click="turn">
			<img :src='item.pimg' >
			<span>{{item.pname}}</span>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import { Dialog } from 'vant';

	export default{
		name:'Publish',
		data(){
			return{
				images:[],
				list:[],
				
			}
		},
		mounted(){
			this.$emit('toTitle',this.title)
			var _this=this;
//			轮播
			axios({
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
				params:{uid:6295}
			}).then((data)=>{
				_this.list=data.data.data
			})

		},
		methods:{
			onClickRight() {
		      	Dialog.confirm({
				  title: '提示',
				  message: '查看发布内容'
				}).then(() => {
				  // on confirm
				}).catch(() => {
				  // on cancel
				});
			},
			turn(){
				this.$router.push('/enter')
			}
		}
	}
</script>

<style scoped="">
	img{
		width: 100%;
		height: 200px;
	}
	.ex{
		margin: 10px 0;
		padding: 20px;
	}
	/*.van-swipe__track{
		width: 100%;
		height: 200px;
	}*/
</style>
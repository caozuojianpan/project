<template>
	<div class="goods">
		<Head :name="title"/>
    	<img :src="item.pimg" >
	    
		<h4>{{item.pname}}</h4>
		
		
		
	</div>
</template>

<script>
	import Head from '@/components/Head'
	import axios from 'axios';
	export default{
		name:'Prodetail',
		data(){
			return{
				title:'项目详情',
				item:''
			}
		},
		mounted(){

			var _this=this;
			axios({
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{id:_this.$route.query.id}
			}).then((data)=>{
				_this.item=data.data.data
				
			})
		},
		components:{
			Head
		}
	}
</script>

<style scoped="">
	.goods>img{
		width: 100%;
		height: 200px;
		margin-top: 46px;
	}
</style>
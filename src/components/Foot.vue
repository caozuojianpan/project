<template>
	<div>
		<van-popup v-model="show"  :overlay="true" class='tan'><img :src="str"/></van-popup>
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
		  <van-tabbar-item icon="search">动态</van-tabbar-item>
		  <van-tabbar-item icon="setting-o" to="/setting">发布</van-tabbar-item>
		  <van-tabbar-item icon="friends-o" to="/friends">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
  		name: 'Foot',
  		data () {
		    return {
				active:0
		    }
		},
		methods:{

		}
		
	}
</script>

<style>
</style>
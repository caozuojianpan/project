<template>
	<div>
		<Head :name="title"/>
		<div class="container">
			<router-view @toTitle="tap"></router-view>
		</div>

	</div>
</template>

<script>
	import Head from '@/components/Head'
	export default{
		name:'Index',
		data(){
			return{
				title:''
			}
		},
		components:{
			Head
		},
		methods:{
			tap(msg){
				this.title=msg;
			}
		}
	}
</script>

<style scoped="">
	.container{
		margin-top: 46px;
	}
</style>
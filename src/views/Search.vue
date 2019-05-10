<template>
	<div>
		<form action="/">
		  <van-search
		    v-model="value"
		    show-action
		    shape="round"
		    @search="onSearch"
		    @cancel="onCancel"
		  />
		  <h6 class="hot">热搜</h6>
		  <van-tag class='hotcode' @click='change($event)' >环保</van-tag ><van-tag @click='change($event)'>敬老</van-tag>
		</form>	
	</div>
</template>

<script>
	export default{
		name:'Search',
		data(){
			return{
				value:'儿童'
			}
		},
		methods:{
			onSearch(){
				
			},
			onCancel(){
				this.$router.go(-1)
			},
			change(e){
				this.value = e.target.innerHTML
			}
			
		}
	}
</script>

<style scoped="">
	.hot,.hotcode{
		margin-left: 20px;
		margin-right: 20px;
		
	}
	
</style>
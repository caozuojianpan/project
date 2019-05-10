<template>
  <div class="hello">
   <van-nav-bar
	  :title="name"
	  fixed
	  
	  left-arrow
	  @click-left="onClickLeft"
	  
	/>
	
  </div>
</template>

<script>
export default {
  name: 'Head',
  props:['name'],
  data () {
    return {
		title:'主页',
    }
  },
  methods:{
  	onClickLeft(){
  		this.$router.go(-1)
  	},
  	//onClickRight(){
//			this.$dialog.alert({
//	      message: '提示'
//	    });
	 //}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

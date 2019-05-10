<template>
  <div class="hello">
   <van-nav-bar
	  title="我"
	  right-text="消息"
	  @click-right="onClickRight"
	  
	/>
	
  </div>
</template>

<script>
import { Dialog } from 'vant';

export default {
  name: 'Head',
  props:['name'],
  data () {
    return {
		title:'我',
    }
  },
  methods:{
  	
  	onClickRight(){
		Dialog.confirm({
		  title: '消息',
		  message: '没有消息'
		}).then(() => {
		  // on confirm
		}).catch(() => {
		  // on cancel
		});
	 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


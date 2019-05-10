<template>
  <div class="hello">
      <van-nav-bar :title=title fixed>
        <van-icon name="search" slot="right" @click="skip"/>
     </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
     title:'全部动态',
     active:2,
    }
  },
  methods:{
    skip(){
    	this.$router.push('search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height:46px;
}
</style>

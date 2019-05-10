<template>
    <div class='container'>
        <van-uploader :after-read="onRead" class='img'>
            <em>pic</em>
        </van-uploader>
        <p>提交成功，等待审核</p>
        <span @click="turn()">返回首页</span>
    </div>
</template>
<script>
export default {
    name:'Sub',
    methods:{
        onRead(file) {
            console.log(file)           
        },
        turn(){
            this.$router.push({name:'Home'})
        }
    }
}
</script>
<style scoped>

.img{
    width:163px;
    height:163px;
    border:1px solid #cecece;
    border-radius: 50%;
    text-align: center;
    line-height: 163px;
    margin: 100px 0 0 100px;

}
.img em{
    font-style:normal;
}
p{
    margin-left: 120px;
}
span{
    margin-left: 150px;
}
</style>
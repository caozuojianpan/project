<template>
    <div class='container'>
        <Head :name='title' />
        <div class='top'></div>
        <div class='nav'>
            <h3>志愿组织是什么？</h3>
            <p>由有志于社会公益事业的义务工作者自愿组成的非营利性组织。</p>
        </div>
        <div class='list'>
            <h3>如何注册志愿组织？</h3>
             <span v-for='item in 6'>
                <p></p>
                 <b>
                    <i>寻找您的志愿小伙伴</i>
                    <em>您首先需要有一群志同道合的志愿小伙伴</em>
                </b>
            </span>
        </div>
        <div class='bot'>
            <h3>作为志愿组织的创建者，我有什么样的权利义务？</h3>
            <p>1.可以招募更多的下偶偶版一起参与公益活动。</p>
            <p>2.审核：确保小伙伴们不犯错。</p>
            <p>3.信息的正确性：保证发布的信息是合规的。</p>
        </div>
    </div>
</template>
<script>
import Head from '@/components/Head'

export default {
    name:'Club',
    components:{
        Head
    },
   data(){
       return{
         arr:[1,2,3,4],
         title:'组织入住'  
       }
   }
}
</script>
<style scoped>

.top{
    height:150px;
    background: #cecece;
}
.nav{
    height:80px;
    padding:20px ;
}
h3{
    font-size:20px;
    height:22px;
    line-height:22px;
}
.nav p{
    font-size:16px;
    height:45px;
    line-height:20px;
}
.list{
    display: flex;
    flex-direction: column;
    padding: 0 20px;
}
.list span{
    display: flex;
    height:60px;
    margin:10px 0;
}
.list span p{
        width:51px;
        height:51px;
        border:1px solid #cccccc;
        border-radius: 50%;
    }
.list span b{
        width:300px;
        height:42px;
        display: flex;
        flex-direction: column;
        margin-left:10px;
        line-height:21px;
        margin-top:15px;
    }
    .list span i{
        font-size:16px;
        color:#000;
        font-style:normal;
    }
    .list span em{
        font-size:14px;
        color:#cccccc;
        font-style:normal;
    }
    .bot{
        height:100px;
    padding:20px ;

     }
     .bot h3{
         font-size:16px;
     }
     .bot p{
          font-size:14px;
          color:#cccccc;
     }
</style>
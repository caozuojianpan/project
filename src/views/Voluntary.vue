<template>
    <div class="container">
        <Head :name='title' />
         <div class='top'></div>
         <div class='nav'>
            <h3>志愿者是什么？</h3>
            <p>志愿者是指以自己的时间、知识、技能、体力等从事志
服务的自然人。</p>
        </div>
        <ul class='pic'>
            <li v-for="item in 3">
                <a>成为自愿者 <van-icon name="arrow" /></a>
                <p>实名认证信息，成为自愿者</p>
            </li>
        </ul>
        <div class='list'>
            <h3>作为志愿者,我有什么样的权利义务?</h3>
            <p>1.找到更多志同道合的小伙伴。</p>
            <p>2.定期参与志愿组织活动,获取服务时长。</p>
            <p>3.保证登记信息的真实性,完整性,准确性。</p>
            <p>4.报名参与志愿者活动,并参与志愿者培训,遵守志愿活动规范。</p>
        </div>
        <div class='list'>
            <h3>哪些志愿组织可以接收我?</h3>
            <p>1.如果您的所属单位或团组织已在平台上入驻,您可以申请加入。</p>
            <p>2.在平台中找到您感兴趣的组织,申请加入。</p>
            <p>3.您还可以在平台上自己申请创建组织,成为组织的管员。</p>
        </div>
        <div class='list'>
            <h3>原来参加的志愿队去哪了?</h3>
            <p>系统取代了旧有系统,您之前的参与过的志愿组织平台上注册了新
的组织,您可以去咨询原组织负责的组织名称,在平台中搜索组织名
称,找到组织。</p>
        </div>
    </div>
</template>
<script>
import Head from '@/components/Head'
export default {
    name:'Voluntary',
    components:{
        Head
    },  
    data(){
        return{
            title:'成为志愿者',
        }
    }
}
</script>
<style>


.top{
    height:150px;
    background: #cecece;
}
.nav{
    height:80px;
    padding:15px 20px;
}
h3{
    font-size:20px;
    height:22px;
    line-height:22px;
}
.nav p{
    font-size:16px;
    height:40px;
    line-height:20px;
}
.pic{
    padding:15px 20px;
    
}
.pic li{
height:90px;
background:#cecece;
margin-top:20px;
padding:10px 0 0 15px;
border-radius: 10px;
}
.pic a{
    fonr-size:14px;
}
.pic p{
    font-size:12px;
}
.list{
        margin-top:10px;
        padding: 0 20px;
     }
.bot h3{
    font-size:14px;
}
.bot p{
    font-size:12px;
    color:#cccccc;
}
</style>
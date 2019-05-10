<template>
    <div class='container'>
        <Head :name='title'/>
        <div class='part-1'>
            <h2>童话八音盒。。。。</h2>
            <p>童话八音盒图书历险记。。。。。</p>
        </div>
        <div class='part-2'>
            <van-cell title="招募人数" is-link value="56/100"/>
            <van-cell title="报名起止" is-link value="2019/1/24~2019/3/20"/>
            <van-cell title="活动地点" is-link value="线上"/>
            <van-cell title="咨询人" is-link  value="jacky"/>
        </div>
        <div class="part-3">
            <p></p>
            <span>
                <em>
                <h4>八音盒。。。。</h4>
                <b>给盲童讲故事。。。。</b>
                </em>
                <van-icon name="arrow" class='row'/>
            </span>    
        </div>
        <div class='part-4'>
            <h5>招募详情</h5>
        </div>
        <div class='part-5'>
            <div class='top'>
                <p>
                    <van-icon name="photo-o" />
                </p>
                <a>童话八音盒</a>
                <p>
                    <van-icon name="photo-o" />
                </p>
            </div>
            <div class='sel'>
                有一群朋友。。。。
            </div>
            <div class='pic'>
                <van-icon name="photo-o" />
            </div>
            <div class='sel-2'>
                <p>所以。。。</p>
                <p>我们。。。</p>
                <p>夏。。。</p>
            </div>
            <div class='pic'>
                <van-icon name="photo-o" />
            </div>
        </div>
         <div class='part-6'>
             <div class='title'>
                 童话八音盒第一，二季声音精灵
             </div>
            <div class='top'>
                <p>
                    <van-icon name="photo-o" />
                </p>
                <a>“声音精灵”招募</a>
                <p>
                    <van-icon name="photo-o" />
                </p>
            </div>
            <div class='nav'>
                <p>为了。。。。</p>
                <p>于是。。。。</p>
            </div>
            <div class='pic'>
                <van-icon name="photo-o" />
            </div>
            <div class='sel-2'>
                <p>所以。。。</p>
                <p>我们。。。</p>
            </div>
            <div class='pic'>
                <van-icon name="photo-o" />
            </div>
        </div>
         <div class='part-7'>
              <div class='top'>
                <p>
                    <van-icon name="photo-o" />
                </p>
                <a>'图书历险计划'</a>
                <p>
                    <van-icon name="photo-o" />
                </p>
            </div>
            <div class='pic'>
                <van-icon name="photo-o" />
            </div>
            <div class='sel-2'>
                <p>所以。。。</p>
                <p>我们。。。</p>
                <p>夏。。。</p>
            </div>
            <div class='pic'>
                <van-icon name="photo-o" />
            </div>
             <div class='sel-2'>
                <p>所以。。。</p>
                <p>我们。。。</p>
                <p>夏。。。</p>
            </div>
         </div>
        <div class='part-8'>
            <div class='top'>
                <p>
                    <van-icon name="photo-o" />
                </p>
                <a>志愿者福利</a>
                <p>
                    <van-icon name="photo-o" />
                </p>
            </div>
             <div class='list'>
               <h3>成功参与活动后，您将：</h3>
               <p>
                   <a>1</a>
                   <b>有机会获得免费领取一本定制声音图书</b>
               </p>
               <p>
                   <a>2</a>
                   <b>认识一大波与你志同道合的爱心人士</b>
               </p>
               <p>
                   <a>2</a>
                   <b>为盲童传递一份爱心，本身就是福自己的奖赏</b>
               </p>
            </div>
        </div>
        <div class='part-9'>
            <van-button hairline size="large" class="btn">招募流程</van-button>
            <van-steps direction="vertical" :active="0" active-icon="circle" size='80px'>
                <van-step>
                    <h3>1.报名</h3>
                    <p>招募对象:个人 学校 企业 组织</p>
                    <p>团体报名请联系：Jacky</p>
                    <p>通过报名后，我们将确定参与人数，规划“历险线路”</p>
                    <p>并邀请大家进入活动微信群</p>
                </van-step>
                <van-step>
                    <h3>2.参与“历险”</h3>
                    <p>这本书将从北京市盲校出发，拿到书后，你需要：</p>
                    <p>1.找一个小朋友共同听（读）一个故事</p>
                    <p>2.听完后在书上共同按下爱心手印并写下一段想对盲童说的话</p>
                    <p>3.三天内完成所有任务</p>
                    <p>将书寄给下一位参与者，开始它的下一段旅程。邮费由我们承担</p>
                </van-step>
                <van-step>
                    <h3>3.公益捐赠</h3>
                    <p>活动结束后，留有你体温和笔墨的书将捐到全国的盲校。你的爱心与善意，他们一定收到。</p>
                    <div class='pic'>
                        <van-icon name="photo-o" />
                    </div>
                </van-step>
                </van-steps>
        </div>
        <div class='part-10'>
            <div class='top'>
                <p>
                    <van-icon name="photo-o" />
                </p>
                <a>注意事项</a>
                <p>
                    <van-icon name="photo-o" />
                </p>
            </div>
              <div class='list'>
               <h3>成功参与活动后，您将：</h3>
               <p>
                   <a>1</a>
                   <b>有机会获得免费领取一本定制声音图书</b>
               </p>
               <p>
                   <a>2</a>
                   <b>认识一大波与你志同道合的爱心人士</b>
               </p>
               <p>
                   <a>2</a>
                   <b>为盲童传递一份爱心，本身就是福自己的奖赏</b>
               </p>
            </div>
            <span>有任何疑问欢迎找咨询人咨询</span>
        </div>
        <van-tabbar active-color="#000" class='foot'>
            <van-tabbar-item to='/Apply'>{{title}}</van-tabbar-item>

        </van-tabbar>
    </div>
</template>
<script>
import Head from "@/components/Head"
export default {
    name:'Banner',
    components:{
        Head
    },
    methods:{
        
    },
    data(){
        return{
            tit:'童话',
            active:'',
            title:'报名'
        }
    }
}
</script>
<style scoped>
.van-icon-circle{
    width:40px;
    height:40px;
}

    .part-1{
        height:60px;
        border-bottom:10px solid #cccccc;
        padding:0 20px;
        margin-top: 46px;
    }
    .part-1 h2{
        height:20px;
        font-size:14px;
    }
    .part-1 p{
        height:40px;
        font-size:14px;
        line-height: 14px;
    }
    .part-2{
        height:180px;
        border-bottom:10px solid #cccccc;
        padding:10px 20px;
    }
    .part-3{
        height:60px;
        padding:10px 20px;
       
    }
    .part-3 p{
        width:40px;
        height:40px;
        border:1px solid #cccccc;
        border-radius: 50%;
        float:left;
    }
    .part-3 span{
        font-size:12px;
        color:#cccccc;
        display: block;
    }
    .part-3 span em{
        height:40px;
        width:150px;
        line-height: 15px;
        float: left;
        margin-left:10px;
        font-style:normal;
    }
    .part-3 .row{
        float:right;
       margin-top:30px; 
       }
    .part-4{
        height:23px;
        background:#cccccc;
        font-size:14px;
    }
     .part-4 h5{
        height:23px;
        line-height: 23px;
     }
     .part-5{
         width:288px;
         margin:0 30px;
     }
     .top{
         height:50px;
         margin:20px 0;
         display: flex;
         justify-content: center;
     }
     .top p{
         width:35px;
         height:25px;
         border:1px solid #cccccc;
         border-radius: 50%;
         text-align: center;
         padding-top:10px;
     }
     .top a{
         font-size:14px;
         color:#cccccc;
         padding:25px 10px;
     }
     .sel{
         height:45px;
         font-size:14px;
         line-height:18px;
     }
     .pic{
         height:100px;
         background:#cccccc;
         display: flex;
         justify-content: center;
         padding-top:80px;
     }
     .sel-2{
         height:200px;
         font-size:14px;
         display: flex;
         flex-direction: column;
     }
      .sel-2 p{
         height:70px;
         margin:20px 0;
     }
     .part-6{
         width:288px;
         margin:0 30px;
     }

     .part-6 .title{
         font-size:16px;
         text-align:center;
         margin-top:20px;
     }
    .nav{
        height:120px;
      }
    .nav p{
        margin-top:20px;
    }

    .part-7{
         width:288px;
         margin:0 30px;
     }
     .part-8{
          width:288px;
          margin:0 30px;
     }
     .part-8 .list{
         display:flex;
         flex-direction: column;
         height:180px;
         background:#cccccc;
         margin:40px 0;
     }
    .list h3{
         height:18px;
         font-size:14px;
         margin-left:10px;
     }
     .list p{
         height:14px;
         font-size:12px;
     }
     .list p a{
         width:15px;
         height:15px;
         background:#fff;
         display:inline-block;
         text-align: center;
         line-height: 15px;
         margin:0 5px 0 10px;
     }
      .part-9{
          width:288px;
          margin:0 30px;
          height:850px;
        
          
     }
     .part-9 .btn{
         border-bottom:1px solid #cccccc;
         height:29px;
         font-size:14px;
         line-height:29px;
     }
     .part-10{
        width:288px;
        margin:0 30px;
        height:300px;
     }
     .part-10 .list{
         display:flex;
         flex-direction: column;
         height:180px;
         background:#cccccc;
         margin:40px 0;
     }
     .part-10 span{
         font-size:16px;
         text-align: center;
         width:288px;
         display: block;
     }
    .foot{
    background:#cccccc;
}
</style>

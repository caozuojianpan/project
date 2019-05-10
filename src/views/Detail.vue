<template>
    <div class='container'>
        <Head :name='title'/>
        <div class="box">
            <van-card v-for="item in list"
                thumb="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
                :title=item.uname
                :desc=item.location
                />
                <van-tag>个人求助</van-tag> 
            <p>"生命诚可贵，梦想价更高"</p>
            <ul>
                <li>
                    <b>目标金额/元</b>
                    <i>￥100000</i>
                </li>
                <em></em>
                <li>
                    <b>已筹金额</b>
                    <i>4522</i>
                </li>
                <em></em>
                <li>
                    <b>捐款人次</b>
                    <i>576</i>
                </li>
            </ul>
            <van-circle class="svg"
                v-model="currentRate"
                :rate="45"
                :speed="100"
                :text="text"
            />
            <span><a></a>该进度用时8天</span>
        </div>
        <div class="p"></div>
        <div class='part'>
            <span>
                <a>需求详情</a>
                <b><van-icon name="underway-o" />
                    1周前</b>
            </span>
            <p>
                "我的作业还没有写完。"我听见了17岁孙子虚弱的声音这是他手术后醒来说的第
一句话。我叫何顺兴,今年65岁,家住湖北省恩施州建始县前三溪村二组,系2014
年建档立卡贫困户,家有五口人,配偶:李正菊;儿子:何勇;儿媳:敖泽春;孙子:何远程
2018年12月18日,一个噩耗降临到我这个贫困家庭,年仅17岁正在一中就读的孙子
查出患有大脑镰旁脑膜瘤,大脑镰旁脑膜瘤,是一种初期症状不明显,有症状发现
时就比较严重的疾病。而我看着平时懂事乖巧、学习成绩优异、正值青春年少
的孙子,被病痛折磨的又瘦又苍白无力,我心痛不已。在12月18日入院至今,他经过
了多次治疗,并接到医生让我们做好长期治疗的通知,这个消息,无论家庭,还是对
他无疑都是另一个噩耗。虽然,我们家是贫困家庭,可我们一直努力发展种植,儿子
、儿媳也在外务工,勤勤恳恳。我们希望尽最大的努力为他治疗,可我们却资金有
限,能力有限,特此在平台上发布求助信息,希望大家可以伸出助之手,帮帮我们这个
家庭,也救救他这个鲜活的生,让他可以治疗疾病、可以重返校园,完成他未做完的
业、未看的书、过完他才刚刚开始的人生和梦想。
            </p>
            <ul>
                <li v-for='item in 3'>
                    <van-icon name="video-o"/>
                </li>
            </ul>
        </div>
        <div class="p"></div>
        <div class="prove">
            <a>需求证明</a>
            <div class='need'>
                <p v-for="item in 3">
                    <a>贫困户</a>
                    <b>
                        <span>
                            <i>何*兴</i>
                            <i>身份证验证通过</i>
                            <i>国家建档立卡数据库验证通过</i>
                        </span>
                    </b>
                </p> 
                <em>质检/举报</em> 
            </div> 
            <div class='bot'>
                <p>
                    <a>已有12人为他证明</a>
                    <a>我来证明</a>
                </p>
                <ul>
                    <li v-for="item in 6"></li>
                </ul>
            </div>
        </div>
        <div class="p"></div>   
        <div class='last'>
            <a>捐款纪录</a>
            <ul>
                <li v-for="item in 3">
                    <van-card 
                        thumb="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
                        title="夏困"
                        desc="加油！！！"
                        />
                        <p>1小时前</p> 
                </li>
            </ul>
        </div>
        <van-tabbar class="foot">
            <van-icon name="like-o" />
            <van-icon name="comment-circle-o" />
            <van-icon name="replay" />
            <van-button plain type="default"  to="/contribute">我要捐钱</van-button>
       </van-tabbar>
    </div>
</template>
<script>
import axios from 'axios'
import Head from '@/components/Head'
export default {
    name:'Detail',
    components:{
        Head
    },
     data(){
        return{
            active:'',
            list:[],
            currentRate: 0,
            title:'需求详情页'
        }
    },
     mounted(){
        var _this=this;
        axios({
            method:'post',
            url:'http://47.107.138.115:8081/weishan/weishan.weishan/project/list.do',
            params:{
                limit:1,
                page:1,
            }
        })
        .then(function(data){
            _this.list=data.data.data.records
            console.log(_this.list);
        })
        .catch(function(error){
            console.log(error)
        })
    },
    computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>
<style scoped>
em,i{
    font-style: normal;
}
*{
    margin:0;
    padding:0;
}
.foot{display: flex;justify-content: space-between;align-items: center;background: #eee}
.box{
    width:90%;
    margin:46px auto;
    height:270px;
}
.van-card__header{
    width: 80%;
    float: left;
}
.van-card__thumb{
width:42px;
height:42px;
} 
.van-card__content{
height:42px;
}
.van-card__img{
border-radius:50%;
}
.box p{
font-size:14px;
margin-top:30px;
padding-left:20px;
font-size:12px;
}
.box ul{
height:50px;
display:flex;
justify-content: space-around;
margin-top:20px;
} 
.box ul em{
width:1px;
height:30px;
background:#cccccc;
}
.box ul li{
display:flex;
font-size:12px;
flex-direction: column;
color:#cccccc;
} 
.svg{
margin:30px 0 0 130px;
}
.box span{
display: flex;
justify-content: center;
color:#cccccc;
font-size:12px;
}
.box span a{
display: block;
width:10px;
height:10px;
border:1px solid #cecece;
margin:3px 3px 0 0;
} 
.p{
width:100%;
height:6px;
background:#bbbbbb;
}
.part{
height:430px;
width:90%;
margin:0 auto;
}
.part span{
height:30px;
line-height: 40px;
display: flex;
justify-content: space-between;
font-size:14px;
}
.part span b{
    font-size:12px;
    color:#bbbbbb;
}
.part p{
font-size:12px;
color:#cccccc;
}
.part ul{
    height:95px;
    display: flex;
    justify-content:space-around;
    margin-top:10px;
}
.part ul li{
width:29px;
height:15px;
background:#cccccc;
display: flex;
padding:40px;
}
.prove{
height:450px;
width:90%;
margin:0 auto;
}
.prove a{
height:30px;
line-height: 30px;
display: block;
}  
.need{
width: 345px;
height: 310px;
background-color: rgba(248, 248, 248, 1);
border: 1px solid rgba(255, 255, 255, 0);
color:#bbbbbb;
margin-top:10px;
}
.need p{
display: flex;
height:67px;
border-bottom: 1px solid #cecece;
justify-content: space-around;
padding:10px 0;
}
.need p b{
display: flex;
flex-direction: column;
}
.need p b span{
display: flex;
flex-direction: column;
}
.need em{
text-align: center;
display: block;
margin-top:15px;
}
.bot p{
    height:30px;
    display: flex;
    justify-content: space-between; 
    font-size:12px;
    color:#bbbbbb;
} 
.bot ul{
    display: flex;
    justify-content: space-around;
}
.bot ul li{
width:39px;
height:39px;
border:1px solid #cceecc;
border-radius: 50%;
}
.last{
    width:90%;
    margin:0 auto;
    height:200px;
}
.last a{
    font-size:12px;
    color:#bbbbbb;
    height:30px;
    line-height: 30px;
}
.last ul li{
    border-bottom: 1px solid #bbbbbb;
    height: 50px;
    padding-top:10px;
}
.last ul li p{
    font-size:12px;
    color:#cccccc;
}
</style>
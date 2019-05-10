<template>
    <div class="box">
        <div class="tu"><img src="" alt=""></div>
        <div class="ul">慈善募捐 | 呵护山里娃的双手 | 共济公益</div>
        <p class="money">目标金额：¥100,000.00</p>
        <ul class="list">
            <li>
                <p>¥10,997.28</p>
                <p>以筹金额/元</p>
            </li>
            <li>
                <p>576</p>
                <p>捐款人次</p>
            </li>
            <li>
                <p>228</p>
                <p>转发次数</p>
            </li>
        </ul>
        <van-progress inactive :percentage="50" />
        <div class="fang">
            <h4>发起方：北京天使妈妈慈善基金会</h4>
            <p>活动备案号：455432121546555555ADSAMLD</p>
            <p>传得儿童关爱中心为山区学生筹募手套，呵护山里娃的双手。</p>
        </div>
        <van-tabs>
            <van-tab title="项目详情">
               <div class="p1">
                    <p>2018年10月30日</p>
                    <p>2018年10月30日</p>
                </div>
                <div class="p">
                    <p>开始时间</p>
                    <p>截止时间</p>
                </div> 
                <div class="tit">
                    爱美的女性经常会说：手是人的第二张脸，一定要好好呵护。当
一双手出现在您面前,您一定会习惯性地去推断它的主人。纤细白
嫩的双手一定会有一位年轻漂亮的女主人;骨节粗壮、皮肤黝黑的
则可能是一位体力劳动者的双手;老人的手往往布满斑点,血管突兀
,而婴儿的手则温香得让人陶醉;公司职员的手多洁净平滑,农民的手
多泥土且满是皱褶;演员的手柔软无骨,运动员的手则可能布满老茧
那么,看看下面这张照片,请您猜猜它的主人是谁。
                </div>
                <div class="tu"><img src="" alt=""></div>
                <h5>募捐目的</h5>
                <p class="nei">为山区学生筹募手套,呵护山里娃的双手。</p>
                <h5>募得款项用途</h5>
                <p class="nei">计划募捐1万双手套,每双手套预算10元,总筹款10万元。通过天使
妈妈基金会上线筹款,由传德儿童关爱中心进行采购,为节省执行
费用,传德儿童关爱中心计划在每年支教活动进行时,将爱心手套
送到学校。</p>
                <h5>受益人</h5>
                <p class="nei">位于甘肃、青海、贵州、云南、宁夏等中西部山区的中小学生。</p>
                <h5>剩余财产处理方案</h5>
                <p class="nei">全部用于执行该项目,执行完毕为止。</p>
                <h5>活动执行方</h5>
                <p class="nei">北京天使妈妈慈善基金会活动负责人张百爽</p>
                <h5>捐赠票据索取</h5>
                <p class="nei">开具和邮寄公益捐赠收据需要成本,希望爱心用户按需申请(需将抬
头、金额、捐赠截图、联系电话、地址、邮编等信息发至271670
3825@qq.com,经确认后我会会尽快回邮捐赠收据)。如果您在捐
赠时遇到问题需要咨询请电话联系我们:4000621885。</p>
                <h5>温馨提示</h5>
                <p class="nei">善源公益平台为民政部指定的慈善组织互联网公开募捐信息平台,
您捐赠的善款将直接进入具有公开募捐资质的慈善组织账户中。</p>
                <div class="foot">
                    <van-icon name="like-o" />
                    <van-icon name="comment-circle-o" />
                    <van-icon name="replay" />
                    <van-button plain type="primary" to="">我要捐钱</van-button>
                </div>
            </van-tab>
            <van-tab title="捐赠动态">
                <div class="da">
                    <p class="aa">
                        <span style="margin-top:20px">234</span>
                        <span>总捐款人数</span>
                    </p>
                </div>
                <van-card v-for="i in 4"
                    thumb="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
                    title="真实姓名"
                    desc="1小时之前"
                    num='捐赠60元'
                />
                <div class="foot">
                    <van-icon name="like-o" />
                    <van-icon name="comment-circle-o" />
                    <van-icon name="replay" />
                    <van-button plain type="primary" to="">我要捐钱</van-button>
                </div>               
                </van-tab>
                                
            <van-tab title="进展汇报">
                <van-steps direction="vertical" :active="0">
                    <van-step>
                        <h2>【城市】物流状态1</h2>
                        <span>2016-07-12 12:40</span>
                    </van-step>
                    <van-step>
                        <h2>【城市】物流状态2</h2>
                        <span>2016-07-11 10:00</span>
                    </van-step>
                    <van-step>
                        <h2>快件已发货</h2>
                        <span>2016-07-10 09:30</span>
                    </van-step>
                </van-steps>
                <div class="foot">
                    <van-icon name="like-o" />
                    <van-icon name="comment-circle-o" />
                    <van-icon name="replay" />
                    <van-button plain type="primary" to="">我要捐钱</van-button>
                </div>
            </van-tab>
        </van-tabs>        
    </div>
</template>

<script>
import { Progress,Icon} from 'vant';
export default {
    name:'Prodetail',
    data() {
        return {
          // active: 1 
        }
    }
}
</script>

<style scoped>
*{margin: 0;padding: 0;}
.box{width: 90%;margin: 46px auto 0;}
.tu{width: 100%;height: 171px;background: #eee}
.ul{height: 12px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: left;margin: 10px 0;}
.money{height: 12px;color: rgba(187, 187, 187, 1);font-size: 12px;text-align: left;}
.list{display: flex;justify-content: space-around;align-items: center;margin: 25px 0}
.list li{display: flex;flex-direction: column;justify-content: center;text-align: center;font-size: 14px;color: #aaa}
.fang{border:1px dashed #eee;margin-top: 15px;margin-bottom: 25px;}
.fang h4{color: rgba(16, 16, 16, 1);font-size: 12px;text-align: left;font-style: normal;margin-top: 5px}
.fang p{color: #aaa;font-size: 12px;line-height: 26px;}
.p{display: flex;justify-content: space-around;align-items: center;padding-bottom: 20px}
.p1{display: flex;justify-content: space-around;align-items: center;padding-top: 40px}
.p p{font-size: 14px;color: #aaa}
.p1 p{font-size: 14px;color: #aaa}
.tit{font-size: 14px;color: #aaa}
h5{font-size: 14px;margin-top: 15px;font-style: normal;}
.nei{font-size: 12px;color: #aaa}
.foot{display: flex;justify-content: space-between;align-items: center;background: #eee}
.van-icon{font-size: 22px}
.van-tab__pane{padding-top: 40px;}
.da{width: 100%;background: #eee;margin: 0 auto;height: 140px;display: flex;justify-content: center;align-items: center;}
.da .aa{width: 60%;height: 70%;background: #fff;}
.da .aa span{display: block;text-align: center;color:#aaa}
.van-card__header{width: 80%;float: left;}
.van-card__thumb{width:42px;height:42px;border-radius:50%;} 
.van-card__content{
height:60px;
}
.van-card__img{
border-radius:50%;
}
.van-card{height:60px; border-bottom:1px solid #000}
.pic{width: 290px;height: 140px;}
.van-steps{width: 70%;margin-top: 30px}
.van-steps__items{margin-left: 30px}
</style>

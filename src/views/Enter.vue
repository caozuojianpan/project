<template>
  <div>
    <div class="box">
      <Head :name="tit"/>
      <div class="title">美新路晚缘项目志愿者</div>
      <div class="text">每2周（周末上午）服务一次，每次半天，承诺至少持续服务一年。</div>
      <div class="zz">
        <van-cell title="招募人数" value="10/20"/>
        <van-cell title="报名起止" is-link value="2019/1/24～2019/3/20"/>
        <van-cell title="活动地点" is-link value="郑州.二七"/>
        <van-cell title="招募人" is-link value="赵天俊"/>
      </div>
      <div class="za">
        <van-cell title="郑州美新路公益基金会" icon="location-o" is-link/>
      </div>
      <h3>招募详情</h3>
      <div class="con">
        <h3>报名方式</h3>
        <p>发邮件至:zhaomu@newpathfound.org</p>
        <h3>邮件主题</h3>
        <p>
          姓名+我要加入晚缘+获取本招募信息的渠道例如:张丽萍+我要加
          入晚缘+善缘请在邮件中写上您的姓名、性别、年龄、联系电话和
          工作学习)单位,您将很快收到我们的回复。
        </p>
        <h3>招募要求</h3>
        <p>
          同美新路的使命、理念与运作模式;年满18周岁,身体健且无不良嗜
          好的中国公民;在未来的1-2年里,能够保证驻北京;愿意以平等、真
          诚、信任、开放的态度对待服务象;能够参加必要的培训、交流分
          享等相关活动。
        </p>
        <h3>招募范围</h3>
        <p>仅招募实名志愿者。</p>
        <h3>活动内容</h3>
        <p>
          缘项目于2001年启动,其服务对象主要为敬老机构或社区有需要的
          老人。项目通过志愿者与老人一对一结成对子,见面的方式进行交
          流,建立起尊重而坦诚的分享与倾诉渠,发掘老人自身的闪光点,使老
          人心态更健康和稳定:从,志愿者也会收获感动和喜悦,体验志愿服务
          的美好,并更好地陪伴身边的人。至今累计约940位志愿者为630位
          老人提供长期陪伴服务。
        </p>
        <h3>目前正在招募晚缘志愿者的基地:</h3>
        <p>北京第一社会福利院（周六组）10人</p>
        <p>北京第一社会福利院（周六组）10人</p>
      </div>
    </div>
    <!-- <div class="baoming" @click="to">报名</div> -->
    <van-tabbar>
      <van-tabbar-item to="/apply">报名</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Head from "@/components/Head";
export default {
  name: "Enter",
  components: {
    Head
  },
  data() {
    return {
      tit: "美新路项目"
    };
  },
  methods: {
    // to(){
    //     this.$router.push({name:'sub'})
    // }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 90%;
  margin: 0 auto;
}
.title {
  width: 345px;
  height: 22px;
  color: rgba(16, 16, 16, 1);
  font-size: 16px;
  text-align: left;
  margin-top: 46px;
}
.text {
  width: 344px;
  height: 36px;
  color: rgba(16, 16, 16, 1);
  font-size: 13px;
  text-align: left;
}
.zz {
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  text-align: left;
  margin-top: 10px;
}
.van-cell__title {
  color: #aaa;
}
.za {
  height: 40px;
  padding-top: 20px;
}
h3 {
  height: 35px;
  margin-top: 5px;
  font-style: normal;
  margin-top: 10px;
}
p {
  color: #aaa;
  font-size: 14px;
}
.baoming {
  height: 50px;
  background: #aaa;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
}
.van-tabbar {
  background: #aaa;
  color: black;
}
.van-tabbar-item {
  color: black;
}
</style>

<template>
    <div>
        <Head :name='title'/>
        <van-tabs :active= 'active' >
            <van-tab title="全部活动">
                <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img5.imgtn.bdimg.com/it/u=3730579696,2919252119&fm=26&gp=0.jpg"
                    @click="enter"
                    />         
            </van-tab>

            <van-tab title="扶贫助困">
                 <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img4.imgtn.bdimg.com/it/u=17157710,1318852364&fm=26&gp=0.jpg"
                    />
            </van-tab>
            <van-tab title="敬老助老">
                 <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img1.imgtn.bdimg.com/it/u=2476010979,3685772066&fm=26&gp=0.jpg"
                    />

                    <van-cell title="相关组织" is-link value="查看更多" />
                <div class="about">
                    <p></p>
                    <div class="right">
                        <h4>北京市石景山区乐龄老年服务中心</h4>
                        <h5>
                            <van-icon name="location-o" />
                            <span>北京市石景山区</span>
                            <van-icon name="manager-o" />
                            <span>123</span>
                        </h5>
                        <h6>让每一位老人在家中享受乐龄年华。</h6>
                    </div>
                </div>
            </van-tab>
            <van-tab title="关爱儿童">
                 <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img4.imgtn.bdimg.com/it/u=436715959,623257071&fm=26&gp=0.jpg"
                    />
            </van-tab>
            <van-tab title="便民社区">
                 <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img3.imgtn.bdimg.com/it/u=2438550624,283689189&fm=26&gp=0.jpg"
                    />
            </van-tab>
            <van-tab title="教育科普">
                 <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img5.imgtn.bdimg.com/it/u=2735998822,2492376011&fm=26&gp=0.jpg"
                    />
            </van-tab>
            <van-tab title="绿色环保">
                 <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img5.imgtn.bdimg.com/it/u=4075680052,587526839&fm=26&gp=0.jpg"
                    />
            </van-tab>
            <van-tab title="文化活动">
                 <van-card v-for="item in list"
                    :desc="item.pdesc"
                    :title="item.pname"
                    thumb="http://img5.imgtn.bdimg.com/it/u=1497598483,1010522554&fm=11&gp=0.jpg"
                    />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import axios from 'axios';
	import Head from '@/components/Head';
    
export default {
    name:'Activity',
    data(){
       return{
          title:'全部活动' ,
          list:[],
          active:""
       } 
    },
    components:{
        Head
    },
    methods:{
        enter(){
            this.$router.push('/enter')
        }
    },
    mounted() {
        this.active = this.$route.query.active;
        console.log(this.active)
        var _this = this;
        axios({
            method:'post',
            url:'http://47.107.138.115:8081/weishan/weishan.weishan/project/list.do',
            params:{limit:5,page:1}
        }).then(function(data){
            
            _this.list=data.data.data.records
            console.log(_this.list)
        })
    },
}
</script>

<style scoped>
h1,h4,h5,h6{margin: 0;padding: 0;}
h1{height: 46px;}
.van-tabs{margin-top: 46px;}
.van-card__thumb{display: block;width: 165px;height: 120px;}
.van-card__title{width: 180px;font-size: 16px;text-align: left;margin-top: 15px;}
.van-card__desc{font-size: 12px;color: #ccc;margin-top: 40px}
.about{width: 346px;height: 112px;margin: 0 auto;border-bottom: 2px solid #aaa}
.about p{width: 76px;height: 76px;background: #aaa;border-radius: 50%;margin-top: 18px;float: left;margin-left: 16px;}
.about .right{float: left;}
.about .right h4{margin-top: 16px;float: left;font-style: normal;margin-bottom: 15px}
.about .right .van-icon{width: 18px;height: 18px;margin-left: 10px;}
.about .right span{font-style: normal;color: #aaa;}
.about .right h6{margin-top: 10px;color: #ccc}
</style>

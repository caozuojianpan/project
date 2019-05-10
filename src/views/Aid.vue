<template>
    <div>
        <Head :name='title' />
        <van-tabs active= active class="cao">
            <van-tab title="全部活动" >
                <div class="box" v-for="item in list">
                    <img src="http://img5.imgtn.bdimg.com/it/u=346631745,915506324&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
            <van-tab title="扶贫助困">
               <div class="box" v-for="item in list">
                    <img src="http://img5.imgtn.bdimg.com/it/u=1345314702,3723278229&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
            <van-tab title="敬老助老">
                <div class="box" v-for="item in list">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3691222239,2962668066&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
            <van-tab title="关爱儿童">
               <div class="box" v-for="item in list">
                    <img src="http://img3.imgtn.bdimg.com/it/u=3328021656,3863345737&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
            <van-tab title="便民社区">
               <div class="box" v-for="item in list">
                    <img src="http://img0.imgtn.bdimg.com/it/u=361711084,3659495402&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
            <van-tab title="教育科善">
                <div class="box" v-for="item in list">
                    <img src="http://img1.imgtn.bdimg.com/it/u=616866258,306135517&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
            <van-tab title="绿色环保">
                <div class="box" v-for="item in list">
                    <img src="http://img1.imgtn.bdimg.com/it/u=4010948288,2649803349&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
            <van-tab title="文化活动">
                <div class="box" v-for="item in list">
                    <img src="http://img2.imgtn.bdimg.com/it/u=2891853978,1284497048&fm=26&gp=0.jpg"></img>
                    <ul>
                        <li>{{item.location}}|</li>
                        <li>{{item.linker}}|</li>
                        <li>{{item.pname}}</li>
                    </ul>
                    <div>{{item.pdesc}}</div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import axios from 'axios';
    import Head from '@/components/Head'

export default {
    name:'Aid',
    components:{
        Head
    },
    data(){
       return{
          title:'公益项目',
          list:[]
       } 
    },
    mounted() {
        var _this = this;
        axios({
            method:'post',
            params:{type:1,limit:3,page:1},
            url:'http://47.107.138.115:8081/weishan/weishan.weishan/project/list.do'
        }).then(function(data){
          
            _this.list = data.data.data.records 
             console.log(_this.list)
        })
    },
}
</script>

<style scoped>
ul,li,h1{margin: 0;padding: 0;}
.cao{margin-top: 46px;}
.box{border-bottom: 2px solid #aaa;width: 345px;margin: 0 auto 15px;}
.box img{width: 345px;height:130px;margin: 0 auto;background: #eee}
.box ul{width: 345px;height: 30px;line-height: 30px}
.box ul li{float: left;font-size: 13px;}
.box div{font-size: 13px;margin: 0 auto;width: 345px;}
</style>

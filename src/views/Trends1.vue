<template>
    <div>
        <Headt/>
        <van-tabs v-model="active" color='#ccc'>
            <van-tab title="全部">
                <div class='content' v-for="item in Plist" @click="turn">
                    <van-row>
                        <van-col span="4"><img src="touxiang" class="tou"></van-col>
                        <van-col span="10">{{item.uname}}<br/>{{item.location}}</van-col>
                        <van-col span="3" offset='7'>{{item.location}}</van-col>
                    </van-row>
                    <h5 class="tit">{{item.title}}</h5>
                    <div class="description">{{item.description}}</div>
                    <van-row>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                    </van-row>
                    <van-progress inactive :percentage="item.transmit" />
                    <van-row>
                        <van-col span="8">目标金额：{{item.thumb}}万元</van-col>
                        <van-col span="8">已筹得：{{item.thumb}}元</van-col>
                        <van-col span="8">帮扶次数：{{item.comment}}次</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12">{{item.tag}}</van-col>
                        <van-col span="12">{{item.createtime}}</van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="宣传">
                <div class='content' v-for="(item,i) in Plist" v-if='i<3'>
                    <van-row>
                        <van-col span="4"><img src="touxiang" class="tou"></van-col>
                        <van-col span="10">{{item.uname}}<br/>{{item.location}}</van-col>
                        <van-col span="4" offset='6'>
                            <van-tag @click.stop='follow($event,i)' :key="item.id" :class="{active1:i===active1}">关注</van-tag>
                        </van-col>
                    </van-row>
                    <h5 class="tit">{{item.title}}</h5>
                    <div class="description">{{item.description}}</div>
                    <van-row>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                    </van-row>
                    <van-progress inactive :percentage="item.transmit" />
                    <van-row>
                        <van-col span="8">目标金额：{{item.thumb}}万元</van-col>
                        <van-col span="8">已筹得：{{item.thumb}}元</van-col>
                        <van-col span="8">帮扶次数：{{item.comment}}次</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12">{{item.tag}}</van-col>
                        <van-col span="12">{{item.createtime}}</van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="求助">
                <div class='content' v-for="(item,i) in Plist" @click="turn" v-if="i<2">
                    <van-row>
                        <van-col span="4"><img src="touxiang" class="tou"></van-col>
                        <van-col span="10">{{item.uname}}<br/>{{item.location}}</van-col>
                        <van-col span="3" offset='7'>{{item.location}}</van-col>
                    </van-row>
                    <h5 class="tit">{{item.title}}</h5>
                    <div class="description">{{item.description}}</div>
                    <van-row>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                    </van-row>
                    <van-progress inactive :percentage="item.transmit" />
                    <van-row>
                        <van-col span="8">目标金额：{{item.thumb}}万元</van-col>
                        <van-col span="8">已筹得：{{item.thumb}}元</van-col>
                        <van-col span="8">帮扶次数：{{item.comment}}次</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12">{{item.tag}}</van-col>
                        <van-col span="12">{{item.createtime}}</van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="感恩">
                <div class='content' v-for="(item,i) in Plist" v-if='i>1&&i<3'>
                    <van-row>
                        <van-col span="4"><img src="touxiang" class="tou"></van-col>
                        <van-col span="10">{{item.uname}}<br/>{{item.location}}</van-col>
                        <van-col span="4" offset='6'>
                            <van-tag @click.stop='follow($event,i)' :key="item.id" :class="{active1:i===active1}">关注</van-tag>
                        </van-col>
                    </van-row>
                    <h5 class="tit">{{item.title}}</h5>
                    <div class="description">{{item.description}}</div>
                    <van-row>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                        <van-col span="8"><img src="item.imgs" class="img"></van-col>
                    </van-row>
                    <van-progress inactive :percentage="item.transmit" />
                    <van-row>
                        <van-col span="8">目标金额：{{item.thumb}}万元</van-col>
                        <van-col span="8">已筹得：{{item.thumb}}元</van-col>
                        <van-col span="8">帮扶次数：{{item.comment}}次</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12">{{item.tag}}</van-col>
                        <van-col span="12">{{item.createtime}}</van-col>
                    </van-row>
                </div>
            </van-tab>

        </van-tabs>
    </div>
</template>
<script>
import { Row, Col } from 'vant';
import Headt from '@/components/Headt'
import { Uploader } from 'vant';
import axios from 'axios';
export default {
    name:'Trends',
    components:{
        Headt
    },
    data(){
        return{
            active:'',
            active1:'',
            Plist:[]
        }
    },
    methods:{
        onRead(file) {
            console.log(file)
        },
        follow(e,i){
            this.active1 = i;
            if(e.target.innerHTML=='关注'){
                    e.target.innerHTML='已关注'
                }else{
                    e.target.innerHTML='关注'
            }       
        },
        turn(){
            this.$router.push('/detail')
        }
    },
    mounted(){
        axios({
            method:'post',
            url:'http://47.107.138.115:8081/weishan/weishan.weishan/dynamic/list.do',
            params:{limit:5,page:1}
        }).then((data)=>{
            console.log(data);
            this.Plist = data.data.data.records;
        })
        
    }
}
</script>
<style scoped>
.content{
    margin: 30px 0;
}
.tit{
    margin:5px 20px;
    
}
.description{
    font-size: 10px;
    color:#ccc;
    margin: 5px 20px;
}
.tou{
    height:42px;
    width:42px;
    border-radius: 50%;
}
.img{
    height:100px;
    width:100px;
}
.van-row{
    padding: 0 20px;
    margin:5px 0;
    font-size: 10px;
}
.van-progress{
    margin:10px 20px;
}
</style>


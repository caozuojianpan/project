<template>
    <div>
        <Headt />
        <div class="container">
            <van-tabs v-model="active">
                <van-tab title="全部">
                    <van-row v-for="(item,i) in list" >
                    <van-col span="24" class='part01' >
                        <div class='list'>
                        <p></p>
                        <span>
                            <a>
                                <i>{{item.uname}}</i>
                                <em>
                                <van-tag plain class='tag'>已审核</van-tag>
                                <van-tag plain class='tag'>
                                    个人求助</van-tag>
                                </em>
                            </a>
                            <b>{{item.location}}</b>
                        </span>
                    </div>
                    <div class='tit'   @click="turn">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <div class="pic">
                        <a v-for='item in 3'>
                            <van-icon name="video-o"/>
                        </a>
                    </div>
                    <van-progress inactive :percentage="item.transmit" class="pro" />

                    <div class='bot'>
                        <p>#{{item.tag}}#</p>
                        <p><van-icon  
                        :style="{color:bg}"
                        name="thumb-circle-o
" @click='res'/>{{num}}</p>
                        <p><van-icon name="expand-o" 
                        :style="{color:bg2}"
                        @click='ipt'/>{{pit}}</p>
                        <p><van-icon name="award-o" />52</p>
                        <p><van-icon name="underway-o" /></p>
                        <p>01-21</p>
                    </div>
                    </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="宣传">
                     <van-row v-for="(item,i) in list">
                    <van-col span="24" class='part01'>
                        <div class='list'>
                        <p></p>
                        <span>
                            <a>
                                <i>{{item.uname}}</i>
                                <van-tag plain class='tag' type='primary' @click='tap($event)' 
                                >关注</van-tag>
                            </a>
                            <b>{{item.location}}</b>
                        </span>
                    </div>
                    <div class='tit'>
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <div class="pic">
                        <a v-for='item in 3'>
                            <van-icon name="video-o"/>
                        </a>
                    </div>
                    <van-progress inactive :percentage="item.transmit" class="pro" />

                    <div class='bot'>
                        <p>#{{item.tag}}#</p>
                        <p><van-icon  
                        :style="{color:bg}"
                        name="thumb-circle-o
" @click='res'/>{{num}}</p>
                        <p><van-icon name="expand-o" 
                        :style="{color:bg2}"
                        @click='ipt'/>{{pit}}</p>
                        <p><van-icon name="award-o" />52</p>
                        <p><van-icon name="underway-o" /></p>
                        <p>01-21</p>
                    </div>
                    </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="求助">
                     <van-row v-for="(item,i) in list">
                    <van-col span="24" class='part01'>
                        <div class='list'>
                        <p></p>
                        <span>
                            <a>
                                <i>{{item.uname}}</i>
                                <em>
                                <van-tag plain class='tag'>已审核</van-tag>
                                <van-tag plain class='tag'>个人求助</van-tag>
                                </em>
                            </a>
                            <b>{{item.location}}</b>
                        </span>
                    </div>
                    <div class='tit'>
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <div class="pic">
                        <a v-for='item in 3'>
                            <van-icon name="video-o"/>
                        </a>
                    </div>
                    <van-progress inactive :percentage="item.transmit" class="pro" />

                    <div class='bot'>
                        <p>#{{item.tag}}#</p>
                        <p><van-icon  
                        :style="{color:bg}"
                        name="thumb-circle-o
" @click='res'/>{{num}}</p>
                       <p><van-icon name="expand-o" 
                        :style="{color:bg2}"
                        @click='ipt'/>{{pit}}</p>
                        <p><van-icon name="award-o" />52</p>
                        <p><van-icon name="underway-o" /></p>
                        <p>01-21</p>
                    </div>
                    </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="感恩">
                     <van-row v-for="(item,i) in list">
                    <van-col span="24" class='part01'>
                        <div class='list'>
                        <p></p>
                        <span>
                            <a>
                                <i>{{item.uname}}</i>
                                <van-tag plain class='tag' type='primary' @click='tap($event)'>关注</van-tag>
                            </a>
                            <b>{{item.location}}</b>
                        </span>
                    </div>
                    <div class='tit'>
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <div class="pic">
                        <a v-for='item in 3'>
                            <van-icon name="video-o"/>
                        </a>
                    </div>
                    <van-progress inactive :percentage="item.transmit" class="pro" />

                    <div class='bot'>
                        <p>#{{item.tag}}#</p>
                        <p><van-icon  
                        :style="{color:bg}"
                        name="thumb-circle-o
" @click='res'/>{{num}}</p>
                        <p><van-icon name="expand-o" 
                        :style="{color:bg2}"
                        @click='ipt'/>{{pit}}</p>
                        <p><van-icon name="award-o" />52</p>
                        <p><van-icon name="underway-o" /></p>
                        <p>01-21</p>
                    </div>
                    </van-col>
                    </van-row>
                </van-tab>
            </van-tabs>
          
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Headt from '@/components/Headt'
import { Uploader } from 'vant';
export default {
    name:'Trends',
    components:{
        Headt
    },
    data(){
        return{
            active:'',
            list:[],
            num:'',
            num1:'',
            bg:'',
            bg2:'',
            pit:'',
            pit1:''
        }
    },
    
    mounted(){
        var _this=this;
        axios({
            method:'post',
            url:'http://47.107.138.115:8081/weishan/weishan.weishan/dynamic/list.do',
            params:{
                limit:3,
                page:1,
            }
        })
        .then(function(data){
            console.log(data)
            _this.list=data.data.data.records
            _this.num = data.data.data.records[0].thumb
            _this.num1 = data.data.data.records[0].thumb
            _this.pit = data.data.data.records[0].transmit
            _this.pit1 = data.data.data.records[0].transmit
        })
        
    
    },
    methods:{
        onRead(file) {
            console.log(file)
        },
        turn(){
            this.$router.push('/detail')
        },
        tap(e){
            if(e.target.innerHTML=='关注'){
                e.target.innerHTML = '已关注'
            }else{
                e.target.innerHTML = '关注'
            }
        },
        res(){
            if(this.num == this.num1){
                
                axios({
                    method:'post',
                    url:'http://47.107.138.115:8081/weishan/weishan.weishan/dynamic/thumb.do',
                    params:{
                        did:1,
                    }
                })
                .then((data)=>{
                    this.num += data.data.data
                    this.bg = 'red'

                })
            }else{
                axios({
                    method:'post',
                    url:'http://47.107.138.115:8081/weishan/weishan.weishan/dynamic/cancelthumb.do',
                    params:{
                        did:1,
                    }
                })
                .then((data)=>{
                    console.log(data)
                    this.num -= data.data.data
                    this.bg = ''
                })
            
        
            }
        },
        ipt(){
            if(this.pit == this.pit1){
                axios({
                    method:'post',
                    url:'http://47.107.138.115:8081/weishan/weishan.weishan/dynamic/transmit.do?',
                    params:{
                        did:1,
                        uid:1
                    }
                })
                .then((data)=>{
                    console.log(data)
                    this.pit += 1
                    this.bg2 = 'yellow'

                })
            }
        }
    }
}
</script>
<style scoped>

    
    .van-row{
        margin: 20px ;
    }
    .part01{
        height:370px;
        width:100%;
        border-bottom: 5px solid #cccccc;
    }
    .list{
        height:42px;
        display: flex;
    }
    .list p{
        width:42px;
        height:42px;
        border:1px solid #cccccc;
        border-radius:50%;
    }
    .list span{
        margin-top:10px;
        height:20px;
        display: block;
        margin-left:5px;
        display: flex;
        flex-direction: column;
    }
    .list span a{
        width:280px;
        height:25px;
        display: flex;
        font-size:12px;
        color:#cccccc;
        text-align: center;
        line-height: 25px;
        float:left;
        justify-content: space-between;
    }
    .list span em{
        display: flex;
        font-style:normal;
    }
     .list span b{
        width:160px;
        height:15px;
        font-size:12px;
        color:#cccccc;
        line-height: 25px;
    }
    .tit{
        height:80px;
        margin-top:30px;
        margin-left:10px;
    }
    .tit span{
        height:20px;
        font-size:14px;
    }
    .tit p{
        height: 40px;
        font-size:12px;
        color:#cccccc;
    }
    .pic{
        height:95px;
        display: flex;
        justify-content:space-around;
    }
    .pic a{
        width:109px;
        height:55px;
        background:#cccccc;
        display: block;
        text-align: center;
        padding-top:40px;
    }
    .pro{
        margin:20px 0;
    }
    .bot{
        display: flex;
        font-size:12px;
        color:#cccccc;
        justify-content:space-between;
    }
    .last{
        display: flex;
        font-size:12px;
        color:#cccccc;
        justify-content:space-between;
    }
</style>


<template>
	<div>
		<Head :name="title"/>
		<van-search placeholder="搜索你想知道的"  shape='round'/>
		<van-tabs v-model="active" color="#ccc">
			<van-tab title="最新招募">
                <div class='content' v-for="item in Plist" @click="baoming">
					<van-row>
                        <van-col span="20"><h5 class="tit">{{item.title}}</h5></van-col>

                        <van-col span="4">
                            <van-tag >招募中</van-tag>
                        </van-col>
                    </van-row>
                    
                    <div class="description">{{item.description}}</div>
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
			<van-tab title="同城招募">
				<div class='content' v-for="(item,index) in Plist"  v-if='2<index&&index<4'>
					<van-row>
                        <van-col span="20"><h5 class="tit">{{item.title}}</h5></van-col>

                        <van-col span="4">
                            <van-tag >招募中</van-tag>
                        </van-col>
                    </van-row>
                    
                    <div class="description">{{item.description}}</div>
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
			<van-tab title="线上招募">
				<div class='content' v-for="(item,index) in Plist" v-if='index<3'>
					<van-row>
                        <van-col span="20">
							<h5 class="tit">{{item.title}}</h5>
						</van-col>
                        <van-col span="4">
                            <van-tag >招募中</van-tag>
                        </van-col>
                    </van-row>
                    
                    <div class="description">{{item.description}}</div>
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
	import axios from 'axios';
	import Head from '@/components/Head';
	import { Row, Col } from 'vant';	
	import { Uploader } from 'vant';
	export default{
		name:'Recruit',
		components:{
			Head
		},
		data(){
			return{
				title:'志愿者招募',
				active:'',
            	Plist:[]
			}
		},
		mounted(){
			axios({
				method:'post',
				url:'http://47.107.138.115:8082/weishan-1.0/weishan.weishan/dynamic/list.do',
				params:{limit:5,page:1}
			}).then((data)=>{
				console.log(data);
				this.Plist = data.data.data.records;
            })	
        },
        methods:{
            baoming(){
                this.$router.push({name:'Enter'})
            }
        }
	}
</script>

<style scoped>
.van-search{
	margin-top: 46px;
}
.van-swipe__track{
		width: 100%;
		height: 200px;
	}
	.van-nav-bar{
		position:fixed;
		left:0;
		top:0;
	}
.tit{
    margin:5px 0;
    
}
.description{
    font-size: 10px;
    color:#ccc;
    margin: 5px 20px;
}
.content{
	border: 1px solid #cecece;
	border-top: 0;
	border-radius: 10px;
	margin: 20px ;
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
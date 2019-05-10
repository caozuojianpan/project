<template>
    <div>
        <Headt/>
        <div class="container">
            <van-tabs v-model="active">
                <van-tab title="全部">
                	<van-row>
			           </van-col>
			            <van-col span="24">
			                 <div class='list'>
			                  <p></p>
			                  <span>
			                      <a>
			                          <i>何兴</i>
			                            <em>
			                               	已审核 
			                               	个人求助
			                            </em>
			                      </a>
			                      <b>湖北省</b>
			                  </span>
			              </div>
			            <div class='tit'>
			                <span></span>
			                <p></p>
			             </div>
			             <div class="pic">
			                <van-uploader :after-read="onRead">
			                    <van-icon name="photograph" class="img"/>
			                    <van-icon name="photograph" class="img"/>
			                    <van-icon name="photograph" class="img"/>
			                </van-uploader>
			             </div>
			             <div class='bot'>
			                 <p>#敬老助手#</p>
			                <p>522</p>
			                <p>52</p>
			                <p>641</p>
			                <p></p>
			                <p>01-21</p>
			             </div>
			            </van-col>
			            </van-row>
                	
                </van-tab>
                <van-tab title="宣传"></van-tab>
                <van-tab title="求助"></van-tab>
                <van-tab title="感恩"></van-tab>
            </van-tabs>
          
        </div>
    </div>
</template>
<script>
import Headt from '@/components/Headt'
import { Uploader } from 'vant';
export default {
    name:'Trends',
    components:{
        Headt
    },
    methods:{
        onRead(file) {
            console.log(file)
        }
    },	
    data(){
        return{
            active:''
        }
    }
}
</script>
<style scoped>
    .container{
        width: 345px;
        height:1050px;
        margin-left:10px;
    }
    .part01{
        height:370px;
        width:100%;
        border-bottom: 5px solid #cccccc;
    }
    .part02{
        height:280px;
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
        border-radius: 50%;
    }
    .list span{
        margin-top:10px;
        height:42px;
        display: block;
        margin-left:5px;
    }
    .list span a{
        width:280px;
        height:25px;
        display: flex;
        font-size:12px;
        color:#cccccc;
        justify-content:space-between;
        text-align: center;
        line-height: 25px;
    }
     .list span b{
        width:160px;
        height:15px;
        font-size:12px;
        color:#cccccc;
         text-align: center;
        line-height: 25px;
    }
    .tit span{
        height:30px;
    }
    .tit p{
        height: 54px;
    }
    .pic{
        height:95px;
        display: flex;
        justify-content:space-between;
    }
    .pic .img{
        width:109px;
        height:95px;
        background:#cccccc;
        text-align:center;
        line-height: 95px;
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


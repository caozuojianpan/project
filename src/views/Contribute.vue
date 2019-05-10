<template>
    <div class='container'>
        <Head :name= 'title' />
        <div class='top'>
            <h4>选择捐赠的金额</h4>
            <ul>
                <li v-for='item in arr' @click='send($event)'>{{item}}</li>
            </ul>
            <p>
                <input type="text"  placeholder="选择输入金额" :value="value"/>元
            </p>
        </div>
        <div class='pay'>
            <p>支付方式</p>
            <span>
                <strong>
                    <van-icon name="debit-pay" size='40px'/>
                    <a>
                        <em>支付宝</em>
                        <i>推荐支付宝用户使用</i>
                    </a>
                </strong>
                <b>
                    <van-radio checked-color="#cccccc"></van-radio>
                </b>
            </span>
        </div>
        <div class='bot'>
            <p>
                <a></a>
                <b>匿名支持（您的姓名，头像将不公开）</b>
            </p>
            <strong>
                <van-icon name="warning-o" />
                <b>捐赠代表您已同意《捐赠人协议须知》</b>
            </strong>
            <div class="em" @click="turn">确认支付</div>
        </div>
    </div>
</template>
<script>
import Head from '@/components/Head'
export default {
    name:'Contribute',
    components:{
        Head
    },
    data(){
        return{
            arr:[1,5,10,20,50,100,200,500],
            value:'',
            title:'捐赠'
        }
        
    },
    methods:{
        send(e){
            //获取当前dom节点内容
             this.value = e.target.innerHTML
             
         },
         turn(){
             this.$router.push({name:'Home'})
         }
    }

}
</script>
<style scoped=''>

.top{
    height:200px;
    padding:10px 15px;
    margin-top: 46px;
}
.top h4{
    color:#cecece;
}
.top ul{
    height:100px;
}
.top li{
    width:18%;
    height:30px;
    border:1px solid #cccccc;
    border-radius: 10px;
    float:left;
    margin:10px;
    text-align: center;
    line-height: 30px;
}
.top p{
    height:30px;
    width: 320px;
     border:2px solid #cccccc;
     border-radius: 10px;
}
.top p input{
    border:0;
    width:300px;
    height:28px;
}
.pay{
    margin-top:20px;
    width:100%;
    height:130px;
}
.pay p{
    height:40px;
    background:#cecece;
    line-height: 40px;
    padding-left:15px;
}
.pay span{
    display: flex;
    justify-content: space-between;
    height:60px;
    padding:10px 15px;
     border-bottom:15px solid #cccccc;
}
.pay span strong{
    display: flex;
}
.pay span a{
    display: flex;
    flex-direction: column;
    margin-left:20px;
    color:#cecece;
}
.pay span a em{
    font-size: 18px;
    font-style:normal;
}
.pay span a i{
    font-size: 14px;
    font-style:normal;
}
.bot{
    height:300px;
    margin-top:30px;
}
.bot p{
    height:150px;
    display: flex;
    padding-top:30px;
    margin-left:30px;
}
.bot p a{
    border:1px solid #cecece;
    width:33px;
    height:33px;
    border-radius: 50%;
    display: inline;
    margin:0 10px;
}
.bot p b{
    margin-top:5px;
    color:#cccccc;
}
.bot strong{
    padding:0 30px;

}
.bot strong b{
    margin-top:5px;
    color:#cccccc;
}
.bot .em{
    display: block;
    width:346px;
    height:30px;
    background:#cccccc;
    font-style: normal;
    border-radius:5px;
    text-align: center;
    line-height: 30px;
    margin:20px 0 0 25px;
}
</style>

<template>
    <div class='container'>
        <div class='top'>
            <Head :name='title' />
            <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="真实姓名"
                    placeholder="请输入真实姓名"
                />

                <van-field
                    v-model="card"
                    type="card"
                    label="身份证"
                    placeholder="请输入真实身份证"
                    required
                />
                  <van-field
                    v-model="age"
                    type="age"
                    label="年龄"
                    placeholder="请输入真实年龄"
                    required
                />
                  <van-field
                    v-model="sex"
                    type="sex"
                    label="性别"
                    placeholder="请输入性别"
                    required
                />
                </van-cell-group>
        </div>
        <div class='bot'>
             <van-cell-group>
                <van-field
                    v-model="face"
                    required
                    clearable
                    label="政治面貌"
                    right-icon="question-o" 
                    placeholder="请输入面貌"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="work"
                    type="work"
                    label="所属行业"
                    placeholder="请输入行业"
                    required
                />
                  <van-field
                    v-model="address"
                    type="address"
                    label="工作单位"
                    placeholder="请输入工作单位"
                    required
                />
                </van-cell-group>
        </div>
        <div class='present'>
            <p>个人简介（选填）</p>
            <van-cell-group class='pro'>
                <van-field
                    v-model="message"
                    type="textarea"
                    placeholder="请简单描述您的家庭情况，例如孩子学业，老人，收入来源等"
                    rows="1"
                    autosize
                />
                </van-cell-group>
        </div>
        <van-tabbar class='foot' v-model="active"       active-color="#000">
            <van-tabbar-item  @click="apply">{{title}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import axios from 'axios'
import Head from '@/components/Head'
export default {
    name:'Apply',
    components:{
        Head
    },
    data(){
        return{
            username:'',
            card:'',
            age:'',
            sex:'',
            face:'',
            work:'',
            address:'',
            message:'',
            title:'提交',
            active:0,
        }
    },
    methods:{
        apply(){
            axios({
                method:'get',
                url:'http://47.107.138.115:8081/weishan/weishan.weishan/volunteer/add',
                params:{uid:this.$store.state.uid}
            }).then(()=>{
                this.$router.push('/Sub')
            })
            
        } 
    }
}
</script>
<style >

.top{
    margin-top:46px;
    height:200px;
    border-bottom: 10px solid #cccccc;
}
.present p{
    height:30px;
    background:#cecece;
    line-height:30px;
}
.pro{
    height:180px;
}
.foot{
    background:#cccccc;
}
</style>
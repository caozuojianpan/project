<template>
  <div class="box">
    <van-cell-group>
      <van-field class="user"
        v-model="phone"
        required
        left-icon='manager-o'
        clearable
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field class="psd"
          v-model="password"
          left-icon='goods-collect-o    '
          type="password"
          label="密码"
          placeholder="请输入密码"
          required/>
    </van-cell-group>
    <van-button class="dl" type="primary" @click="toHome({phone,password})">登录</van-button>
    <div class="xiao">
        <router-link to="Register">立即注册</router-link>
        <router-link to="Relogin">忘记密码？</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Dialog,Toast } from 'vant';
import {mapState,mapActions} from 'vuex';

export default {
    name:'Login',
    data(){
        return{
           phone:'',
           password:'',
           title:'登录' ,
           zz:''
        }
    },
    methods:{
			...mapActions(['toHome'])
    	
    }
};
</script>

<style scoped>
.box{width: 90%;margin: 46px auto 0;display: flex;flex-direction: column;justify-content: center}
.user{width: 90%;height: 50px;margin: 200px auto 0;}
.psd{width: 90%;height: 50px;margin: 0 auto ;}
.dl{width: 90%;height: 50px;margin: 30px auto 0;border-radius: 40px;cursor: pointer;}
.xiao{display: flex;justify-content: space-between;width: 90%;height: 50px;font-size: 16px;margin:  10px auto 0;}
.xiao a{color: #ccc;}
</style>

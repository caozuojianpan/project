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
			placeholder="请输入密码,不能低于6位"
			required/>
		</van-cell-group>
		<van-cell-group>
			<van-field
				v-model="authcode"
				center
				clearable
				label="短信验证码"
				placeholder="请输入短信验证码"
			>
			<van-button slot="button" size="small" type="primary" @click = 'yz()'>发送验证码</van-button>
			</van-field>
		</van-cell-group>
    <van-button class="dl" type="primary" @click="toHome()" :disabled = 'aa' >注册</van-button>
    <div class="xiao">
        <router-link to="Register">注册后表示你同意微善的使用</router-link>       
    </div>
	
		<!-- <Sanfang /> -->
  </div>
</template>

<script>
	import { Dialog,Toast } from 'vant';
	import axios from 'axios';

	export default {
	
    name:'Register',
    data(){
        return{
           phone:'',
           password:'',
           title:'注册' ,
           authcode:'',
           aa:true,
		   zz:'',
		   show:false
        }
    },
    methods: {
       
		yz(){
			if(this.phone==''||this.phone.length!=11 || this.password.length<6){
				Dialog.alert({
				  title: '错误提示',
				  message: '用户名或密码格式不正确，请重新输入'
				}).then(() => {
				  // on close
				  this.phone='';
				  this.password=''
				});				
			}else{
						axios({
							method:'post',
							url:'http://47.107.138.115:8081/weishan/weishan.weishan/user/authCode.do',  
							params:{phone:this.phone,type:1}
						}).then((data)=>{
								console.log(data.data)
			
								if(data.data.code==1001){
											this.zz = data.data.msg	;
								Toast(this.zz)
											}else{
								this.zz = data.data.msg	;
								Toast(this.zz)					
								}
					})
					this.aa=false
			}			
		},
		 toHome(){
			axios({
				method:'post',
				url:'http://47.107.138.115:8081/weishan/weishan.weishan/user/register.do',
				params:{authcode:this.authcode,phone:this.phone,password:this.password}
			}).then((data)=>{
				console.log(data.data)
				if(data.data.code==1001){
				    	this.zz = data.data.msg	;
						Toast(this.zz)
				}else{
						this.zz = data.data.msg	;
						Toast(this.zz)	
						this.$router.push('/mine')				
				}
			})
			 
			 
			 
            //
        }
    }
		
};
</script>

<style scoped>
.box{width: 90%;margin: 46px auto 0;display: flex;flex-direction: column;justify-content: center}
.user{width: 90%;height: 50px;margin: 0px auto;}
.psd{width: 90%;height: 50px;margin: 0 auto ;}
.dl{width: 90%;height: 50px;margin: 30px auto 0;border-radius: 40px;cursor: pointer;}
.xiao{display: flex;justify-content: center;width: 90%;height: 50px;font-size: 16px;margin:  10px auto 0;}
.xiao a{color: #ccc;line-height: 50px;}
</style>

import axios from 'axios';
import router from '@/router';
import {mapState,mapActions} from 'vuex';
import { Dialog,Toast } from 'vant';

var actions={
	jian:function({commit}){
		setTimeout(function(){
			commit('jian')	
		},1000)
	},
	toHome({commit},{phone,password}){
        axios({
			method:'post',
			params:{password:password,phone:phone},
			url:'http://47.107.138.115:8081/weishan/weishan.weishan/user/login.do'
		}).then((data)=>{
			console.log(data)
			
			if(data.data.code==1000){
				this.zz = data.data.msg	;
				Toast(this.zz);				
				router.push('/main?actives=0')
				var uid = data.data.data.split(":")[1];
				commit('login',uid)
			}else{
				this.zz = data.data.msg;
				Toast(this.zz) ;
			}
		})
        
    }
}

export default actions;

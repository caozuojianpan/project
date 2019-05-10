var mutations={
	add:function(state){
		state.count++
	},
	jian:function(state){
		state.count--
	},
	login(state,uid){
		state.uid=uid
	}
}

export default mutations;
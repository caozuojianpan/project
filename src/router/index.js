import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Main from '@/views/Main'
import Trends from '@/views/Trends'
import Publish from '@/views/Publish'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Relogin from '@/views/Relogin'
import Prodetail from '@/views/Prodetail'
import Search from '@/views/Search'
import Recruit from '@/views/Recruit'
import Enter from '@/views/Enter'
import Activity from '@/views/Activity'
import Aid from '@/views/Aid'
import Sub from '@/views/Sub'
import Contribute from '@/views/Contribute'
import Club from '@/views/Club'
import Banner from '@/views/Banner'
import Apply from '@/views/Apply'
import Voluntary from '@/views/Voluntary'
import None from '@/views/None'
import Detail from '@/views/Detail'
import About from '@/views/About'




Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect:'/login',
      name: 'Index',
      component: Index,
      children:[
      	{
      		path:'/login',
      		name:'Login',
      		component:Login
      	},
      	{
      		path:'/register',
      		name:'Register',
      		component:Register
     	 },{
				path:'/relogin',
				name:'Relogin',
				component:Relogin
				}
      ]
    },
    {
			path:'/home',
			name:'Home',
			redirect:'/main',
			component:Home,
			children:[
				{
					path:'/main',
					name:'Main',
					component:Main
				}
				,
				{
					path:'/trends',
					name:'Trends',
					component:Trends
				},{
					path:'/publish',
					name:'Publish',
					component:Publish
				},{
					path:'/mine',
					name:'Mine',
					component:Mine
				}
			]
    },
    {
    	path:'/prodetail',
			name:'Prodetail',
			component:Prodetail
    },{
    	path:'/search',
    	name:'Search',
    	component:Search
    },{
			path:'/recruit',
			name:'Recruit',
    	component:Recruit
		},{
			path:'/enter',
			name:'Enter',
			component:Enter
		},{
			path:'/activity',
			name:'Activity',
			component:Activity
		},{
			path:'/aid',
			name:'Aid',
			component:Aid
		},{
			path:'/apply',
			name:'Apply',
			component:Apply
		},{
			path:'/banner',
			name:'Banner',
			component:Banner
		},{
			path:'/club',
			name:'Club',
			component:Club
		},{
			path:'/contribute',
			name:'Contribute',
			component:Contribute
		},{
			path:'/sub',
			name:'Sub',
			component:Sub
		},{
			path:'/voluntary',
			name:'Voluntary',
			component:Voluntary
		},{
			path:'/none',
			name:'None',
			component:None
		},{
			path:'/detail',
			name:'Detail',
			component:Detail
		},{
			path:'/about',
			name:'About',
			component:About
		}
  ]
})

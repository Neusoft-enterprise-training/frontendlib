import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件
//主页面组件
import AdminLogin from "./../components/admin/login.vue";

import HomeMain from "./../components/home/main.vue";

import CustomerMain from "./../components/customer/main.vue";
import CustomerList from "./../components/customer/list.vue";
import CustomerAdd from "./../components/customer/add.vue";
import CustomerModify from "./../components/customer/modify.vue";
import CustomerView from "./../components/customer/view.vue";

import CommentMain from "./../components/comment/main.vue";

import OrderMain from "./../components/order/main.vue";

Vue.use(VueRouter)

  const routes = [
	  {path:"/",name:"homemain",component:HomeMain},
	  {path:"/login",name:"login",component:AdminLogin},
	  {path:"/customer",name:"customermain",component:CustomerMain,children:[
		  {path:"list",name:"customerlist",component:CustomerList},
		  {path:"add",name:"customeradd",component:CustomerAdd},
		  {path:"modify/:id",name:"customermodify",component:CustomerModify},
		  {path:"view/:id",name:"customerview",component:CustomerView,props:true},
		  {path:"",redirect:"list"}
	  ]},
	  {path:"/comment",name:"commentmain",component:CommentMain},
	  {path:"/order",name:"ordermain",component:OrderMain},
	  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

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

// import FrequencyMain from "./../components/frequency/main.vue";

import EmployeeMain from "./../components/employee/main.vue";
import EmployeeList from "./../components/employee/list.vue";
import EmployeeAdd from "./../components/employee/add.vue";
import EmployeeModify from "./../components/employee/modify.vue";
import EmployeeView from "./../components/employee/view.vue";

import RoomAdd from "./../components/room/add.vue";
import RoomMain from "./../components/room/main.vue";
import RoomList from "./../components/room/list.vue";
import RoomModify from "./../components/room/modify.vue";
import RoomView from "./../components/room/view.vue";
import OrderMain from "./../components/order/main.vue";

Vue.use(VueRouter)

  const routes = [
	  {path:"/",name:"homemain",component:HomeMain},
	  {path:"/login",name:"login",component:AdminLogin},
	  {path:"/customer",name:"customermain",component:CustomerMain,children:[
		  {path:"list",name:"customerlist",component:CustomerList},
		  {path:"add",name:"customeradd",component:CustomerAdd},
		  {path:"modify/:employeeID",name:"customermodify",component:CustomerModify},
		  {path:"view/:employeeID",name:"customerview",component:CustomerView,props:true},
		  {path:"",redirect:"list"}
	  ]},
	  {path:"/comment",name:"commentmain",component:CommentMain},
	  {path:"/order",name:"ordermain",component:OrderMain},

	  {path:"/employee",name:"employeemain",component:EmployeeMain,children:[
		  {path:"list",name:"employeelist",component:EmployeeList},
		  {path:"add",name:"employeeadd",component:EmployeeAdd},
		  {path:"modify/:employeeID",name:"employeemodify",component:EmployeeModify},
		  {path:"view/:employeeID",name:"employeeview",component:EmployeeView},
		  {path:"",redirect:"list"}
	  ]},
		{path:"/room",name:"roommain",component:RoomMain,children:[
				  {path:"list",name:"roomlist",component:RoomList},
				  {path:"add",name:"roomadd",component:RoomAdd},
				  {path:"modify/:no",name:"roommodify",component:RoomModify},
				  {path:"view/:no",name:"roomview",component:RoomView},
				  {path:"",redirect:"list"}
		]}
	  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

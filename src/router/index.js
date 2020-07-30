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
import OrderMain from "./../components/order/main.vue";
import OrderList from "./../components/order/list.vue";
import OrderAdd from "./../components/order/add.vue";
import OrderModify from "./../components/order/modify.vue";
import OrderView from "./../components/order/view.vue";

import CommentMain from "./../components/comment/main.vue";
import CommentAdd from "./../components/comment/add.vue";
import CommentList from "./../components/comment/list.vue";
import CommentModify from "./../components/comment/modify.vue";
import CommentView from "./../components/comment/view.vue";

// import FrequencyMain from "./../components/frequency/main.vue";

import EmployeeMain from "./../components/employee/main.vue";
import EmployeeList from "./../components/employee/list.vue";
import EmployeeAdd from "./../components/employee/add.vue";
import EmployeeModify from "./../components/employee/modify.vue";
import EmployeeView from "./../components/employee/view.vue";

import GroupMain from "./../components/group/main.vue";
import GroupList from "./../components/group/list.vue";
import GroupAdd from "./../components/group/add.vue";
import GroupModify from "./../components/group/modify.vue";
import GroupView from "./../components/group/view.vue";

import RecordMain from "../components/record/main.vue"
import RecordAdd from "../components/record/add.vue"
import RecordList from "../components/record/list.vue"

import RoomAdd from "./../components/room/add.vue";
import RoomMain from "./../components/room/main.vue";
import RoomList from "./../components/room/list.vue";
import RoomModify from "./../components/room/modify.vue";
import RoomView from "./../components/room/view.vue";

import CleanAdd from "./../components/clean/add.vue";
import CleanMain from "./../components/clean/main.vue";
import CleanList from "./../components/clean/list.vue";
import CleanModify from "./../components/clean/modify.vue";
import CleanView from "./../components/clean/view.vue";

import CostAdd from "./../components/cost/add.vue";
import CostMain from "./../components/cost/main.vue";
import CostList from "./../components/cost/list.vue";
import CostModify from "./../components/cost/modify.vue";
import CostView from "./../components/cost/view.vue";
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
	  {path:"/comment",name:"commentmain",component:CommentMain,children:[
		  {path:"list",name:"commentlist",component:CommentList},
		  {path:"add",name:"commentadd",component:CommentAdd},
		  {path:"modify/:id",name:"commentmodify",component:CommentModify},
		  {path:"view/:id",name:"commentview",component:CommentView,props:true},
		  {path:"",redirect:"list"}
	  ]},
	  
	  {path:"/order",name:"ordermain",component:OrderMain,children:[
		  {path:"list",name:"orderlist",component:OrderList},
		  {path:"add",name:"orderadd",component:OrderAdd},
		  {path:"modify/:id",name:"ordermodify",component:OrderModify},
		  {path:"view/:id",name:"orderview",component:OrderView,props:true},
		  {path:"",redirect:"list"}
	  ]},

	  {path:"/employee",name:"employeemain",component:EmployeeMain,children:[
		  {path:"list",name:"employeelist",component:EmployeeList},
		  {path:"add",name:"employeeadd",component:EmployeeAdd},
		  {path:"modify/:employeeID",name:"employeemodify",component:EmployeeModify},
		  {path:"view/:employeeID",name:"employeeview",component:EmployeeView},
		  {path:"",redirect:"list"}
	  ]},
	  {path:"/group",name:"groupmain",component:GroupMain,children:[
	  		  {path:"list",name:"grouplist",component:GroupList},
	  		  {path:"add",name:"groupadd",component:GroupAdd},
	  		  {path:"modify/:groupID",name:"groupmodify",component:GroupModify},
	  		  {path:"view/:groupID",name:"groupview",component:GroupView},
	  		  {path:"",redirect:"list"}
	  ]},
	  {path:"/record",name:"recordmain",component:RecordMain,children:[
	  		  {path:"add",name:"recordadd",component:RecordAdd},
			  {path:"list",name:"recordlist",component:RecordList},
	  		  {path:"",redirect:"list"}
	  ]},
		{path:"/room",name:"roommain",component:RoomMain,children:[
				  {path:"list",name:"roomlist",component:RoomList},
				  {path:"add",name:"roomadd",component:RoomAdd},
				  {path:"modify/:no",name:"roommodify",component:RoomModify},
				  {path:"view/:no",name:"roomview",component:RoomView},
				  {path:"",redirect:"list"}
		]},
		{path:"/room",name:"roommain",component:RoomMain,children:[
				  {path:"list",name:"roomlist",component:RoomList},
				  {path:"add",name:"roomadd",component:RoomAdd},
				  {path:"modify/:no",name:"roommodify",component:RoomModify},
				  {path:"view/:no",name:"roomview",component:RoomView},
				  {path:"",redirect:"list"}
		]},
		{path:"/clean",name:"cleanmain",component:CleanMain,children:[
				  {path:"list",name:"cleanlist",component:CleanList},
				  {path:"add",name:"cleanadd",component:CleanAdd},
				  {path:"modify/:no",name:"cleanmodify",component:CleanModify},
				  {path:"view/:no",name:"cleanview",component:CleanView},
				  {path:"",redirect:"list"}
		]},
		{path:"/cost",name:"costmain",component:CostMain,children:[
				  {path:"list",name:"costlist",component:CostList},
				  {path:"add",name:"costnadd",component:CostAdd},
				  {path:"modify/:no",name:"costmodify",component:CostModify},
				  {path:"view/:no",name:"costview",component:CostView},
				  {path:"",redirect:"list"}
		]}
	  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

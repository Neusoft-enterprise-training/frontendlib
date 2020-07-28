import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件
//主页面组件
import AdminLogin from "./../components/admin/login.vue";

import HomeMain from "./../components/home/main.vue";

import CustomerMain from "./../components/customer/main.vue";

import ConsumptionMain from "./../components/consumption/main.vue";

import FrequencyMain from "./../components/frequency/main.vue";

Vue.use(VueRouter)

  const routes = [
	  {path:"/",name:"homemain",component:HomeMain},
	  {path:"/login",name:"login",component:AdminLogin},
	  {path:"/customer",name:"customermain",component:CustomerMain},
	  {path:"/consumption",name:"consumptionmain",component:ConsumptionMain},
	  {path:"/frequency",name:"frequencymain",component:FrequencyMain}
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

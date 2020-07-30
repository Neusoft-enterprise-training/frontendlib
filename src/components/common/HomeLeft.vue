<template>
	<div>
	   <aside class="main-sidebar">
		 <!-- sidebar: style can be found in sidebar.less -->
		 <section class="sidebar">
		   <!-- Sidebar user panel -->
		   <div class="user-panel">
			 <div class="pull-left image">
			   <img src="./../../assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
			 </div>
			 <div class="pull-left info">
			   <p>管理员</p>
			   <router-link to="/login"><i class="fa fa-circle text-success"></i> 登录</router-link>
			 </div>
		   </div>
		   <ul class="sidebar-menu" data-widget="tree">
			 <li class="header">系统功能选择</li>
			 <ul class="sidebar-menu">
			  <router-link to="#">
				 <span>人员管理</span>
				 <span class="pull-right-container">
				 </span>
			   </router-link>
			 </ul>
			 <li class="treeview">
			   <router-link to="/employee">
				 <i class="fa fa-dashboard"></i> <span>人员信息管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			   <router-link to="/group">
				 <i class="fa fa-dashboard"></i> <span>人员团队管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			   <router-link to="">
				 <i class="fa fa-dashboard"></i> <span>人员出勤管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <ul class="sidebar-menu">
			  <router-link to="#">
				 <span>业务管理</span>
				 <span class="pull-right-container">
				 </span>
			   </router-link>
			 </ul>
			 <li class="treeview">
			   <router-link to="">
				 <i class="fa fa-dashboard"></i> <span>业务信息管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			   <router-link to="">
				 <i class="fa fa-dashboard"></i> <span>业务负责人管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			   <router-link to="">
				 <i class="fa fa-dashboard"></i> <span>业务价格管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <ul class="sidebar-menu">
			  <router-link to="#">
				 <span>客房管理</span>
				 <span class="pull-right-container">
				 </span>
			   </router-link>
			 </ul>
			 <li class="treeview">
			   <router-link to="/room">
				 <i class="fa fa-dashboard"></i> <span>客房信息管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			   <router-link to="">
				 <i class="fa fa-dashboard"></i> <span>客房清洁记录管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			   <router-link to="">
				 <i class="fa fa-dashboard"></i> <span>客房消耗管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <ul class="sidebar-menu">
			  <router-link to="#">
				 <span>客户管理</span>
				 <span class="pull-right-container">
				 </span>
			   </router-link>
			 </ul>
			 <li class="treeview">
			  <router-link to="/customer">
				 <i class="fa fa-dashboard"></i> <span>客户信息管理</span>
				 <span class="pull-right-container">
				   <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			  <router-link to="/order">
				 <i class="fa fa-dashboard"></i> <span>客户订单管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
				 </span>
			   </router-link>
			 </li>
			 <li class="treeview">
			  <router-link to="/comment">
				 <i class="fa fa-dashboard"></i> <span>客户评论管理</span>
				 <span class="pull-right-container">
				 <i class="fa fa-angle-left pull-right"></i>
			 	 </span>
			   </router-link>
			 </li>
			</ul>
		 </section>
		 <!-- /.sidebar -->
	   </aside>
	</div>
</template>

<script>
	export default {
		name:"HomeLeft",
		data() {
			return {
			};
		}
	}
</script>

<style>
</style>

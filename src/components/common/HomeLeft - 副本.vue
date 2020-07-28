<template>
	<div>
		<!-- Left side column. contains the sidebar -->
		<aside class="main-sidebar">
		  <!-- sidebar: style can be found in sidebar.less -->
		  <section class="sidebar">
		    <!-- Sidebar user panel -->
		    <div class="user-panel">
		      <div class="pull-left image">
		        <img src="./assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
		      </div>
		      <div class="pull-left info">
		        <p>管理员</p>
		        <a href="#"><i class="fa fa-circle text-success"></i> 注销</a>
		      </div>
		    </div>
		    <ul class="sidebar-menu" data-widget="tree">
		      <li class="header">系统功能选择</li>
		      <li class="treeview">
		        <a href="#">
		          <i class="fa fa-dashboard"></i> <span>管理人员</span>
		          <span class="pull-right-container">
		            <i class="fa fa-angle-left pull-right"></i>
		          </span>
		        </a>
		      </li>
		      <li class="treeview">
		        <a href="#">
		          <i class="fa fa-dashboard"></i> <span>酒店业务</span>
		          <span class="pull-right-container">
		            <i class="fa fa-angle-left pull-right"></i>
		          </span>
		        </a>
		      </li>
		      <li class="treeview">
		        <a href="#">
		          <i class="fa fa-dashboard"></i> <span>客房信息</span>
		          <span class="pull-right-container">
		            <i class="fa fa-angle-left pull-right"></i>
		          </span>
		        </a>
		      </li>
		      <li class="treeview">
		        <a href="#">
		          <i class="fa fa-dashboard"></i> <span>客户管理</span>
		          <span class="pull-right-container">
		            <i class="fa fa-angle-left pull-right"></i>
		          </span>
		        </a>
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
			return {};
		}
	}
</script>

<style>
</style>

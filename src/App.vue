<template>
  <div id="app" class="wrapper">
  <home-top></home-top>
   
   <!-- =============================================== -->
   
   <!-- Left side column. contains the sidebar -->
   <home-left></home-left>
   <!-- =============================================== -->
   
   <!-- Content Wrapper. Contains page content -->
   <div class="content-wrapper">
     <!-- Content Header (Page header) -->
     <section class="content-header">
       <h1>
         系统主页
         <small>子功能</small>
       </h1>
       <ol class="breadcrumb">
         <li> <router-link to="/"><i class="fa fa-dashboard"></i> 首页</router-link></li>
       </ol>
     </section>
   
     <!-- Main content -->
     <section class="content">
   
       <!-- Default box -->
       <div class="box">
         <div class="box-body">
           <router-view></router-view>
         </div>
       </div>
       <!-- /.box -->
   
     </section>
     <!-- /.content -->
   </div>
   <!-- /.content-wrapper -->
   
   <home-foot></home-foot>
   
   <!-- Add the sidebar's background. This div must be placed
        immediately after the control sidebar -->
   <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
	import HomeTop from "./components/common/HomeTop"
	import HomeLeft from "./components/common/HomeLeft"
	import HomeFoot from "./components/common/HomeFoot"
	
	export default {
	   name: 'app',
	   data () {
	     return {
	       msg: 'Welcome to Your Vue.js App'
	     }
	   },
	   components:{
	     HomeTop,
		 HomeLeft,
		 HomeFoot
	   }
	 }
</script>

<style>
@import url("assets/bower_components/bootstrap/dist/css/bootstrap.min.css");
@import url("assets/bower_components/font-awesome/css/font-awesome.min.css");
@import url("assets/bower_components/Ionicons/css/ionicons.min.css");
@import url("assets/dist/css/AdminLTE.min.css");
@import url("assets/dist/css/skins/_all-skins.min.css");
</style>

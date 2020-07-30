<template>
	<!-- Default box -->
	  <div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">增加服务项目</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
			 <div class="form-group">
			   <label for="exampleInputEmail1">服务项目编码</label>
			   <input type="text" class="form-control" v-model="bath.id" required>
			 </div>
			 <div class="form-group">
			   <label for="exampleInputPassword1">服务项目名称</label>
			   <input type="text" class="form-control" v-model="bath.name" required>
			 </div>
			 <div class="form-group">
			   <label for="exampleInputPassword1">服务项目收费</label>
			   <input type="text" class="form-control" v-model="bath.charge" required>
			 </div>
			 <button type="submit" class="btn btn-primary">提交</button>
			 <router-link to="/bath/list" class="btn btn-default">取消</router-link>
			</form>
		</div>
		<!-- /.box-body -->
	  </div>
	  <!-- /.box -->
</template>

<script>
	import Qs from 'qs'
	export default {
		name:"BathAdd",
		data() {
			return {
				bath:{
					id:"",
					name:"",
					charge:"",
				}
			};
		},
		methods:{
			add(){
				// console.log(this.business.code);
				this.axiosJSON.post("bath/add",Qs.stringify(this.bath)).then(result=>{
					// 编程方式跳转到部门列表的组件
					if(result.data.status == "OK") {
						alert(result.data.message);
						this.$router.push("/bath/list");//编程方式跳转到部门列表的组件
					}else {
						alert(result.data.message);
					}
				});
				
			}
		}
	}
</script>

<style>
</style>

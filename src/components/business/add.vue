<template>
	<!-- Default box -->
	  <div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">增加业务</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
			 <div class="form-group">
			   <label for="exampleInputEmail1">业务编码</label>
			   <input type="text" class="form-control" v-model="business.code" required>
			 </div>
			 <div class="form-group">
			   <label for="exampleInputPassword1">业务名称</label>
			   <input type="text" class="form-control" v-model="business.name" required>
			 </div>
			 <button type="submit" class="btn btn-primary">提交</button>
			 <router-link to="/business/list" class="btn btn-default">取消</router-link>
			</form>
		</div>
		<!-- /.box-body -->
	  </div>
	  <!-- /.box -->
</template>

<script>
	import Qs from 'qs'
	export default {
		name:"BusinessAdd",
		data() {
			return {
				business:{
					code:"",
					name:"",
				}
			};
		},
		methods:{
			add(){
				console.log(this.business.code);
				this.axiosJSON.post("business/add",Qs.stringify(this.business)).then(result=>{
					// 编程方式跳转到部门列表的组件
					if(result.data.status == "OK") {
						alert(result.data.message);
						this.$router.push("/business/list");//编程方式跳转到部门列表的组件
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

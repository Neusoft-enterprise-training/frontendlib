<template>
	<!-- Default box -->
	  <div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">修改服务项目信息</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
			  <div class="form-group">
				<label for="exampleInputPassword1">服务项目编码</label>
				<input type="text" class="form-control" v-model="bath.id">
			  </div>
			  <div class="form-group">
				<label for="exampleInputPassword1">服务项目名称</label>
				<input type="text" class="form-control" v-model="bath.name">
			  </div>
			  <div class="form-group">
				<label for="exampleInputPassword1">服务项目收费</label>
				<input type="text" class="form-control" v-model="bath.charge">
			  </div>
			  
			  <button type="submit" class="btn btn-primary">提交</button>
			  <router-link to="/bath/list" class="btn btn-default">取消</router-link>
			  <input type="hidden" name="id">
			</form>
		</div>
		<!-- /.box-body -->
	  </div>
	  <!-- /.box -->
</template>

<script>
	import Qs from 'qs';
	export default {
		name:"BathModify",
		data() {
			return {
				bath:{
					id:"",
					name:"",
					charge:"",
				}
			};
		},
		created() {//组件的创建生命周期函数
			// console.log("ddf");
			let newid = this.$route.params.id;
			// console.log(newno);
			this.getBusiness(newid);
		},
		methods: {
			getBusiness(id) {
				this.axiosJSON.get("bath/get?id=" + id).then(result=>{
					this.bath = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("bath/modify",Qs.stringify(this.bath)).then(result=>{
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

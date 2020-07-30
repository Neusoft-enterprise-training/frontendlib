<template>
	<!-- Default box -->
	  <div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">修改负责人信息</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
			  <div class="form-group">
				<label for="exampleInputPassword1">业务编码</label>
				<input type="text" class="form-control" v-model="response.bcode">
			  </div>
			  <div class="form-group">
				<label for="exampleInputPassword1">负责人编号</label>
				<input type="text" class="form-control" v-model="response.wid">
			  </div>
			  <div class="form-group">
				<label for="exampleInputPassword1">工作时间</label>
				<input type="text" class="form-control" v-model="response.time">
			  </div>
			  
			  <button type="submit" class="btn btn-primary">提交</button>
			  <router-link to="/response/list" class="btn btn-default">取消</router-link>
			  <input type="hidden" name="rid">
			</form>
		</div>
		<!-- /.box-body -->
	  </div>
	  <!-- /.box -->
</template>

<script>
	import Qs from 'qs';
	export default {
		name:"ResponseModify",
		data() {
			return {
				response:{
					rid:0,
					bcode:"",
					wid:"",
					time:""
				}
			};
		},
		created() {//组件的创建生命周期函数
			// console.log("ddf");
			let newno = this.$route.params.rid;
			// console.log(newno);
			this.getResponse(newno);
		},
		methods: {
			getResponse(no) {
				this.axiosJSON.get("response/get?rid=" + no).then(result=>{
					this.response = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("response/modify",Qs.stringify(this.response)).then(result=>{
					if(result.data.status == "OK") {
						alert(result.data.message);
						this.$router.push("/response/list");//编程方式跳转到部门列表的组件
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

<template>
	<!-- Default box -->
	  <div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">修改业务信息</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
			  <div class="form-group">
				<label for="exampleInputPassword1">业务编码</label>
				<input type="text" class="form-control" v-model="business.code">
			  </div>
			  <div class="form-group">
				<label for="exampleInputPassword1">业务名称</label>
				<input type="text" class="form-control" v-model="business.name">
			  </div>
			  
			  <button type="submit" class="btn btn-primary">提交</button>
			  <router-link to="/business/list" class="btn btn-default">取消</router-link>
			  <input type="hidden" name="no">
			</form>
		</div>
		<!-- /.box-body -->
	  </div>
	  <!-- /.box -->
</template>

<script>
	import Qs from 'qs';
	export default {
		name:"BusinessModify",
		data() {
			return {
				business:{
					no:0,
					code:"",
					name:"",
				}
			};
		},
		created() {//组件的创建生命周期函数
			// console.log("ddf");
			let newno = this.$route.params.no;
			// console.log(newno);
			this.getBusiness(newno);
		},
		methods: {
			getBusiness(no) {
				this.axiosJSON.get("business/get?no=" + no).then(result=>{
					this.business = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("business/modify",Qs.stringify(this.business)).then(result=>{
					if(result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/business/list");//编程方式跳转到部门列表的组件
					}else {
						alert(result.data.message);
						this.$router.push("/business/list");
					}
				});
			}
		}
	}
</script>

<style>
</style>

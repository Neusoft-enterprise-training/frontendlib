<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改客户信息</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="modify()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">姓名</label>
				    <input type="text" class="form-control" v-model="customer.name">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">性别</label>
				    <input type="text" class="form-control" v-model="customer.sex">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">等级</label>
				    <input type="text" class="form-control" v-model="customer.level">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">入住时间</label>
				    <input type="text" class="form-control" v-model="customer.start">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">离开时间</label>
				    <input type="text" class="form-control" v-model="customer.end">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/customer/list" class="btn btn-default">取消</router-link>
				  <input type="hidden" name="no">
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name:"ConsumptionModify",
		data() {
			return {
				customer:{
					id:1,
					name:"",
					sex:"",
					level:"",
					start:"",
					end:""
				}
			};
		},
		created() {//组件的创建生命周期函数
			let customerId = this.$route.params.id
			this.getCustomer(customerId);
		},
		methods: {
			getCustomer(id) {
				axios.get("http://localhost:8200/Customer/get?id=" + id).then(result=>{
					this.customer = result.data.result;
				})
			},
			modify() {
				axios.post("http://localhost:8200/Customer/modify",this.customer).then(result=>{
					if(result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/customer/list");//编程方式跳转到部门列表的组件
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

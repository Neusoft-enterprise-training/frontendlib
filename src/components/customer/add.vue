<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加客户</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="add()">
				 <div class="form-group">
				   <label for="exampleInputEmail1">客户姓名</label>
				   <input type="text" class="form-control" v-model="customer.name" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">客户性别</label>
				   <input type="text" class="form-control" v-model="customer.sex" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">客户等级</label>
				   <input type="text" class="form-control" v-model="customer.level" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">客户入住时间</label>
				   <input type="text" class="form-control" v-model="customer.start" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">客户离开时间</label>
				   <input type="text" class="form-control" v-model="customer.end" required>
				 </div>
				 <button type="submit" class="btn btn-primary">提交</button>
				 <router-link to="/customer/list" class="btn btn-default">取消</router-link>
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name:"CustomerAdd",
		data() {
			return {
				customer:{
					name:"",
					sex:"",
					level:"",
					start:"",
					end:""
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/Customer/add",this.customer).then(result=>{
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

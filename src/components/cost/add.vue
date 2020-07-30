<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">新建记录</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="add()">
				 <div class="form-group">
				   <label>房间号</label>
				   <input type="text" class="form-control" v-model="cost.no" required>
				 </div>
				 <div class="form-group">
				   <label>洗浴用品花费</label>
				   <input type="text" class="form-control" v-model="cost.soupcost" required>
				 </div>
				 <div class="form-group">
				   <label>食物花费</label>
				   <input type="text" class="form-control" v-model="cost.foodcost" required>
				 </div>
				 <div class="form-group">
				   <label>床上用品花费</label>
				   <input type="text" class="form-control" v-model="cost.condomcost" required>
				 </div>

				 <button type="submit" class="btn btn-primary">提交</button>
				 <router-link to="/cost/list" class="btn btn-default">取消</router-link>
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	// import axios from "axios";
	import Qs from 'qs'
	export default {
		name:"CostAdd",
		data() {
			return {
				cost:{
					no:0,
					soupcost:"",
					foodcost:"",
					condomcost:""
				}
			};
		},
		methods:{
			add(){
				let a = this.cost;
				this.axiosJSON.post("Cost/add",Qs.stringify(a)).then(result=>{
					if(result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/cost/list");//编程方式跳转到部门列表的组件
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

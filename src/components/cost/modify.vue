<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改记录</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="modify()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">房间号</label>
				    <input type="text" class="form-control" v-model="cost.no">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">洗浴消耗</label>
				    <input type="text" class="form-control" v-model="cost.soupcost">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">食物消耗</label>
				    <input type="text" class="form-control" v-model="cost.foodcost">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">床上用品消耗</label>
				    <input type="text" class="form-control" v-model="cost.condomcost">
				  </div>
				  
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/cost/list" class="btn btn-default">取消</router-link>
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
		name:"CostModify",
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
		created() {//组件的创建生命周期函数
			let newno = this.$route.params.no;
			console.log(newno);
			this.getCost(newno);
		},
		methods: {
			getCost(no) {
				this.axiosJSON.get("Cost/get?no=" + no).then(result=>{
					this.cost = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("Cost/modify",Qs.stringify(this.cost)).then(result=>{
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

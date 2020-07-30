<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加订单</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="add()">
				 <div class="form-group">
				   <label for="exampleInputEmail1">客户ID</label>
				   <input type="text" class="form-control" v-model="order.cid" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">消费金额</label>
				   <input type="text" class="form-control" v-model="order.money" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">订单时间</label>
				   <input type="text" class="form-control" v-model="order.time" required>
				 </div>
				 <button type="submit" class="btn btn-primary">提交</button>
				 <router-link to="/order/list" class="btn btn-default">取消</router-link>
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default {
		name:"OrderAdd",
		data() {
			return {
				order:{
					cid:1,
					money:0,
					time:""
				}
			};
		},
		methods:{
			add(){
				this.axiosJSON.post("Order/add",this.order).then(result=>{
					if(result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/order/list");//编程方式跳转到部门列表的组件
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

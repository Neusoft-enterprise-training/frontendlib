<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改订单信息</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="modify()">
				  <div class="form-group">
				    <label for="exampleInputPassword1">客户ID</label>
				    <input type="text" class="form-control" v-model="order.cid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">消费金额</label>
				    <input type="text" class="form-control" v-model="order.money">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">订单时间</label>
				    <input type="text" class="form-control" v-model="order.time">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/order/list" class="btn btn-default">取消</router-link>
				  <input type="hidden" name="no">
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default {
		name:"OrderModify",
		data() {
			return {
				order:{
					id:1,
					cid:1,
					money:0,
					time:""
				}
			};
		},
		created() {//组件的创建生命周期函数
			let orderId = this.$route.params.id
			this.getOrder(orderId);
		},
		methods: {
			getOrder(id) {
				this.axiosJSON.get("Order/get?id=" + id).then(result=>{
					this.order = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("Order/modify",this.order).then(result=>{
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

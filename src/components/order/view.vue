<template>
<!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看订单</h3>
        </div>
        <div class="box-body">
          	<form method="post">
			  <div class="form-group">
			    <label for="exampleInputEmail1">订单ID</label>
				<input type="text" class="form-control" v-model="order.id">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">客户ID</label>
			    <input type="text" class="form-control" v-model="order.cid">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">订单金额</label>
			    <input type="text" class="form-control" v-model="order.money">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顶单时间</label>
			    <input type="text" class="form-control" v-model="order.time">
			  </div>
			  <router-link to="/order/list" class="btn btn-default">返回</router-link>
			  <input type="hidden" name="no">
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	export default {
		name:"OrderView",
		data() {
			return {
				order:{
					id:0,
					cid:1,
					money:0,
					time:""
				}
			};
		},
		props:{
			id:{required:true}
		},
		created() {//组件的创建生命周期函数
			this.getOrder();
		},
		methods: {
			getOrder() {
				this.axiosJSON.get("Order/get",{
					params:{
						id:this.id
					}
				}).then(result=>{
					this.order = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

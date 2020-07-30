<template>
<!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看顾客</h3>
        </div>
        <div class="box-body">
          	<form method="post">
			  <div class="form-group">
			    <label for="exampleInputEmail1">顾客ID</label>
				<input type="text" class="form-control" v-model="customer.id">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">顾客姓名</label>
			    <input type="text" class="form-control" v-model="customer.name">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客性别</label>
			    <input type="text" class="form-control" v-model="customer.sex">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客等级</label>
			    <input type="text" class="form-control" v-model="customer.level">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客入住时间</label>
			    <input type="text" class="form-control" v-model="customer.start">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客离开时间</label>
			    <input type="text" class="form-control" v-model="customer.end">
			  </div>
			  <router-link to="/customer/list" class="btn btn-default">返回</router-link>
			  <input type="hidden" name="no">
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	export default {
		name:"ConsumptionView",
		data() {
			return {
				customer:{
					id:0,
					name:"",
					sex:"",
					level:"",
					start:"",
					end:""
				}
			};
		},
		props:{
			id:{required:true}
		},
		created() {//组件的创建生命周期函数
			this.getCustomer();
		},
		methods: {
			getCustomer() {
				this.axiosJSON.get("Customer/get",{
					params:{
						id:this.id
					}
				}).then(result=>{
					this.customer = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

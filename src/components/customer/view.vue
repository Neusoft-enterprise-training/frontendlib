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
				<span></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">顾客姓名</label>
			    <span></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客性别</label>
			    <span></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客等级</label>
			    <span></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客入住时间</label>
			    <span></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">顾客离开时间</label>
			    <span></span>
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
				customer:{}
			};
		},
		created() {//组件的创建生命周期函数
			
		},
		methods: {
			getCustomer() {
				
			}
		}
	}
</script>

<style>
</style>

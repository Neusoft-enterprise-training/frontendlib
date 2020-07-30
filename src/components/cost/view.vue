<template>
<!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看记录</h3>
        </div>
        <div class="box-body">
          	<form method="post">
			  <div class="form-group">
			    <label for="exampleInputEmail1">房间号码</label>
				<span>{{cost.no}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">洗浴物品消耗</label>
			    <span>{{cost.soupcost}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">食物消耗</label>
			    <span>{{cost.foodcost}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">床上用品消耗</label>
			    <span>{{cost.condomcost}}</span>
			  </div>
			  <router-link to="/cost/list" class="btn btn-default">返回</router-link>
			  <input type="hidden" name="no">
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	export default {
		name:"CostView",
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
			let RoomId = this.$route.params.no
			this.getCost(RoomId);
		},
		methods: {
			getCost(id) {
				this.axiosJSON.get("Cost/get?no=" + id).then(result=>{
					this.cost = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

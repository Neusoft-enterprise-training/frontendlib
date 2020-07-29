<template>
<!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看房间</h3>
        </div>
        <div class="box-body">
          	<form method="post">
			  <div class="form-group">
			    <label for="exampleInputEmail1">房间号码</label>
				<span>{{room.no}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">房间类型</label>
			    <span>{{room.type}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">房间状态</label>
			    <span>{{room.state}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">管理人员</label>
			    <span>{{room.worker}}</span>
			  </div>
			  <router-link to="/room/list" class="btn btn-default">返回</router-link>
			  <input type="hidden" name="no">
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	export default {
		name:"RoomView",
		data() {
			return {
				room:{
					no:0,
					type:"",
					state:"",
					level:"",
					worker:""
				}
			};
		},
		created() {//组件的创建生命周期函数
			let RoomId = this.$route.params.no
			console.log(RoomId);
			this.getCustomer(RoomId);
		},
		methods: {
			getCustomer(id) {
				this.axiosJSON.get("Room/get?no=" + id).then(result=>{
					this.room = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

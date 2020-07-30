<template>
<!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看清洁记录</h3>
        </div>
        <div class="box-body">
          	<form method="post">
			  <div class="form-group">
			    <label for="exampleInputEmail1">记录编号</label>
				<span>{{clean.cleanid}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">清洁时间</label>
			    <span>{{clean.time}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">房间编号</label>
			    <span>{{clean.roomid}}</span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">清洁人员</label>
			    <span>{{clean.worker}}</span>
			  </div>
			  <router-link to="/clean/list" class="btn btn-default">返回</router-link>
			  <input type="hidden" name="no">
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	export default {
		name:"CleanView",
		data() {
			return {
				clean:{
					cleanid:0,
					time:"",
					roomid:"",
					worker:""
				}
			};
		},
		created() {//组件的创建生命周期函数
			let RoomId = this.$route.params.no
			console.log(RoomId);
			this.getClean(RoomId);
		},
		methods: {
			getClean(id) {
				this.axiosJSON.get("Clean/get?no=" + id).then(result=>{
					this.clean = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

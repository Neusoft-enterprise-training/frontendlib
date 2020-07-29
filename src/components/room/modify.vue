<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改房间信息</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="modify()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">房间号</label>
				    <input type="text" class="form-control" v-model="room.no">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间类型</label>
				    <input type="text" class="form-control" v-model="room.type">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间状态</label>
				    <input type="text" class="form-control" v-model="room.state">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">管理人员</label>
				    <input type="text" class="form-control" v-model="room.worker">
				  </div>
				  
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/room/list" class="btn btn-default">取消</router-link>
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
		name:"RoomModify",
		data() {
			return {
				room:{
					no:0,
					type:"",
					state:"",
					worker:""
				}
			};
		},
		created() {//组件的创建生命周期函数
			console.log("ddf");
			let newno = this.$route.params.no;
			console.log(newno);
			this.getRoom(newno);
		},
		methods: {
			getRoom(no) {
				this.axiosJSON.get("Room/get?no=" + no).then(result=>{
					this.room = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("Room/modify",Qs.stringify(this.room)).then(result=>{
					if(result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/room/list");//编程方式跳转到部门列表的组件
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

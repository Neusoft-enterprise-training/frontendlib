<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">新建房间</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="add()">
				 <div class="form-group">
				   <label>房间号</label>
				   <input type="text" class="form-control" v-model="rooms.no" required>
				 </div>
				 <div class="form-group">
				   <label>房间类型</label>
				   <input type="text" class="form-control" v-model="rooms.type" required>
				 </div>
				 <div class="form-group">
				   <label>房间状态</label>
				   <input type="text" class="form-control" v-model="rooms.state" required>
				 </div>
				 <div class="form-group">
				   <label>管理人员</label>
				   <input type="text" class="form-control" v-model="rooms.worker" required>
				 </div>

				 <button type="submit" class="btn btn-primary">提交</button>
				 <router-link to="/room/list" class="btn btn-default">取消</router-link>
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	// import axios from "axios";
	import Qs from 'qs'
	export default {
		name:"RoomAdd",
		data() {
			return {
				rooms:{
					no:0,
					type:"",
					state:"",
					worker:""
				}
			};
		},
		methods:{
			add(){
				console.log(this.rooms.type);
				let a = this.rooms;
				console.log(this.rooms.type);
				this.axiosJSON.post("Room/add",Qs.stringify(a)).then(result=>{
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

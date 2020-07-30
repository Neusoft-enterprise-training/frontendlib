<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">新建清洁记录</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="add()">
				 <div class="form-group">
				   <label>记录编号</label>
				   <input type="text" class="form-control" v-model="clean.cleanid" required>
				 </div>
				 <div class="form-group">
				   <label>清洁时间</label>
				   <input type="text" class="form-control" v-model="clean.time" required>
				 </div>
				 <div class="form-group">
				   <label>房间号</label>
				   <input type="text" class="form-control" v-model="clean.roomid" required>
				 </div>
				 <div class="form-group">
				   <label>清洁人员</label>
				   <input type="text" class="form-control" v-model="clean.worker" required>
				 </div>

				 <button type="submit" class="btn btn-primary">提交</button>
				 <router-link to="/clean/list" class="btn btn-default">取消</router-link>
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
		name:"CleanAdd",
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
		methods:{
			add(){
				let a = this.clean;
				this.axiosJSON.post("Clean/add",Qs.stringify(a)).then(result=>{
					if(result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/clean/list");//编程方式跳转到部门列表的组件
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

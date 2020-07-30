<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改清洁记录</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="modify()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">清洁编号</label>
				    <input type="text" class="form-control" v-model="clean.roomid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">清洁时间</label>
				    <input type="text" class="form-control" v-model="clean.time">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间编号</label>
				    <input type="text" class="form-control" v-model="clean.roomid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">清洁人员</label>
				    <input type="text" class="form-control" v-model="clean.worker">
				  </div>
				  
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/clean/list" class="btn btn-default">取消</router-link>
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
		name:"CleanModify",
		data() {
			return {
				clean:{
					cleanno:0,
					time:"",
					roomid:"",
					worker:""
				}
			};
		},
		created() {//组件的创建生命周期函数
			console.log("ddf");
			let newno = this.$route.params.no;
			console.log(newno);
			this.getClean(newno);
		},
		methods: {
			getClean(no) {
				this.axiosJSON.get("Clean/get?no=" + no).then(result=>{
					this.clean = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("Clean/modify",Qs.stringify(this.clean)).then(result=>{
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

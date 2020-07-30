<template>
	<!-- Default box -->
	  <div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">增加负责人条目</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
			 <div class="form-group">
			   <label for="exampleInputEmail1">条目编号</label>
			   <input type="text" class="form-control" v-model="response.rid" required>
			 </div>
			 <div class="form-group">
			   <label for="exampleInputPassword1">业务编码</label>
			   <input type="text" class="form-control" v-model="response.bcode" required>
			 </div>
			 <div class="form-group">
			   <label for="exampleInputPassword1">负责人编号</label>
			   <input type="text" class="form-control" v-model="response.wid" required>
			 </div>
			 <div class="form-group">
			   <label for="exampleInputPassword1">工作时间</label>
			   <input type="text" class="form-control" v-model="response.time" required>
			 </div>
			 <button type="submit" class="btn btn-primary">提交</button>
			 <router-link to="/response/list" class="btn btn-default">取消</router-link>
			</form>
		</div>
		<!-- /.box-body -->
	  </div>
	  <!-- /.box -->
</template>

<script>
	import Qs from 'qs'
	export default {
		name:"ResponseAdd",
		data() {
			return {
				response:{
					rid:0,
					bcode:"",
					wid:"",
					time:""
				}
			};
		},
		methods:{
			add(){
				// console.log(this.business.code);
				this.axiosJSON.post("response/add",Qs.stringify(this.response)).then(result=>{
					// 编程方式跳转到部门列表的组件
					if(result.data.status == "OK") {
						alert(result.data.message);
						this.$router.push("/response/list");//编程方式跳转到部门列表的组件
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

<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看负责人条目</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label>编号</label>
					<input type="text" class="form-control" v-model="response.rid">
				</div>
				<div class="form-group">
					<label>业务编码</label>
					<input type="text" class="form-control" v-model="response.bcode">
				</div>
				<div class="form-group">
					<label>负责人编号</label>
					<input type="text" class="form-control" v-model="response.wid">
				</div>
				<div class="form-group">
					<label>工作时间</label>
					<input type="text" class="form-control" v-model="response.time">
				</div>
				
				<router-link to="/response/list" class="btn btn-default">返回</router-link>
				<input type="hidden" name="rid">
			</form>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	export default {
		name:"ResponseView",
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
		created() {//组件的创建生命周期函数
			let ResponseId = this.$route.params.rid
			// console.log(BusinessId);
			this.getResponse(ResponseId);
		},
		methods: {
			getResponse(id) {
				this.axiosJSON.get("response/get?rid=" + id).then(result=>{
					this.response = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

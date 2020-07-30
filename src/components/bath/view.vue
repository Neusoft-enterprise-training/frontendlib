<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看服务项目</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label>服务项目编号</label>
					<input type="text" class="form-control" v-model="bath.id">
				</div>
				<div class="form-group">
					<label>服务项目名称</label>
					<input type="text" class="form-control" v-model="bath.name">
				</div>
				<div class="form-group">
					<label>服务项目收费</label>
					<input type="text" class="form-control" v-model="bath.charge">
				</div>
				
				<router-link to="/bath/list" class="btn btn-default">返回</router-link>
				<input type="hidden" name="id">
			</form>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	export default {
		name:"BathView",
		data() {
			return {
				bath:{
					no:0,
					name:"",
					charge:0,
				}
			};
		},
		created() {//组件的创建生命周期函数
			let BathId = this.$route.params.id
			// console.log(BusinessId);
			this.getBath(BathId);
		},
		methods: {
			getBath(id) {
				this.axiosJSON.get("bath/get?id=" + id).then(result=>{
					this.bath = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

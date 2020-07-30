<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看业务</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label>业务序号</label>
					<input type="text" class="form-control" v-model="business.no">
				</div>
				<div class="form-group">
					<label>业务编号</label>
					<input type="text" class="form-control" v-model="business.code">
				</div>
				<div class="form-group">
					<label>业务名称</label>
					<input type="text" class="form-control" v-model="business.name">
				</div>
				
				<router-link to="/business/list" class="btn btn-default">返回</router-link>
				<input type="hidden" name="no">
			</form>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	export default {
		name:"BusinessView",
		data() {
			return {
				business:{
					no:0,
					code:"",
					name:"",
				}
			};
		},
		created() {//组件的创建生命周期函数
			let BusinessId = this.$route.params.no
			// console.log(BusinessId);
			this.getBusiness(BusinessId);
		},
		methods: {
			getBusiness(id) {
				this.axiosJSON.get("business/get?no=" + id).then(result=>{
					this.business = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

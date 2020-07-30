<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">修改组信息</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
				<div class="form-group">
					<label>组号</label>
					<input type="text" class="form-control" v-model="group.groupID">
				</div>
				<div class="form-group">
					<label>组名</label>
					<input type="text" class="form-control" v-model="group.name">
				</div>
				<button type="submit" class="btn btn-primary">提交</button>
				<router-link to="/group/list" class="btn btn-default">取消</router-link>
				<input type="hidden" name="no">
			</form>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name: "GroupModify",
		data() {
			return {
				group: {
					groupID: 1,
					name: "",
				}
			};
		},
		created() {
			let groupID = this.$route.params.groupID
			this.getGroup(groupID);
		},
		methods: {
			getGroup(groupID) {
				axios.get("http://localhost:8200/Group/get?groupID=" + groupID).then(result => {
					this.group = result.data.result;
				})
			},
			modify() {
				axios.post("http://localhost:8200/Group/modify", this.group).then(result => {
					if (result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/group/list"); //编程方式跳转到部门列表的组件
					} else {
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>

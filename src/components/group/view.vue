<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看组</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label>组号</label>
					<input type="text" class="form-control" v-model="group.groupID">
				</div>
				<div class="form-group">
					<label>组名</label>
					<input type="text" class="form-control" v-model="group.name">
				</div>
				<router-link to="/group/list" class="btn btn-default">返回</router-link>
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
		name: "GroupView",
		data() {
			return {
				group: {
					groupID: this.$route.params.groupID,
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
				axios.get("http://localhost:8200/Group/get?groupID=" + this.$route.params.groupID).then(result => {
					this.group = result.data.result;
				})
			}
		}
	}
</script>

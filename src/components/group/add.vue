<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">增加组</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
				<div class="form-group">
					<label>组名</label>
					<input type="text" class="form-control" v-model="group.name" required>
				</div>
				<button type="submit" class="btn btn-primary">提交</button>
				<router-link to="/group/list" class="btn btn-default">取消</router-link>
			</form>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name: "GroupAdd",
		data() {
			return {
				group: {
					name: "",
				}
			};
		},
		methods: {
			add() {
				axios.post("http://localhost:8200/Group/add", this.group).then(result => {
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

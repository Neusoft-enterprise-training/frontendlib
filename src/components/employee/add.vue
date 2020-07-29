<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">增加雇员</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
				<div class="form-group">
					<label>姓名</label>
					<input type="text" class="form-control" v-model="employee.name" required>
				</div>
				<div class="form-group">
					<label>组号</label>
					<input type="text" class="form-control" v-model="employee.groupID" required>
				</div>
				<div class="form-group">
					<label>工资</label>
					<input type="text" class="form-control" v-model="employee.salary" required>
				</div>
				<div class="form-group">
					<label>电子邮箱</label>
					<input type="text" class="form-control" v-model="employee.email" required>
				</div>
				<div class="form-group">
					<label>电话</label>
					<input type="text" class="form-control" v-model="employee.phone" required>
				</div>
				<button type="submit" class="btn btn-primary">提交</button>
				<router-link to="/employee/list" class="btn btn-default">取消</router-link>
			</form>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name: "EmployeeAdd",
		data() {
			return {
				employee: {
					name: "",
					groupID: "",
					salary: "",
					email: "",
					phone: ""
				}
			};
		},
		methods: {
			add() {
				axios.post("http://localhost:8200/Employee/add", this.employee).then(result => {
					if (result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/employee/list"); //编程方式跳转到部门列表的组件
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

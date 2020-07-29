<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看雇员</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label>雇员ID</label>
					<input type="text" class="form-control" v-model="employee.employeeID">
				</div>
				<div class="form-group">
					<label>姓名</label>
					<input type="text" class="form-control" v-model="employee.name">
				</div>
				<div class="form-group">
					<label>组号</label>
					<input type="text" class="form-control" v-model="employee.groupID">
				</div>
				<div class="form-group">
					<label>工资</label>
					<input type="text" class="form-control" v-model="employee.salary">
				</div>
				<div class="form-group">
					<label>电子邮箱</label>
					<input type="text" class="form-control" v-model="employee.email">
				</div>
				<div class="form-group">
					<label>电话</label>
					<input type="text" class="form-control" v-model="employee.phone">
				</div>
				<router-link to="/employee/list" class="btn btn-default">返回</router-link>
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
		name: "EmployeeView",
		data() {
			return {
				employee: {
					employeeID: this.$route.params.employeeID,
					name: "",
					groupID: "",
					salary: "",
					email: "",
					phone: ""
				}
			};
		},
		created() {
			let employeeID = this.$route.params.employeeID
			this.getEmployee(employeeID);
		},
		methods: {
			getEmployee(employeeID) {
				axios.get("http://localhost:8200/Employee/get?employeeID=" + this.$route.params.employeeID).then(result => {
					this.employee = result.data.result;
				})
			}
		}
	}
</script>

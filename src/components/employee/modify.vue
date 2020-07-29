<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">修改雇员信息</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
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
				<button type="submit" class="btn btn-primary">提交</button>
				<router-link to="/employee/list" class="btn btn-default">取消</router-link>
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
		name: "EmployeeModify",
		data() {
			return {
				employee: {
					employeeID: 1,
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
				axios.get("http://localhost:8200/Employee/get?employeeID=" + employeeID).then(result => {
					this.employee = result.data.result;
				})
			},
			modify() {
				axios.post("http://localhost:8200/Employee/modify", this.employee).then(result => {
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

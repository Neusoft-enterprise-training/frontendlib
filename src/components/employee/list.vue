<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">雇员列表</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">编号</th>
						<th scope="col">姓名</th>
						<th scope="col">组号</th>
						<th scope="col">工资</th>
						<th scope="col">电子邮箱</th>
						<th scope="col">电话</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="employee in employeeList" v-bind:key="employee.employeeID">
						<td>{{employee.employeeID}}</td>
						<td>{{employee.name}}</td>
						<td>{{employee.groupID}}</td>
						<td>{{employee.salary}}</td>
						<td>{{employee.email}}</td>
						<td>{{employee.phone}}</td>
						<td>
							<router-link v-bind:to="'/employee/modify/'+ employee.employeeID" class="btn btn-default">修改</router-link>
							<a href="#" v-on:click="deleteEmployee(employee.employeeID)" class="btn btn-danger">删除</a>
							<router-link to="/employee/view" class="btn btn-default">查看</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/employee/add" class="btn btn-default">增加新雇员</router-link>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: "EmployeeList",
		data() {
			return {
				employeeList: [],
			};
		},
		created() { //当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods: {
			getList() {
				axios.get("http://localhost:8200/Employee/list/all").then(result => {
					this.employeeList = result.data.list;
				});
			},
			deleteEmployee(employeeID) {
				let checkresult = confirm("确定删除此雇员吗？");
				if (checkresult) {
					axios.post("http://localhost:8200/Employee/delete", {
						employeeID: employeeID
					}).then(result => {
						alert(result.data.message);
						if (result.data.status == "Fine") {
							this.getList();
						}
					});
				}
			}
		}
	}
</script>

<style>
</style>

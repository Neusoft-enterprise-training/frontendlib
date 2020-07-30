<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">组列表</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">组号</th>
						<th scope="col">组名</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="group in groupList" v-bind:key="group.groupID">
						<td>{{group.groupID}}</td>
						<td>{{group.name}}</td>
						<td>
							<router-link v-bind:to="'/group/modify/'+ group.groupID" class="btn btn-default">修改</router-link>
							<a href="#" v-on:click="deleteGroup(group.groupID)" class="btn btn-danger">删除</a>
							<router-link v-bind:to="'/group/view/'+ group.groupID" class="btn btn-default">查看</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/group/add" class="btn btn-default">增加组</router-link>
	</div>
</template>

<script>
	export default {
		name: "GroupList",
		data() {
			return {
				groupList: [],
			};
		},
		created() { //当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJSON.get("Group/list").then(result => {
					this.groupList = result.data.list;
				});
			},
			deleteGroup(groupID) {
				let checkresult = confirm("您确认要删除此组吗？");
				if (checkresult) {
					this.axiosJSON.post("Group/delete", {
						groupID: groupID
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

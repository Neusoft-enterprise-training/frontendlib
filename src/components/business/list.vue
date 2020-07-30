<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">业务管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编号</th>
				  <th scope="col">编码</th>
				  <th scope="col">名称</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="cm in businessList" v-bind:key="cm.no">
				  <td>{{cm.no}}</td>
				  <td>{{cm.code}}</td>
				  <td>{{cm.name}}</td>
				  <td>
					  <router-link v-bind:to="'/business/modify/'+ cm.no" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteBusiness(cm.no)" class="btn btn-danger">删除</a>
					  <router-link v-bind:to="'/business/view/'+ cm.no" class="btn btn-default">查看</router-link>
				  </td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/business/add" class="btn btn-default">增加新业务</router-link>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
		name: "BusinessList",
		data() {
			return {
				businessList: [],
			};
		},
		created() { //当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJSON.get("business/list/all/page").then(result => {
					this.businessList = result.data.list;
				});
			},
			deleteBusiness(businessID) {
				let checkresult = confirm("您确认要删除此雇员吗？");
				if (checkresult) {
					this.axiosJSON.post("business/delete", Qs.stringify({no:businessID})).then(result => {
						alert(result.data.message);
						if (result.data.status == "Fine") {
							this.getList();
						}
					});
					this.$router.push("/business/list");
				}
				this.$router.push("/business/list");
			}
		}
	}
</script>

<style>
</style>

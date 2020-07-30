<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">服务项目管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编码</th>
				  <th scope="col">名称</th>
				  <th scope="col">收费</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="cm in bathList" v-bind:key="cm.id">
				  <td>{{cm.id}}</td>
				  <td>{{cm.name}}</td>
				  <td>{{cm.charge}}</td>
				  <td>
					  <router-link v-bind:to="'/bath/modify/'+ cm.id" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteBath(cm.id)" class="btn btn-danger">删除</a>
					  <router-link v-bind:to="'/bath/view/'+ cm.id" class="btn btn-default">查看</router-link>
				  </td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/bath/add" class="btn btn-default">增加服务项目</router-link>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
		name: "BathList",
		data() {
			return {
				bathList: [],
			};
		},
		created() { //当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJSON.get("bath/list/all/page").then(result => {
					this.bathList = result.data.list;
				});
			},
			deleteBath(bathID) {
				let checkresult = confirm("您确认要删除此雇员吗？");
				if (checkresult) {
					this.axiosJSON.post("bath/delete", Qs.stringify({id:bathID})).then(result => {
						alert(result.data.message);
						if (result.data.status == "Fine") {
							this.getList();
						}
					});
					this.$router.push("/bath/list");
				}
				this.$router.push("/bath/list");
			}
		}
	}
</script>

<style>
</style>

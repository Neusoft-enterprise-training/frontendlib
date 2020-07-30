<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">业务负责人管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编号</th>
				  <th scope="col">业务编码</th>
				  <th scope="col">负责人编号</th>
				  <th scope="col">工作时间</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="cm in responseList" v-bind:key="cm.rid">
				  <td>{{cm.rid}}</td>
				  <td>{{cm.bcode}}</td>
				  <td>{{cm.wid}}</td>
				  <td>{{cm.time}}</td>
				  <td>
					  <router-link v-bind:to="'/response/modify/'+ cm.rid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteResponse(cm.rid)" class="btn btn-danger">删除</a>
					  <router-link v-bind:to="'/response/view/'+ cm.rid" class="btn btn-default">查看</router-link>
				  </td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/response/add" class="btn btn-default">增加负责人条目</router-link>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
		name: "ResponseList",
		data() {
			return {
				responseList: [],
			};
		},
		created() { //当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJSON.get("response/list/all/page").then(result => {
					this.responseList = result.data.list;
				});
			},
			deleteResponse(responseID) {
				let checkresult = confirm("您确认要删除此雇员吗？");
				if (checkresult) {
					this.axiosJSON.post("response/delete", Qs.stringify({rid:responseID})).then(result => {
						alert(result.data.message);
						if (result.data.status == "OK") {
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

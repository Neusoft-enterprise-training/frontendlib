<template>
<!-- Default box -->
<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">客房消耗情况</h3>
	</div>
	<div class="box-body">
		<table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">房间号</th>
			  <th scope="col">洗浴用品花费</th>
			  <th scope="col">食物花费</th>
			  <th scope="col">床上用品花费</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="cm in costList" v-bind:key="cm.no">
			  <td>{{cm.no}}</td>
			  <td>{{cm.soupcost}}</td>
			  <td>{{cm.foodcost}}</td>
			  <td>{{cm.condomcost}}</td>
			  <td><router-link v-bind:to="'/cost/modify/'+ cm.no" class="btn btn-default">修改</router-link>
				  <a href="#" v-on:click="deleteCost(cm.no)" class="btn btn-danger">删除</a> 
				  <router-link v-bind:to="'/cost/view/' + cm.no" class="btn btn-default">查看</router-link>
			   </td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/cost/add" class="btn btn-default">新建房间</router-link>
</div>
</template>

<script>
	import axios from "axios"
	import Qs from 'qs'
	export default {
		name:"CostList",
		data() {
			return {
				costList:[],
			};
		},
		created() {//当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/Cost/list/all/page").then(result => {
					this.costList = result.data.list;
				});
			},
			deleteCost(roomid) {
				let checkresult = confirm("确定删除此记录吗？");
				if (checkresult) {
					axios.post("http://localhost:8200/Cost/delete", Qs.stringify({no:roomid})).then(result => {
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

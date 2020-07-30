<template>
<!-- Default box -->
<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">清洁记录管理</h3>
	</div>
	<div class="box-body">
		<table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">记录编号</th>
			  <th scope="col">清洁时间</th>
			  <th scope="col">房间号码</th>
			  <th scope="col">清洁人员</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="cm in cleanList" v-bind:key="cm.cleanid">
			  <td>{{cm.cleanid}}</td>
			  <td>{{cm.time}}</td>
			  <td>{{cm.roomid}}</td>
			  <td>{{cm.worker}}</td>
			  <td><router-link v-bind:to="'/clean/modify/'+ cm.cleanid" class="btn btn-default">修改</router-link>
				  <a href="#" v-on:click="deleteRoom(cm.cleanid)" class="btn btn-danger">删除</a> 
				  <router-link v-bind:to="'/clean/view/' + cm.cleanid" class="btn btn-default">查看</router-link>
			   </td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/clean/add" class="btn btn-default">新建记录</router-link>
</div>
</template>

<script>
	import axios from "axios"
	import Qs from 'qs'
	export default {
		name:"CleanList",
		data() {
			return {
				cleanList:[],
			};
		},
		created() {//当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/Clean/list/all/page").then(result => {
					this.cleanList = result.data.list;
				});
			},
			deleteRoom(id) {
				console.log(id);
				let checkresult = confirm("确定删除此记录吗？");
				if (checkresult) {
					axios.post("http://localhost:8200/Clean/delete", Qs.stringify({cleanid:id})).then(result => {
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

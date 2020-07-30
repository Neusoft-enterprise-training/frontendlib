<template>
<!-- Default box -->
<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">房间管理</h3>
	</div>
	<div class="box-body">
		<table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">房间号</th>
			  <th scope="col">房间类型</th>
			  <th scope="col">房间状态</th>
			  <th scope="col">管理人员</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="cm in roomList" v-bind:key="cm.no">
			  <td>{{cm.no}}</td>
			  <td>{{cm.type}}</td>
			  <td>{{cm.state}}</td>
			  <td>{{cm.worker}}</td>
			  <td><router-link v-bind:to="'/room/modify/'+ cm.no" class="btn btn-default">修改</router-link>
				  <a href="#" v-on:click="deleteRoom(cm.no)" class="btn btn-danger">删除</a> 
				  <router-link v-bind:to="'/room/view/' + cm.no" class="btn btn-default">查看</router-link>
			   </td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/room/add" class="btn btn-default">新建房间</router-link>
</div>
</template>

<script>
	import axios from "axios"
	import Qs from 'qs'
	export default {
		name:"RoomList",
		data() {
			return {
				roomList:[],
			};
		},
		created() {//当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/Room/list/all/page").then(result => {
					this.roomList = result.data.list;
				});
			},
			deleteRoom(roomid) {
				let checkresult = confirm("确定删除此房间吗？");
				if (checkresult) {
					axios.post("http://localhost:8200/Room/delete", Qs.stringify({no:roomid})).then(result => {
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

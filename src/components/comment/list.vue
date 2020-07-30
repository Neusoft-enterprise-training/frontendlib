<template>
<!-- Default box -->
<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">评论管理</h3>
	</div>
	<div class="box-body">
		<table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">评论ID</th>
			  <th scope="col">客户ID</th>
			  <th scope="col">评价等级</th>
			  <th scope="col">评论时间</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="cm in commentList" v-bind:key="cm.id">
			  <td>{{cm.id}}</td>
			  <td>{{cm.cid}}</td>
			  <td>{{cm.level}}</td>
			  <td>{{cm.time}}</td>
			  <td><router-link v-bind:to="'/comment/modify/'+ cm.id" class="btn btn-default">修改</router-link>
				  <a href="#" v-on:click="deleteComment(cm.id)" class="btn btn-danger">删除</a> 
				  <router-link v-bind:to="{name:'commentview',params:{id:cm.id}}" class="btn btn-default">查看</router-link>
			   </td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/comment/add" class="btn btn-default">增加评论</router-link>
</div>
</template>

<script>
	export default {
		name:"CommentList",
		data() {
			return {
				commentList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created() {//当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("Comment/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=> {
					this.commentList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
					
				});
			},
			deleteComment(id){
				let checkresult = confirm("您确认要删除此顾客吗？");
				if(checkresult) {
					this.axiosJSON.post("Comment/delete",{id:id}).then(result=>{
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

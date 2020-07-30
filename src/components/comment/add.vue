<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加评论</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="add()">
				 <div class="form-group">
				   <label for="exampleInputEmail1">客户ID</label>
				   <input type="text" class="form-control" v-model="comment.cid" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">评价等级</label>
				   <input type="text" class="form-control" v-model="comment.level" required>
				 </div>
				 <div class="form-group">
				   <label for="exampleInputPassword1">评论时间</label>
				   <input type="text" class="form-control" v-model="comment.time" required>
				 </div>
				 <button type="submit" class="btn btn-primary">提交</button>
				 <router-link to="/comment/list" class="btn btn-default">取消</router-link>
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default {
		name:"CommentAdd",
		data() {
			return {
				comment:{
					cid:0,
					level:"",
					time:""
				}
			};
		},
		methods:{
			add(){
				this.axiosJSON.post("Comment/add",this.comment).then(result=>{
					if(result.data.status == "Fine") {
						alert(result.data.message);
						this.$router.push("/comment/list");//编程方式跳转到部门列表的组件
					}else {
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>

<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改评论信息</h3>
	        </div>
	        <div class="box-body">
	          	<form method="post" v-on:submit.prevent="modify()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">客户ID</label>
				    <input type="text" class="form-control" v-model="comment.cid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">评价等级</label>
				    <input type="text" class="form-control" v-model="comment.level">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">评论时间</label>
				    <input type="text" class="form-control" v-model="comment.time">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/comment/list" class="btn btn-default">取消</router-link>
				  <input type="hidden" name="no">
				</form>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default {
		name:"CommentModify",
		data() {
			return {
				comment:{
					id:1,
					cid:1,
					time:"",
					level:"",
				}
			};
		},
		created() {//组件的创建生命周期函数
			let commentId = this.$route.params.id
			this.getComment(commentId);
		},
		methods: {
			getComment(id) {
				this.axiosJSON.get("Comment/get?id=" + id).then(result=>{
					this.comment = result.data.result;
				})
			},
			modify() {
				this.axiosJSON.post("Comment/modify",this.comment).then(result=>{
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

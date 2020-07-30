<template>
<!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看评论</h3>
        </div>
        <div class="box-body">
          	<form method="post">
			  <div class="form-group">
			    <label for="exampleInputEmail1">评论ID</label>
				<input type="text" class="form-control" v-model="comment.id">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">顾客ID</label>
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
			  <router-link to="/comment/list" class="btn btn-default">返回</router-link>
			  <input type="hidden" name="no">
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	export default {
		name:"CommentView",
		data() {
			return {
				comment:{
					id:0,
					cid:0,
					level:"",
					time:""
				}
			};
		},
		props:{
			id:{required:true}
		},
		created() {//组件的创建生命周期函数
			this.getComment();
		},
		methods: {
			getComment() {
				this.axiosJSON.get("Comment/get",{
					params:{
						id:this.id
					}
				}).then(result=>{
					this.comment = result.data.result;
				})
			}
		}
	}
</script>

<style>
</style>

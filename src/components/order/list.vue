<template>
<!-- Default box -->
<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">订单管理</h3>
	</div>
	<div class="box-body">
		<table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">订单ID</th>
			  <th scope="col">顾客ID</th>
			  <th scope="col">消费金额</th>
			  <th scope="col">消费时间</th>
			   <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="om in orderList" v-bind:key="om.id">
			  <td>{{om.id}}</td>
			  <td>{{om.cid}}</td>
			  <td>{{om.money}}</td>
			  <td>{{om.time}}</td>
			  <td><router-link v-bind:to="'/order/modify/'+ om.id" class="btn btn-default">修改</router-link>
				  <a href="#" v-on:click="deleteOrder(om.id)" class="btn btn-danger">删除</a> 
				  <router-link v-bind:to="{name:'orderview',params:{id:om.id}}" class="btn btn-default">查看</router-link>
			   </td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/order/add" class="btn btn-default">增加新订单</router-link>
</div>
</template>

<script>
	export default {
		name:"OrderList",
		data() {
			return {
				orderList:[],
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
				this.axiosJSON.get("Order/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=> {
					this.orderList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
					
				});
			},
			deleteOrder(id){
				let checkresult = confirm("您确认要删除此顾客吗？");
				if(checkresult) {
					this.axiosJSON.post("Order/delete",{id:id}).then(result=>{
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

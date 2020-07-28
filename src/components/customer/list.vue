<template>
<!-- Default box -->
<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">客户管理</h3>
	</div>
	<div class="box-body">
		<table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">编号</th>
			  <th scope="col">编码</th>
			  <th scope="col">名称</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="cm in customerList" v-bind:key="cm.id">
			  <td>{{cm.id}}</td>
			  <td>{{cm.name}}</td>
			  <td>{{cm.sex}}</td>
			  <td>{{cm.level}}</td>
			  <td>{{cm.start}}</td>
			  <td>{{cm.end}}</td>
			  <td><router-link v-bind:to="'/customer/modify/'+ cm.id" class="btn btn-default">修改</router-link>
				  <a href="#" v-on:click="deleteCustomer(cm.id)" class="btn btn-danger">删除</a> 
				  <router-link to="/customer/view" class="btn btn-default">查看</router-link>
			   </td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/customer/add" class="btn btn-default">增加新顾客</router-link>
</div>
</template>

<script>
	import axios from "axios"
	export default {
		name:"ConsumptionList",
		data() {
			return {
				customerList:[],
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
				axios.get("http://localhost:8200/Customer/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=> {
					this.customerList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
					
				});
			},
			deleteCustomer(id){
				let checkresult = confirm("您确认要删除此顾客吗？");
				if(checkresult) {
					axios.post("http://localhost:8200/Customer/delete",{id:id}).then(result=>{
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

<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">记录列表</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">时间</th>
						<th scope="col">雇员ID</th>
						<th scope="col">记录类型</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="record in recordList" v-bind:key="record.time">
						<td>{{record.start}}</td>
						<td>{{record.employeeID}}</td>
						<td>{{record.type}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecordList",
		data() {
			return {
				recordList: [],
			};
		},
		created() { //当前组件的生命周期方法，组件创建以后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJSON.get("Record/list").then(result => {
					this.recordList = result.data.list;
				});
			}
		}
	}
</script>

<template>
	<view class="manageScore">
		<h2 class="top">成绩管理</h2>
		
		<navigator url="/pages/AddStudent/AddStudent">
			<button class="addButton" @click="handleAdd">添加学生</button>
		</navigator>
		<hr />
		<br />
		<table>
			<tr class="tr">
				<th class="th-small green">班级</th>
				<th class="th-small green">学号</th>
				<th class="th-small green">姓名</th>
				<th class="th-small green">性别</th>
				<th class="th-max green">操作</th>
			</tr>
			<tr class="tr" v-for="item in studentList" :key="item.studentNumber">
				<th class="th-small font-green">{{item.class}}</th>
				<th class="th-small font-green">{{item.studentNumber}}</th>
				<th class="th-small font-green">{{item.name}}</th>
				<th class="th-small font-green">{{item.gender}}</th>
				<th class="th-max font-red">
					<button class="small-btn" @click="toXiang">{{item.cao.xiang}}</button>
					<button class="small-btn" @click="del">{{item.cao.del}}</button>
				</th>
			</tr>	
		</table>
	</view>
</template>

<script setup lang="ts">
	import score from '../../store/modules/score';
	const studentList = score.studentList
	function handleAdd(){
		wx.reLaunch({
			url:'/pages/AddStudent/AddStudent'
		})
	}
	function toXiang(){
		wx.navigateTo({
			url:'/components/xiangqing/student-xiang/student-xiang'
		})
	}
	function del(){
		
	}
</script>

<style lang="stylus">
.addButton{
	width: 230rpx
	height: 80rpx
	line-height: 80rpx
	font-size: 42rpx
	border: none;
	text-align: center
	background-color: #69b3f0;
	color: white;
	border-radius: 5px
	margin: 30rpx
}
.tr{
	display: flex
	margin: 3rpx 5rpx;
}
.th-small{
	width: 15%;
	height: 75rpx;
	line-height: 75rpx;
	text-align: center
}
.th-max{
	width: 40%;
	height: 75rpx;
	line-height: 75rpx;
	text-align: center
	display: flex
}
.green{
	background-color: #4ca67f;
	color: #fff;
}
.font-green{
	color: #4ca67f;
}
.font-red{
	color: red;
}
.small-btn{
	width: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 28rpx;
	margin: 10rpx auto;
}
.high{
	
}
.top{
	font-size: 42rpx
	text-indent: 48px
	text-shadow: 4px 4px 3px rgba(0,0,0,0.3)
	color: #9f86e7
}
</style>
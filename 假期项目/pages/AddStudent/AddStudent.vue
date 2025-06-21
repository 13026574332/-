<template>
	<view class="addStudent">
		<view class="header">
			<h2 class="stud">添加学生信息</h2>
		</view>
		<hr />
		<view class="Input-form">
			<label for="" class="label">
				<tr class="tr">
					<td class="xing">*</td>
					<td class="chi">学号:</td>
					<td class="information">
						<input class="input" type="text" style="border: 1px solid #666;"/>
					</td>
				</tr>
				<tr class="tr">
					<td class="xing">*</td>
					<td class="chi">密码:</td>
					<td class="information">
						<input class="input" type="text" style="border: 1px solid #666;"/>
					</td>
				</tr>
				<tr class="tr">
					<td class="xing">*</td>
					<td class="chi">重复密码:</td>
					<td class="information">
						<input class="input" type="text" style="border: 1px solid #666;"/>
					</td>
				</tr>
				<tr class="tr">
					<td class="xing">*</td>
					<td class="chi">学号:</td>
					<td class="information">
						<input class="input" type="text" style="border: 1px solid #666;"/>
					</td>
				</tr>
				<tr class="tr">
					<td class="xing">*</td>
					<td class="chi">姓名:</td>
					<td class="information">
						<input class="input" type="text" style="border: 1px solid #666;"/>
					</td>
				</tr>
				<tr class="tr">
					<td class="xing">*</td>
					<td class="chi">性别:</td>
					<td class="information">
						<radio-group name="">
							<label class="radio">
								<radio value="男" title="sex"/>
								<text>
									男
								</text>
							</label>
							<label class="radio">
								<radio value="女" title="sex"/>
								<text>
									女
								</text>
							</label>
						</radio-group>
					</td>
				</tr>
				<tr class="tr">
					<td class="xing">*</td>
					<td class="chi">联系电话:</td>
					<td class="information">
						<input class="input" type="text" style="border: 1px solid #666;"/>
					</td>
				</tr>
			</label>
		</view>
		<view class="btn-box">
			<button class="btn-left" @click="handleAdd">添加</button>
			<button class="btn-right" @click="handleAdd">返回</button>
		</view>
		
	</view>
</template>

<script lang="ts" setup>
	function handleAdd(){
		wx.reLaunch({
			url:'/pages/tabBar/score/score'
		})
	}
</script>

<style>
.Input-form{
	display: flex;
	width: 100%;
	/* height: 300rpx; */
	/* background-color: #eee; */
	margin: 100rpx 0;
}
.info{
	width: 40rpx;
	height: 30rpx;
	line-height: 30rpx;
	margin-right: 10rpx;
	
}
.header{
	width: 100%;
	height: 40rpx;
	line-height: 40rpx;
}
.stud{
	font-size: 48rpx;
	color: #9f86e7;
	text-shadow: 5px 4px 3px rgba(0, 0, 0, 0.3);
	text-align: center;
	margin-top: 30rpx;
}
.xing{
	color: red;
}
.tr{
	display: flex;
	margin-bottom: 20rpx;
}
.xing{
	width: 5%;
}
.chi{
	width: 25%;
	
}
.information{
	width: 70%;
}
.label{
	width: 80%;
	margin: auto;
}
.radio{
	margin-right: 20rpx;
}
.input{
	border-radius: 6px;
	text-indent: 14px;
	padding: 10rpx 20rpx;
}
.btn-box{
	width: 300rpx;
	margin: 10rpx auto;
	display: flex;
}
.btn-left{
	width: 200rpx;
	height: 60rpx;
	line-height: 60rpx;
	border: none;
	background-color: #366ec5;
	color: #fff;
	margin-right: 30rpx;
	cursor: pointer;
	font-size: 28rpx;
}
.btn-right{
	width: 200rpx;
	height: 60rpx;
	line-height: 60rpx;
	border: none;
	background-color: #fff;
	color: #366ec5;
	margin-right: 30rpx;
	cursor: pointer;
	font-size: 28rpx;
}

</style>

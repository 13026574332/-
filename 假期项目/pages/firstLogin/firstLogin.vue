<template>
	<view class="firstLogin">
		<view class="back">
			<image class="img" src="https://img.picui.cn/free/2025/05/15/6825c9348612e.jpg" mode=""></image>
		</view>
		<view class="btn-box">
			<button class="button-student" @click="handleLogin">学生登录</button>
			<button class="button-teacher" @click="handleLogin">教师登录</button>
		</view>
		
	</view>
</template>

<script lang="ts" setup>
	
	function handleLogin(){
		wx.reLaunch({
			url:'/pages/toLogin/toLogin'
		})
		console.log("点击了")
	}
</script>

<style scoped>
.back{
	width: 100%;
	height: 100%;
	background-color: #eee;
}
.img{
	width: 100%;
	height: 600rpx;
}
.btn-box{
	width: 100%;
	height: 100rpx;
	text-align: center;
	line-height: 100rpx;
	background-color: #eee;
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}
.button-student{
	width: 300rpx;
	height: 70rpx;
	line-height: 70rpx;
	background-color: #3ec6ff;
	color: #fff;
	font-size: 38rpx;
	text-align: center;
	border-radius: 7px;
	margin: 15rpx auto;
}
.button-teacher{
	width: 300rpx;
	height: 70rpx;
	line-height: 70rpx;
	background-color: #fff;
	color: #3ec6ff;
	font-size: 38rpx;
	text-align: center;
	border-radius: 7px;
	margin: 15rpx auto;
}
</style>

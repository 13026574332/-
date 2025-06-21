<template>
	<view class="myself">
		<view class="info">
			<image src="" mode=""></image>
		</view>
		<view class="xiang">
			<uni-list>
				<uni-list-item>11</uni-list-item>
			</uni-list>
		</view>
		<!-- 删除用户信息，退出登录 -->
		<button @click="withdraw">退出登录</button>
	</view>
</template>

<script lang="ts" setup>
	function withdraw(){
		wx.reLaunch({
			url:'/pages/firstLogin/firstLogin'
		})
	}
</script>

<style>
.myself{
	background-color: #eee;
}
</style>

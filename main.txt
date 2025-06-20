<template>
	<view class="login">
		<view class="logoPic">
			<image class="back-img" src="https://img.picui.cn/free/2025/05/15/6825c9348612e.jpg" mode=""></image>
		</view>
		<view class="switch">
			<ul class="ul">
				<li class="tab-item" :class="{active:currentTab === 0}" @click="change(0)">
					登录
				</li>
				<li class="tab-item" :class="{active:currentTab === 1}" @click="change(1)">
					注册
				</li>
			</ul>
		</view>
		<view class="input-form">
			<label for="" class="label">用户名:</label>
			<input class="input" type="text" placeholder="用户名"/>
			<br />
			<label for="">密码:</label>
			<input class="input" type="password" placeholder="密码"/>
			<label for="" v-if="currentTab === 1">确认密码:</label>
			<input class="input" type="password" v-if="currentTab === 1" placeholder="密码"/>
			<view class="btn-box">
				<button class="tologin" @click="gotoLogin()" v-if="currentTab === 0">点击登录</button>
				<button class="tologin" @click="gotoLogin()" v-else>点击注册</button>	
			</view>
			
		</view>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	const currentTab = ref(0)
	function gotoLogin(){
		console.log("点击了登录")
		wx.reLaunch({
		  url: '/pages/tabBar/index/index',
		  // wx.showToast({
		  //     title: '登录成功',
		  //     icon: 'success', 
		  //     duration: 2000,
		      // success: () => {
		        
		      // }
		    })
		  
	}
	function change(index){
		 currentTab.value = index  // 更新选中状态
		  console.log("点击了标签", index === 0 ? "登录" : "注册")
	}
</script>

<style>
.logoPic{
	width: 640rpx;
	height: 360rpx;
	margin: 20rpx auto;
}
.back-img{
	margin: 10rpx auto;
}
.switch{
	width: 500rpx;
	height: 90rpx;
	line-height: 90rpx;
	color: black;
	font-size: 38rpx;
	margin: 50px auto;
}
.ul{
	list-style: none;
	display: flex;
	margin: 10rpx auto;
}
.tab-item {
  margin: 8rpx auto;
  font-size: 38rpx;
  transition: all 0.4s; /* 添加过渡效果 */
  
}
.active {
  color: red; /* 字体变红 */
  border-bottom: 2px solid red; /* 底部红横杠 */
  font-weight: 500; /* 加粗突出 */
}
.input-form{
	width: 340px;
	height: 150px;
	margin: 80rpx auto;
}
.btn-box{
	display: flex;
	margin-top: 15px;
	
}
.tologin{
	border: none;
	background-color: #499ed1;
	color: #fff;
}
.input{
	margin: 20px auto;
}
.label{
	font-size: 38rpx;
}
</style>

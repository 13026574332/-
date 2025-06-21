<template>
	<view class="score">
		<scroll-view scroll-x="true" enable-flex="true" class="Xscroll">
			<view class="sel" @click="first">课程表</view>
			<view class="sel" @click="second">成绩查询</view>
			<view class="sel" @click="third">学分统计</view>
			<view class="sel" @click="forth">其他</view>
		</scroll-view>
		
		<course v-if="navIndex === 1"></course>
		<MangeScore v-if="navIndex === 2"></MangeScore>
		<static v-if="navIndex === 3"></static>
		<Other v-if="navIndex === 4"></Other>
		
		
	</view>
</template>
<script setup lang="ts">
	import {ref,reactive} from 'vue'
	import course from "@/components/score/course.vue"
	import MangeScore from "@/components/score/MangeScore.vue"
	import Static from '@/components/score/static.vue'
	import Other from '@/components/score/other.vue'
	
	const navIndex = ref(1)
	function first(){
		navIndex.value = 1
	}
	function second(){
		navIndex.value = 2
		console.log("navIndex = 2")
	}
	function third(){
		navIndex.value = 3
	}
	function forth(){
		navIndex.value = 4
	}
	function handleAdd(){
		wx.reLaunch({
			url:'pages/AddStudent/AddStudent'
		})
	}
			
	// 	}
	// }
</script>

<style lang="stylus">

.Xscroll{
	display: flex
}
.sel{
	margin: 3rpx 20px;
}
</style>

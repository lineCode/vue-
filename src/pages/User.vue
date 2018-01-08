<template>
	<div class="user">
		<ul class="user_one">
			<li class="user_one_li1">
				<div class="user_one_img">
					<img class="info-tit-logo" src="//thirdqq.qlogo.cn/g?b=sdk&amp;k=AVJ6TvpOxMKFPnL8ia29yZw&amp;s=140&amp;t=1507380316">
				</div>
				<div class="user_one_title">
					<h2>未来梦幻</h2>
				</div>
				<div class="user_one_img">
					
				</div>
			</li>
			<li class="user_one_li2">
				<span>订单管理</span>
				<span>收藏</span>
			</li>
		</ul>
		<ul class="user_two">
			<li><span>余额</span><span>2.00</span><span>＞</span></li>
			<li><span>优惠券</span><span>0</span><span>＞</span></li>
		</ul>
		<ul class="user_three">
			<li><span>QQ会员学习专区</span><span>＞</span></li>
			<li><span>上课流量免费</span><span>＞</span></li>
			<li><span>分销课程</span><span>＞</span></li>
		</ul>
		<ul class="user_two">
			<li><span>反馈建议</span><span></span><span>＞</span></li>
			<li><span>设置</span><span></span><span>＞</span></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'user'
	}
</script>

<style>
	.user{
		margin-top: 0.45rem;
		height: 80rem;
		width: 100%;
		position: fixed;
		background: #f2f2f6;
	}
	.user .user_one{
		height: 1.8rem;
		background: #fff;
	}
	.user .user_one li{
		height: 0.9rem;
	}
	.user .user_one .user_one_li1{
		border-bottom: 0.01rem solid #f2f2f6;
		overflow: hidden;
		padding-top: 0.15rem;
	}
	.user .user_one .user_one_li1 .user_one_img{
		height:0.6rem;
		width: 0.6rem;
		float: left;
		margin-left: 0.1rem;
	}
	.user .user_one .user_one_li1 .user_one_title{
		float: left;
		height:0.6rem;
		line-height: 0.6rem;
		margin-left: 0.2rem;
	}
	.user .user_one .user_one_li1 .user_one_img img{
		width: 100%;
		height: 100%;
	}
	.user .user_one .user_one_li2 span{
		display: inline-block;
		height:0.6rem;
		line-height: 0.6rem;
		margin-left: 0.3rem;
		float: left;
	}
	.user .user_one .user_one_li2 span:nth-child(2){
		margin-left: 1.8rem;
	}
	.user .user_two{
		margin-top: 0.08rem;
		height: 0.9rem;
		background: #fff;
		padding-left: 0.2rem;
	}
	.user .user_two li{
		padding-right: 0.4rem;
		height: 0.45rem;
		line-height: 0.45rem;
		position: relative;
	}
	.user .user_two li:nth-child(1){
		border-bottom: 0.01rem solid #f2f2f6;
	}
	.user .user_two li span:nth-child(1){
		float: left;
	}
	.user .user_two li span:nth-child(2){
		float: right;
	}
	.user .user_two li span:nth-child(3){
		position: absolute;
		right: 0.1rem;
		color: #777;
		font-size: 0.2rem;
		font-weight: 700;
	}
	.user .user_three{
		margin-top: 0.08rem;
		height: 1.35rem;
		background: #fff;
		padding-left: 0.2rem;
	}
	.user .user_three li{
		padding-right: 0.4rem;
		height: 0.45rem;
		line-height: 0.45rem;
		position: relative;
		border-bottom: 0.01rem solid #f2f2f6;
	}
	.user .user_three li span:nth-child(1){
		float: left;
	}
	.user .user_three li span:nth-child(2){
		position: absolute;
		right: 0.1rem;
		color: #777;
		font-size: 0.2rem;
		font-weight: 700;
	}
</style>
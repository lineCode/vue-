<template>
	<div class="index">
		<div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide">
	      	<a class="pic" href="https://m.jiuxian.com/mobile/2017/XBYTM/index.html"><img src="../assets/banner1.jpg" class="swiper-lazy"></a>
	      </div>
	      <div class="swiper-slide"><a class="pic" href="https://m.jiuxian.com/m_v1/dynamic/mob01/150698"><img src="../assets/banner2.jpg" class="swiper-lazy"></a></div>
	      <div class="swiper-slide"><a class="pic" href="https://m.jiuxian.com/m_v1/dynamic/mob01/151500"><img src="../assets/banner3.jpg"></a></div>
	      <div class="swiper-slide"><a class="pic" href="https://m.jiuxian.com/m_v1/dynamic/mob01/151662"><img src="../assets/banner4.jpg" class="swiper-lazy"></a></div>
	      <div class="swiper-slide"><a class="pic" href="https://m.jiuxian.com/mobile/SP/GJGPPR/index.html"><img src="../assets/banner5.jpg" class="swiper-lazy"></a></div>
	      <div class="swiper-slide"><a class="pic" href="https://m.jiuxian.com/m_v1/dynamic/mob01/151403"><img src="../assets/banner6.jpg" class="swiper-lazy"></a></div>
	      <div class="swiper-slide">
	      	<a class="pic" href="https://m.jiuxian.com/mobile/POP/TWGLTM/index.html">
	      		<img src="../assets/banner7.jpg" class="swiper-lazy">
	      	</a>
	      </div>
	      <div class="swiper-slide"><a class="pic" href="https://m.jiuxian.com/m_v1/dynamic/mob01/151403"><img src="../assets/banner8.jpg" class="swiper-lazy"></a></div>
	    	</div>
	    	<div class="swiper-pagination"></div>
	    </div>
		<div class="category">
			<ul class="index_ul1">
				<li v-for="data in mydata7" @click="handleClick">{{data.username}}</li>
			</ul>
		</div>
		<div class="zhibo">
			<dl class="zhibo_dl" @click="handleClick">
				<dt class="zhibo_dt">
					<img data-isload="1" src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCiaibomDIERy8hBhEOYVE1V6F2Pia9lwYG7rXDWkFkGibo2gpSeL4LI4QBhnj9YBoV80Y/220?tp=webp" data-src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCiaibomDIERy8hBhEOYVE1V6F2Pia9lwYG7rXDWkFkGibo2gpSeL4LI4QBhnj9YBoV80Y/220" class="live__cover">
				</dt>
				<dd class="zhibo_dd">
					<h3>一“版”一眼,版式与...</h3>
					<p>涵品讲师-浆糊</p>
					<p><span>直播中</span><span>666人在上课</span></p>
				</dd>
			</dl>
			<dl class="zhibo_dl" @click="handleClick">
				<dt class="zhibo_dt">
					<img data-isload="1" src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAwYHJCpqIlj5cY2BdWocvX2BCicTRqO9WVxTkHcHBTbdJHqHY3nBriayRKyqFcaEESE/220?tp=webp" data-src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAwYHJCpqIlj5cY2BdWocvX2BCicTRqO9WVxTkHcHBTbdJHqHY3nBriayRKyqFcaEESE/220" class="live__cover">
				</dt>
				<dd class="zhibo_dd">
					<h3>java前后台还可以这么玩</h3>
					<p>值坐标-赵老师</p>
					<p><span>直播中</span><span>124人在上课</span></p>
				</dd>
			</dl>
			<dl class="zhibo_dl" @click="handleClick">
				<dt class="zhibo_dt">
					<img data-isload="1" src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDD9qC2PQlWFKIiaLHgf8dHrePTyY5NRgESdF0a17eZdkhicHjU5I7o0eaGJ6XD0U6qA/220?tp=webp" data-src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDD9qC2PQlWFKIiaLHgf8dHrePTyY5NRgESdF0a17eZdkhicHjU5I7o0eaGJ6XD0U6qA/220" class="live__cover">
				</dt>
				<dd class="zhibo_dd">
					<h3>在游戏中学习开发java</h3>
					<p>优效学院_马士兵</p>
					<p><span>直播中</span><span>63人在上课</span></p>
				</dd>
			</dl>
			<dl class="zhibo_dl" @click="handleClick">
				<dt class="zhibo_dt">
					<img data-isload="1" src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCTicpWSS6jX8gCJqlRG7YttbgcJPfHAGtvVkkUQffCxt1EAQdwjJAZsnGXkHgo6K5I/220?tp=webp" data-src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCTicpWSS6jX8gCJqlRG7YttbgcJPfHAGtvVkkUQffCxt1EAQdwjJAZsnGXkHgo6K5I/220" class="live__cover">
				</dt>
				<dd class="zhibo_dd">
					<h3>canvas画图之阴阳变化</h3>
					<p>值坐标-舒克老师</p>
					<p><span>直播中</span><span>63人在上课</span></p>
				</dd>
			</dl>
			<dl class="zhibo_dl" @click="handleClick">
				<dt class="zhibo_dt">
					<img data-isload="1" src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLALQa4RwS6uIbKWMl0NS6GejpDPmr2WQUarkof8U8ub2vwZb5Z2wVGibNVWFUf3S6kU/220?tp=webp" data-src="//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLALQa4RwS6uIbKWMl0NS6GejpDPmr2WQUarkof8U8ub2vwZb5Z2wVGibNVWFUf3S6kU/220" class="live__cover">
				</dt>
				<dd class="zhibo_dd">
					<h3>【齐论】新品如何快速发展</h3>
					<p>齐论高级讲师-悟空</p>
					<p><span>直播中</span><span>66人在上课</span></p>
				</dd>
			</dl>
		</div>
		<Course></Course>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import Course from '../components/Course';
	export default {
		name:'index',
		props:[],
		computed:{
			...mapState(["mydata7"])
		},
		data(){
			return {
				addClass:false
			}
		},
		methods:{
			handleClick(e){
				var a=e.target.innerHTML;
				if(!a){
					alert('请不要点图片好吗？，谢谢配合哟');
					return;
				}
				alert("您点击的是："+a+"。请把弹窗给关一下，谢谢")
			}
		},
		components:{Course},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
		      pagination: {
		        el: '.swiper-pagination',
		      },
		      autoplay: {
					    delay: 3000	    
				    },
			  loop:true
   				});
		}
	}
</script>

<style>
	.index{
		margin-top: 0.45rem;
		padding-bottom: 0.7rem;
	}
	.index .swiper-container{
		width: 100%;
		height: 1.43rem;
		text-align: center;
		overflow: hidden;
	}
	.index .swiper-container img{
		width: 100%;
		height: auto;
	}
	.index .swiper-pagination-bullet-active{
		background: white;
	}
	.index .category{
		height: 0.46rem;
	}
	.index .category .index_ul1{
		width: 90%;
		height: 0.46rem;
		padding-left: 0.13rem;
		white-space: nowrap;
		overflow: hidden;
	}
	.index .category .index_ul1 li{
		height: 0.46rem;
		line-height: 0.46rem;
		display: inline-block;
		text-align: center;
		margin-right: 0.26rem;
		font-size: 0.14rem;
		white-space: nowrap;
	}
	.index .category .index_ul1 li:hover{
		font-weight: 700;
		font-size: 0.2rem;
	}
	.zhibo{
		padding-left: 0.1rem;
	}
	.zhibo .zhibo_dl{
		height: 0.98rem;
		margin-top: 0.05rem;
	}
	.zhibo .zhibo_dt{
		width: 45%;
		height: 0.98rem;
		float: left;
		border-radius: 0.04rem;
		overflow: hidden;
		height: 0.93rem;
	}
	.zhibo .zhibo_dd{
		float: left;
		margin-left: 0.1rem;
		height: 0.98rem;
		width: 50%;
	}
	.zhibo .zhibo_dd h3{
		margin-top: 0.07rem;
		height: 0.25rem;
		color: #000;
		overflow: hidden;
		white-space: nowrap;
	    text-overflow: ellipsis;
	    word-wrap: normal;
	}
	.zhibo .zhibo_dd p{
		margin-top: 0.07rem;
		font-size: 0.12rem;
	}
	.zhibo .zhibo_dd p span:nth-child(1){
		padding-left: 0.15rem;
		color: #23b8ff;
		font-size: 0.14rem;
		background: url(//9.url.cn/edu/mobilev2/pages/index/img/inclass.ede0540.gif) no-repeat 0 0.03rem;
    	background-size: 0.11rem 0.11rem;
	}
	.zhibo .zhibo_dd p span:nth-child(2){
		color: #777;
		margin-left: 0.15rem;
	}
	.zhibo .zhibo_dt img{
		width: 100%;
	}
</style>
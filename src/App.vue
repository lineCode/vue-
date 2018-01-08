<template>
  <div id="app">
  	<Header></Header>
  	<nav class="nav_footer">
  		<ul class="nav_footer_list">
  			<li class="nav_item"><router-link to="/index"><i class="iconfont icon-41kongxinfangzi"></i>首页</router-link></li>
  			<li class="nav_item"><router-link to="/classifly"><i class="iconfont icon-diqiu"></i>分类</router-link></li>
  			<li class="nav_item"><router-link to='/timetable'><i class="iconfont icon-qiaquan"></i>课程表</router-link></li>
  			<li class="nav_item"><router-link :to='Ls'><i class="iconfont icon-wode"></i>我的</router-link></li>
  		</ul>
  	</nav>
   <!-- <img src="./assets/logo.png">-->
    <transition name="fade" appear mode="out-in">
    	<router-view/>
    </transition>
  </div>
</template>

<script>
	import Header from './components/Header';
export default {
  computed:{
  	Ls(){
  		return localStorage.getItem('username')?'/user':'/login'
  	}
  },
  components:{
  	Header
  }
}
</script>

<style>
body{
	font-size: 0.16rem;
}
.fade-enter-active, .fade-leave-active {
	  	transition: opacity .5s
	}
.fade-enter, .fade-leave-to {
		opacity: 0;
}

#app .nav_footer{
  position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9020;
	background: #fff;
	border-top: 0.01rem solid #e1e1e1;
}
#app .nav_footer .nav_footer_list{
		overflow: hidden;
    height: 0.5rem;
    text-align: center;
    white-space: nowrap;
    display: flex;
}
#app .nav_footer .nav_footer_list .nav_item{
		display: inline-block;
    width: 24%;
    height: 100%;
    line-height: 0.5rem;
    display: flex;
    flex-direction: column;
}
#app .nav_footer .nav_footer_list .nav_item i{
	height: 40%;
	display: block;
	margin-bottom: 0.08rem;
	line-height: 140%;
	font-size: 0.23rem;
}
.nav_item a{
	color: #999999;
	display: block;
	width: 100%;
  height: 60%;
  line-height: 248%;
 font-size: 0.14rem;
}
#app .nav_footer .nav_footer_list .nav_item .router-link-active{
	color: #23b8ff;
}
</style>

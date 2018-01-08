<template>
	<div class="classifly">
		<ul class="classifly_nav">
			<li><router-link to="/classifly/it">IT·互联网</router-link></li>
			<li><router-link to="/classifly/classifly1">设计·创作</router-link></li>
			<li><router-link to="/classifly/classifly2">语言·留学</router-link></li>
			<li><router-link to="/classifly/classifly3">职业·考证</router-link></li>
			<li><router-link to="/classifly/classifly4">升学·考研</router-link></li>
			<li><router-link to="/classifly/classifly5">兴趣·生活</router-link></li>
		</ul>
		<div class="classifly_container">
			<transition name="fade" appear mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		name:'classifly'
	}
</script>

<style>
	.classifly{
		margin-top: 0.45rem;
		overflow: auto;
		height: 15.7rem;
		border-top: 0.01rem solid #efeff4;
	}
	.classifly .classifly_nav{
	    width: .89rem;
	    height: 100%;
	    overflow: hidden;
	    position: fixed;
	    background: #efeff4;
	}
	.classifly .classifly_nav li{
		width: 100%;
		height: 0.6rem;
		line-height: 0.6rem;
		text-align: center;
		border-bottom: 0.01rem solid #C8C7CC;
	}
	.classifly .classifly_nav li a{
		display: block;
		width: 100%;
		height: 0.6rem;
		color: #777;
	}
	.classifly .classifly_nav li .router-link-active{
		background: white;
	}
	.classifly .classifly_container{
		float: left;
		width: 76%;
		margin-left: 0.9rem;
		height: 100%;
		padding: 0.15rem;
		padding-bottom: 0.5rem;
	}
</style>
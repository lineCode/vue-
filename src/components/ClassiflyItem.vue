<template>
	<div class="puplic">
		<h2 class="puplic_title">{{title}}</h2>
		<ul class="puplic_ul">
			<li v-for="data in data1" @click="handleItem">{{data.username}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:["data1","title"],
		methods:{
			handleItem(e){
				this.$router.push({path:'/particulars'})
			}
		}
	}
</script>

<style>
	.puplic{
		border-bottom: 0.01rem solid #C8C7CC;
		padding-bottom: 0.2rem;
	}
	.puplic .puplic_title{
	    margin: 0.15rem 0;
	    margin-bottom: 0.05rem;
	    height: 0.22rem;
	    font-size: 0.16rem;
	    line-height: 0.22rem;
	    color: #000;
	    font-weight: normal;
	}
	.puplic .puplic_ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content:  space-between;
	}
	.puplic .puplic_ul li{
		width: 31%;
		color: #000;
		padding: 0 0.05rem;
		background: #efeff4;
		margin-top: 0.1rem;
		text-align: center;
		line-height: 0.53rem;
		overflow: auto;
		height: 0.53rem;
		border-radius: 0.03rem;
		font-size: 0.13rem;
	}
</style>
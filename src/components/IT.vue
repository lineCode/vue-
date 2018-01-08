<template>
	<div class="it">
		<div class="banner">
			<img src="../assets/classifly1.png"/>
		</div>
		<ClassiflyItem :data1 = "mydata1" title="互联网产品"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata2" title="互联网营销"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata3" title="编程语言"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata4" title="前端开发"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata5" title="移动开发"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata6" title="网咯与运维"></ClassiflyItem>
	</div>
</template>

<script>
	import ClassiflyItem from './ClassiflyItem';
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState(["mydata1","mydata2","mydata3","mydata4","mydata5","mydata6"])
		},
		components:{
			ClassiflyItem
		},
		mounted(){
			
		}
	}
</script>

<style>
	.it{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.it .banner{
		height: 1rem;
		border-radius: 0.04rem;
		overflow: hidden;
	}
	.it .banner img{
		width: 100%;
	}
</style>
<template>
	<div class="classifly1">
		<div class="banner">
			<img src="../assets/classifly2.png"/>
		</div>
		<ClassiflyItem :data1 = "mydata8" title="平面设计"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata9" title="UI设计"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata10" title="设计软件"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata11" title="游戏动画设计"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata12" title="绘画创作"></ClassiflyItem>
		<ClassiflyItem :data1 = "mydata13" title="影视后期设计"></ClassiflyItem>
	</div>
</template>

<script>
	import ClassiflyItem from './ClassiflyItem';
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState(["mydata8","mydata9","mydata10","mydata11","mydata12","mydata13"])
		},
		components:{
			ClassiflyItem
		},
		mounted(){
			
		}
	}
</script>

<style>
	.classifly1{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.classifly1 .banner{
		height: 1rem;
		border-radius: 0.04rem;
		overflow: hidden;
	}
	.classifly1 .banner img{
		width: 100%;
	}
</style>
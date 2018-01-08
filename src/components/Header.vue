<template>
	<header class="header" :class="{mheader:hide}">
		<div class="m-header1">
			<div class="header_left">
			<h1><a href="#"></a></h1>
			</div>
			<div class="header_right">
				<input type="text" placeholder="搜索老师、机构、课程" class="search_top" @focus="handleHide" />
			</div>
		</div>
		<div class="m-header2">
			<div class="header_search2">
				<input type="text" name="" id="" value="" />
				<input type="button" name="" id="" value="取消" @click="handleCancelhide" />
			</div>
			<div class="resou">
				<h3>热门搜索</h3>
				<ul class="rs_ul">
					<li v-for="item in rs" @click="wantGoHome">{{item.username}}</li>
				</ul>
			</div>
			<div class="m-search-mask" @click="handleCancelhide">
				
			</div>
		</div>
	</header>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data(){
			return {
				hide:false
			}
		},
		computed:{
			...mapState(["rs"])
		},
		methods:{
			handleHide(){
				this.hide=!this.hide;
			},
			handleCancelhide(){
				this.hide=!this.hide;
			},
			wantGoHome(){
				alert('好想回家！！但是我好像没有家')
			}
		}
	}
</script>

<style>
	.header{
		position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 10020;
	    width: 100%;
	    padding-top: 0.1rem;
	    height: 0.45rem;
	    background: #fff;
	}
	.header .header_left{
		float: left;
		margin-left: 0.15rem;
	}
	.header .header_left h1 a{
		display: inline-block;
	    width: 0.26rem;
	    height: 0.26rem;
	   background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDMjc1OTcyODRGNDExRTdBQkNERDk2NDM3OEQ0MzAwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDMjc1OTczODRGNDExRTdBQkNERDk2NDM3OEQ0MzAwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkMyNzU5NzA4NEY0MTFFN0FCQ0REOTY0Mzc4RDQzMDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkMyNzU5NzE4NEY0MTFFN0FCQ0REOTY0Mzc4RDQzMDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70TGt/AAAEdUlEQVR42uyad2hUWRTGz9hFQmyxskpWRIgVEyxsICKKa1nLimUXG0YiERUV9c/Egn9YV8W1oiiKQUXBtcQaCAgaTQRRo7KrsWCPdVdiI9nvzHyBUWbiK/c9R8mFH8NM3px3v3fuvadMAhUVFfI9jUC1oBgftVLOf1d6pIYP90gFZ0nqtyyoHlgO8kEvks/P6nm2h5ILPNlDKWAHSIry92IwERTGuodqgQVcXklVXJfEaxaC2rHqoSR6JcXm9wrpreJY8ZDamAuKHIipXJ5FtFHja3uoHdhu8PQ6AyaBm357KAAywSXDR3EqbWbyHr4I+gEcB+tBAw9OyAa0fZz38lSQbt7LoL8PAbk/7zXRC0HNwUHul3irxrMSRTJa41wOOBYVz3se5ByMHAqjuASa2p1NYY/Q660ykcUleNz/ufJYKZgG9jn1UGOQA/Y6ERM+fqwvshVRak4bkfrOD+amnEsO52ZL0EBwBYw1mZL83kJkT2eRnvGuTI3l3vrZiqA4sAkcAS292Omt6oqs6xDaX3E1nZsBRznXuGiC0hgDMpzGADtBbGgC1g+81aeRKzMZnHPa54KyQB5I9LMYS6gjsqK9yPy2rswkcu5Z4YJ6+VTsRX7UASNbtGe4oBFgNfC1wfDsA7zzt8jS267MfARLwPDK+kXHOzAbnGAJkOClEH1qh57iCd4Tef3RlanrTGYLop1yuaALOOmVmAd4dNNviCwqcSWmnCuqe7iYaHHoEc/4+eCDKSE6g92wPAYRpOCVK1N4FNKXK6rMamAtZzPjJ/CPWzGa+qSjHl11FzMod7VSN4OubLZE7QFUNS6AZLAOjLc7g8OloSW2/YHIe3fHzX0wBRwzWbF+rRbrLjATvLDapYnV8UQr1+RcORD+YdFAf9tYpoaK6EwxmmXvsfrFWPOQnn8zIGQn3//KWkyLuzF+tbF03DVg4yS9spP1zm6w32qlakqQxoHpTBCngn8d2HjDSnQAxNzTRFxCTcffnEzIzZK7CMZhEtck1M7djA17Wuz16YJ9ONjQPpwWEmvVptss1UnQXwZ6U8wwLrkNeP+Etck88LYKG295TRrFDAZX3YpxEod04hMwiXyu8zWfTaKEATAP3orW6w72smFDl1VD5mRWWlUB08e2btKuFDOEPYdxEYqtU5pZ4Lo76kWQDd6TbHq2OKxvYUXMOS88JMm5wZc/wCwrKRyYrHkXnmqT4L1yg60obZGsBOkWb6ttK20NP/MqsK5gmfHF7hVL4zUQUkYxA9ixsSKmlLFndKUYSx6y8yv41IWfvNWnv0qsdVL1sECKKt1sZAqZ/N4nY1O2d3FomwZCKxkwRjOLYp5r+w6MjCTGj8CqgXAQ20mvXdr6S0K/Aub4HYciHedbXJTuL1hraTx7bKL9Y2rc4abPtJECHQYdWfMYGabLB/XWRpbJeVVc95Ldml/AQ5MT8Koe0oyhHxPXNxE6S52YRRgfXhZ46q0/ubeOsIeWzkPkvlc39aPAu8VUyZdR/f9y1YJ8Hv8LMAC3bi/uZPgfuQAAAABJRU5ErkJggg==");
	    background-size: cover;
	}
	.header .header_right{
		float: left;
	}
	.header .header_left h1{
		height: 0.26rem;
		font-size: 0;
	}
	.header .header_right{
		height: 0.26rem;
		margin-left: 0.15rem;
		width: 3.17rem;
		position: relative;
	}
	.header .header_right .search_top{
		border: none;
		width: 97%;
		height: 0.26rem;
		display: block;
	    padding-left: 0.8rem;
	    line-height: 0.26rem;
	    background: #f2f2f6;
	    outline: 0;
	}
	.m-header1{
		height: 0.26rem;
	}
	.m-header2 {
		display: none;
		background: #fff;
	}
	.header_search2{
		width: 100%;
		height: 0.25rem;
		background: #fff;
		padding: 0 0.15rem;
		padding-right: 0;
	}
	.header_search2 input:nth-child(1){
		width: 86%;
		background: #f2f2f6;
		height: 100%;
		display: block;
		float: left;
		border: 0;
		outline: none;
	}
	.header_search2 input:nth-child(2){
		color: #23b8ff;
		border: 0;
		display: block;
		float: left;
		outline: none;
		height: 100%;
		margin-left: 0.1rem;
		letter-spacing: 2px;
		font-size: 0.16rem;
		background: #fff;
		line-height: 0.23rem;
	}
	.resou{
		border-top: 0.01rem solid #f2f2f6;
		margin-top: 0.1rem;
		padding: 0 0.2rem;
		z-index: 1000;
		position: fixed;
		width: 100%;
		background: #fff;
	}
	.resou h3{
		font-size: 0.14rem;
		color: #909090;
		font-weight: 400;
		margin-top: 0.08rem;
	}
	.resou .rs_ul{
		width: 100%;
		overflow: hidden;
		margin-top: 0.1rem;
	}
	.resou .rs_ul li{
	    float: left;
	    margin-right: 0.1rem;
	    margin-bottom: 0.1rem;
	    border: 0.01rem solid #d2deec;
	    border-radius: 0.11rem;
	    padding: 0 0.16rem;
	    height: 0.23rem;
	    font-size: 0.14rem;
	    line-height: 0.23rem;
	    color: #404040;
	}
	.m-search-mask{
		width: 100%;
		position: fixed;
	    top: 0.45rem;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 100;
	    background: rgba(0,0,0,.3);
	}
	.mheader .m-header1{
		display: none;
	}
	.mheader .m-header2 {
		display: block;
	}
	
		
	
</style>
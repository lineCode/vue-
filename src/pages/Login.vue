<template>
	<div class="login">
		<div class="logo">
			<img src="../assets/qq.png"/>
		</div>
		<div class="login_user">
			<input type="text" placeholder="QQ号码/手机/邮箱" id="username" v-model="username" />
			<input type="password" placeholder="请输入你的QQ密码" id="password" v-model="pwd" />
		</div>
		<div class="login_btn">
			<button id="login_btn1" @click="handleLogin">登录</button>
			<button id="login_btn2">一键登录</button>
		</div>
		<div class="login_www">
			<span>忘了密码?</span>
			<span>注册新账号</span>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				username:'',
				pwd:''
			}
		},
		methods:{
			handleLogin(){
				var _username=this.username;
				var _pwd=this.pwd;
				axios.post('/api/login').then(function(res){
					if(!_username||!_pwd){
						alert('请输入完整');
						return ;
					}
					else if(res.data.username!=_username){
						alert('用户名不存在');
						return ;
					}else if(res.data.pwd!=_pwd){
						alert('用户名和密码不匹配');
						return ;
					}else{
						localStorage.setItem('username',_username);
						window.location.href='/index'
					}
				});
			}
		}
	}
</script>

<style>
	body {
		font-size: 0.16rem;
		background: #eee;
	}
	.login .logo{
		width: 50%;
		margin: 0.2rem auto;
	}
	.login .logo img{
		width: 100%;
	}
	.login .login_user{
		width: 80%;
		margin: 0 auto;
		height: 0.9rem;
		background: #fff;
	}
	.login .login_user input{
		width: 100%;
		height: 0.45rem;
		outline: none;
		padding-left: 0.15rem;
		border: none;
		font-size: 0.16rem;
	}
	.login .login_user input:nth-child(1){
		border-bottom: 0.01rem solid #eee;
	}
	.login .login_btn{
		width: 80%;
		margin: 0 auto;
	}
	.login .login_btn button{
		width: 100%;
		height: 0.45rem;
		border: none;
		margin-top: 0.15rem;
		border-radius: 0.05rem;
		font-size: 0.16rem;
		outline: none;
	}
	.login .login_btn #login_btn1{
		background: #146fdf;
		color: #fff;
		letter-spacing: 0.05rem;
	}
	.login .login_btn #login_btn2 {
		border: 1px solid #9abbe3;
    	color: #146fdf;
	}
	.login .login_www{
		width: 80%;
		margin: 0 auto;
		padding-top: 0.2rem;
	}
	.login .login_www span{
		color: #246183;
		font-size: 0.14rem;
	}
	.login .login_www span:nth-child(2){
		float: right;
	}
</style>
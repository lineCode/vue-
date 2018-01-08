import Vue from 'vue';
import Vuex from 'vuex';
//import axios from 'axios';

Vue.use(Vuex);

import {INCREMENT,FETCHFOURS,CHANGEINPUT} from './mutation-type';

export default new Vuex.Store({
	state:{
		count:1, //仓库存放数据的地方
		username:"1313",
		age:123,
		fourS:[{name:"建国汽车",bmw:true},{name:"精典汽车",bmw:false},{name:"三和汽车",bmw:true}],
		info:"吃饭睡觉打豆豆",
		mydata1:[{username:'产品策划'},{username:'游戏策划'},{username:'产品运营'},{username:'游戏运营'}],
		mydata2:[{username:'网络营销理论'},{username:'淘宝营销'},{username:'微信营销'},{username:'SEO'},
				 {username:'新媒体营销'},{username:'SEM'},{username:'电商营销'},{username:'其他'}
		],
		mydata3:[{username:'C'},{username:'C++'},{username:'Java'},{username:'PHP'},
				 {username:'C#/.Net'},{username:'Python'},{username:'其他'}
		],
		mydata4:[{username:'HTML/CSS'},{username:'JavuScript'},{username:'jQuery'},{username:'HTML5'},
				 {username:'CSS3'},{username:'React'},{username:'Node.js'},{username:'Vue.js'},
				 {username:'Bootstrap'},{username:'Angular JS'},{username:'Web全栈开发'},{username:'腾讯自研前端课'},
				 {username:'其他'}
		],
		mydata5:[{username:'Android'},{username:'IOS开发'},{username:'微信开发'},{username:'跨平台APP开发'},
				 {username:'其他'}
		],
		mydata6:[{username:'Linux运维'},{username:'Python自动化运维'},{username:'DevOps'},{username:'信息安全'},
				{username:'其他'}
		],
		mydata7:[{username:'精选推荐'},{username:'编程语言'},{username:'平面设计'},{username:'职业技能'},
				{username:'高中'},{username:'实用英语'},{username:'文艺修养'}
		],
		mydata8:[{username:'淘宝美工'},{username:'网页美工'},{username:'综合平面'},
				{username:'摄影后期'},{username:'广告海报'},{username:'VI设计'},{username:'其他'}
		],
		mydata9:[{username:'交互设计'},{username:'游戏UI设计'},{username:'Web UI设计'},
				{username:'APP UI设计'},{username:'图标设计'},{username:'其他'}
		],
		mydata10:[{username:'Photoshop'},{username:'Indesign'},{username:'Axure'},
				{username:'Flash'},{username:'UG'},{username:'SAI'},{username:'其他'}
		],
		mydata11:[{username:'游戏角色'},{username:'场景概念'},{username:'游戏模型'},
				{username:'游戏特效'},{username:'动画设计'},{username:'其他'}
		],
		mydata12:[{username:'插画漫画'},{username:'国画油画'},{username:'水彩水粉画'},
				{username:'素描'},{username:'手绘其他'}
		],
		mydata13:[{username:'影视特效'},{username:'后期合成'},{username:'后期剪辑'},
				{username:'其他'}
		],
		rs:[{username:'摄影'},{username:'雅思'},{username:'产品'},
				{username:'高考数学'},{username:'考研政治'},{username:'前端开发'},{username:'运营'},
		]
	},
	getters:{ //从state中派生出一些数据来，相当于state的计算属性
		bmwfourS(state){
			return state.fourS.filter(function(item){
				return item.BMW;
			});
		}
	},
	mutations:{ // 改变state的数据的地方
		[INCREMENT](state,num){  //这就是一个mutation
			// 就是改变state的地方，它会接受state作为第一个参数
			state.count+=num
		},
		[FETCHFOURS](state,fours){
			console.log(fours);
			state.fourS=[...state.fourS,...fours];
			console.log(state.fourS);
		},
		[CHANGEINPUT](state,val){
			//state.info=val;
			state.info=val.target.value;
		}
	},
	actions:{ // 做异步操作的，发ajax请求，请求回来数据后，commit一个mutation去改变状态
		fetchFours({commit}){
			/*axios.get('/api/fours').then(function(res){
				//console.log(res.data.data);
				commit('FETCHFOURS',res.data.data);
			})*/
		}
	}
});

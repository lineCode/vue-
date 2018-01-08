import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '../App';
const Classifly=r=>require.ensure([],()=> r(require('@/pages/Classifly.vue')),'classifly');
const Index=r=>require.ensure([],()=> r(require('@/pages/Index.vue')),'index');
const Timetable=r=>require.ensure([],()=> r(require('@/pages/TimeTable.vue')),'timetable');
const User=r=>require.ensure([],()=> r(require('@/pages/User.vue')),'user');
const Login=r=>require.ensure([],()=> r(require('@/pages/Login.vue')),'login');
const Particulars=r=>require.ensure([],()=> r(require('@/pages/Particulars.vue')),'particulars');
const It=r=>require.ensure([],()=> r(require('@/components/IT.vue')),'it');
const Classifly1=r=>require.ensure([],()=> r(require('@/components/Classifly1.vue')),'classifly1');
const Classifly2=r=>require.ensure([],()=> r(require('@/components/Classifly2.vue')),'classifly2');
const Classifly3=r=>require.ensure([],()=> r(require('@/components/Classifly3.vue')),'classifly3');
const Classifly4=r=>require.ensure([],()=> r(require('@/components/Classifly4.vue')),'classifly4');
const Classifly5=r=>require.ensure([],()=> r(require('@/components/Classifly5.vue')),'classifly5');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'app',
      component: App,
      children:[
      	{
      		path:'/index',
      		name:'index',
      		component:Index
      	},
      	{
      		path:'/classifly',
      		name:'classifly',
      		redirect:'/classifly/it',
      		component:Classifly,
      		children:[
      			{
      				path:"it",
      				name:'it',
      				component:It
      			},
      			{
      				path:'classifly1',
      				name:'classifly1',
      				component:Classifly1
      			},
      			{
      				path:'classifly2',
      				name:'classifly2',
      				component:Classifly2
      			},
      			{
      				path:'classifly3',
      				name:'classifly3',
      				component:Classifly3
      			},
      			{
      				path:'classifly4',
      				name:'classifly4',
      				component:Classifly4
      			},
      			{
      				path:'classifly5',
      				name:'classifly5',
      				component:Classifly5
      			}
      		]
      	},
      	{
      		path:'/timetable',
      		name:'timetable',
      		component:Timetable
      	},
      	{
      		path:'/user',
      		name:'user',
      		component:User
      	},
      	{
      		path:'/',
      		redirect:'/index'
      	}
      ]
    },
    {
  		path:'/login',
  		name:'login',
  		component:Login
  	},
  	{
  		path:'/particulars',
  		name:'/particulars',
  		component:Particulars
  	}
  ]
})

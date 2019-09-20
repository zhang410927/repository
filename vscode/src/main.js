//import $ from 'jquery'
//import './css/index.css'
  // 导入 Vue 组件

import Vue from '../node_modules/vue/dist/vue.js'



  // 导入 App组件

import App from './App.vue'
import VueRouter from 'vue-router'
//交给vue使用
Vue.use(VueRouter);
//导入
import login2 from './main/login.vue';
import register from './main/register.vue';
import list from './main/list.vue';

//    $(function(){
//       $("li:odd").css("backgroundColor","yellow");
//       $("li:even").css("backgroundColor","blue");
// })
 //创建路由
 var router  = new VueRouter({
   routes:[{
         path: '/`',
         component: login2
      },{
         path: '/login2',
         component: login2
      },
      {
         path: '/register',
         component: register
      }
   ]
})
 // 创建一个 Vue 实例，使用 render 函数，渲染指定的组件

 var vm = new Vue({

   el: '#app',
   data:{
      msg:"ss"
   },
   components:{
      App:App
      
   },

   router // 将路由对象，挂载到 Vue 实例上

 });


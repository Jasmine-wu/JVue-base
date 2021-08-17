// 导入字体样式
import "./assets/fonts/iconfont.css";
// 导入bootstrp样式文件
import "bootstrap/dist/css/bootstrap.css"

import Vue from 'vue' //引入Vue对象,相当于<script src="vue.js"></script>
import App from './App.vue' //引入Aapp.vue 里的App对象，项目的入口页面
// 导入路由页面：@ 是src的绝对路径，webpack的别名
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
// 7.1 404页面
import NotFound from '@/views/NotFound.vue'
// 11 导入Find页子页面
import Ranking from '@/views/Second/Ranking.vue'
import Recommend from '@/views/Second/Recommend.vue'
import SongList from '@/views/Second/SongList.vue'




// 1.全局注册组件
// 1.1
import pannel from './components/pannel.vue'
// 1.2
Vue.component('pannel', pannel);

// 按需自动导入，全局注册组件
import { Button } from 'vant'
Vue.use(Button);

Vue.config.productionTip = false //控制台有一条提示信息

// 3.购物车案例：全局共享axios
import axios from 'axios'
axios.defaults.baseURL = "https://www.escook.cn" //购物车可用，其他要暂时注销
Vue.prototype.$axios = axios; //vue默认内置属性是$开头，其实可随意取名

// 注册全局自定义指令
Vue.directive('gfocus', {
    // 固定方法inserted
    inserted(el) {
        // el: 使用该指令的元素
        el.focus();
    }
})

// 2.注册全局路由
import VueRouter from 'vue-router'
// 2.1.注册全局路由
Vue.use(VueRouter);
// 2.2 指定路由规则(路径和组件的一一对应关系)
const routes = [

    {
        // 6.1 根路径命中后重定向到首页
        path: '/',
        redirect: '/find'

    },
    {
        path: '/find',
        // 设置name
        name: 'pageName1',
        component: Find,
        // 11. 配置子级路由系统
        // 注意：子级路由路径前面不需要/
        children: [{
                path: 'rank',
                component: Ranking

            },
            {
                path: 'recomm',
                component: Recommend

            },
            {
                path: 'songs',
                component: SongList

            }
        ]
    }, {
        path: '/my',
        name: 'pageName2',

        component: My
    }, {
        // 5.2.1 通过路径传值: :参数名
        path: '/part/:uname',
        name: 'pageName3',

        component: Part
    },
    {
        // 7.1 访问不存在的路径返回NotFound
        path: '*',
        component: NotFound

    }
];
// 2.3.生成路由对象
const router = new VueRouter({
    // 固定keyroutes
    // ES6语法：key.value一致，可简写
    // routes: routes,
    routes,
    // 8. 切换路由模式
    mode: 'history'
});

// 12. 路由权限判断：在路由跳转之前触发的函数
let isLogin = false;
router.beforeEach((to, from, next) => {
    if (to.path === '/my' && isLogin === false) {
        alert("请先登陆")
            // 阻止跳转
        next(false);
    } else {
        // 正常跳转
        next();
    }


})

//实例Vue
new Vue({

        el: '#app', //1. vue实例编译后的模版挂在到index.html文件里id="app"的元素下面
        // 2.4.将路由对象挂载到vue实例上,因此实例可访问：this.$route/this.$router
        router,
        render: h => h(App), //渲染App页面
    })
    // .$mount('#app') //2. 或者手动挂载
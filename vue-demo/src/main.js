import Vue from 'vue' //引入Vue对象,相当于<script src="vue.js"></script>
import App from './App.vue' //引入Aapp.vue 里的App对象，项目的入口页面

// 导入bootstrp样式文件
import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false //控制台有一条提示信息


new Vue({ //实例Vue
        render: h => h(App), //渲染App页面
    }).$mount('#app') //渲染到index.html里面id=app标签内

let a = 10;
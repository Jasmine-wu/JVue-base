

<template>
  <div>
    <div class="footer_wrap">
      <!-- 点击切换路径 -->

      <!-- 注意#和没#号的区别 -->
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->

      <!-- 4.1 声明式导航（router-link自带激活时的类名，用户可自定义高亮样式） -->
      <router-link to="/find">发现音乐</router-link>
      <!--  5.1.1 路由查询参数中传值 -->
      <router-link to="/my?name=Jasmine">我的音乐</router-link>
      <!--  5.2.1 -->
      <router-link to="/part/Jasmine22222">朋友</router-link>
    </div>

    <div class="top">
      <!-- 3.设置挂载点，切换不同的路径显示不同的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 什么是路由：接口和真实服务的一一映射关系
// vue路由：路径和组件映射关系
// vue-router使用：
// 1: yarn add vue-router
// 2: 全局注册路由
// 3: 设置挂载点

// 4: 声明式导航：高亮
// 4.1:以前是怎么做切换高亮的？遍历index和选中index比较，动态绑定class属性==》如何简化？
// 解决：vue-router提供的全局组件<router-link to>替代<a href>标签： router-link最终会渲染成a/href
// 4.2:router-link选中高亮样式可否自定义？.router-link-active

// 5: 声明式导航：传值
// 问题：切换不同路由时怎么给切换的组件传入值呢？切换后的组件如何接收传入的值呢？
// 解决：
// 5.1： 通过查询参数传值
// 5.1.1 ：?参数名=值
// 5.1.2 ：$route.query.参数名

// 5.2: 通过路径里传值
// 5.2.1: /path/:参数1名/:参数2名或者/path/值
// 5.2.1： $route.params.参数名获取

// 6. 重定向
// 问题：网页一打开显示的页面怎么设置？
// 6.1 根路径命中重定向到首页

// 7. 路由404
// 问题：访问不存在路径怎么办? 返回404页面
// 7.1 在路由数组最后，{path:'*', component:NotFound}

// 8. 切换路由模式
// 问题：路由路径看起来不自然，如何切成真正的路径形式？
// 解决：切换路由模式: mode:'history',默认是hash
//8.1: hash路由：http://localhost:4444/#/find // #后面值是哈希值
//8.2:真正路由-history路由：http://localhost:4444/find
//8.2.1 http://localhost:4444/find :这样找的是find文件夹，因此上线以后需服务器支持，交给vue的路由系统来设置

// 9. 编程式导航

export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
/* .footer_wrap a:hover {
  background-color: #555;
} */
.top {
  padding-top: 62px;
}

/* 4.2 router-link高亮样式自定义 */
/* 选中时样式 */
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>
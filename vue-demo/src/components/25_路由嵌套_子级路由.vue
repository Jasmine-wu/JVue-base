

<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my?name=Jasmine">我的音乐</router-link>
      <router-link to="/part/Jasmine22222">朋友</router-link>
    </div>

    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 11. 路由嵌套
// 一个路由页面可否嵌套另一套路由系统？
// 解决：在注册路由规则时候配置子级路由系统规则
// chirldren:[]
// 注意：子级路由path前面不需要/

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
/* 注意: 这里是a */
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
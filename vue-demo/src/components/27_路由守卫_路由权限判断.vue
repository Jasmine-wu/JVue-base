

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
// 12 路由守卫:
// 问题：访问我的音乐页面，先要判断是否登陆,未登陆是跳转的，怎么做到？
// 解决: 在路由跳转之前，会触发一个函数:router.beforeEach((to,from,next)=>{})
// next();正常跳转
// next(false)：阻止跳转
// next('path'): 强制跳转到另一个路径上

// 注意：重写了router.beforeEach方法，里面必须手动调用next()，才会正常跳转
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
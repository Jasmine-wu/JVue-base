

<template>
  <div>
    <div class="footer_wrap">
      <!-- 切换路由 -->
      <!-- 9.1 用a-->
      <!-- <a href="#/find">发现音乐</a> -->

      <!-- 9.2 声明式导航-->
      <!-- <router-link to="/find">发现音乐</router-link>
      <router-link to="/my?name=Jasmine">我的音乐</router-link>
      <router-link to="/part/Jasmine22222">朋友</router-link> -->

      <!-- 9.3 编程式导航 -->
      <!-- 9.3.1 用path跳转 -->
      <!-- <span @click="jumpTo('/find')"> 发现音乐</span>
      <span @click="jumpTo('/my')">我的音乐</span>
      <span @click="jumpTo('/part')">朋友</span> -->

      <!-- 9.3.2 用name跳转 -->
      <!-- 前提:name要在路由规则那里先定义好 -->
      <span @click="jumpTo2('pageName1')"> 发现音乐</span>
      <span @click="jumpTo2('pageName2')">我的音乐</span>
      <span @click="jumpTo2('pageName3')">朋友</span>
    </div>

    <div class="top">
      <!-- 切换不同的路径显示不同的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 9. 编程式导航
// 即：用js 代码切换路由
// 切换路由：
// 1. 用a
// 2. 用声明式导航，本质也是a
// 3. 也可用js代码
// 3.1 用path跳转
// 3.2 用name跳转: 推荐。用path，如果path因为业务变动，则需手动修改，name用户不可见，对应的path修改,name可以不用改

// 10. 编程式导航- 传参
// 10.1 用params传参-> $router.params.参数名
// 10.2 用query传参-> $router.query.参数名
// 注意： 如果使用的path跳转，params传参会被忽略掉
// 因此传参推荐组合： name跳转+query传参

// 注意：如果你的当前url上的"hash值？参数""和你要跳转到的url上的"hash值？参数"一致。会爆出冗余导航到问题

// 总结: 编程式导航推荐: name跳转+query传参

export default {
  methods: {
    jumpTo(target) {
      // 9.3.1 用path跳转
      this.$router.push({
        path: target,
      });
    },
    jumpTo2(target) {
      // 9.3.2 用路由name跳转
      this.$router.push({
        name: target,
        // 10.2 用query传参
        query: {
          name: "Jamine01",
        },
        // 10.1 用params传参
        params: {
          uname: "Jasmine02",
        },
      });
    },
  },
};
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
.footer_wrap span {
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
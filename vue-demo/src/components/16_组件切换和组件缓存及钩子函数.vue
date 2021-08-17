<template>
  <div>
    <!-- 3.点击事件切换show变量 -->
    <button @click="show = 'Account'">账号密码填写</button>
    <button @click="show = 'UserInfo'">个人信息填写</button>
    <p>下面显示组件动态切换：</p>
    <!-- 2. 设置内置组件componentd的is属性为要切换的组件变量 -->
    <!-- 解决二：将频繁切换的组件放到keep-alive组件中，避免切换时被频繁创建和销毁 -->
    <keep-alive>
      <component :is="show"></component>
    </keep-alive>
  </div>
</template>
<script>
// 一。问题：如何切换多个互斥的组件显示和隐藏？
// 1.设置变量承载要切换的组件
// 2.设置内置组件componentd的is属性为要切换的组件变量
// 3.点击事件切换show变量

// 二。问题：这样频繁切换组件会导致组件频繁的被创建和销毁呢？
// 会，如果页面频繁切换的组件很多，性能太差
// 解决：将频繁的组件缓存起来放在内存里。即将频繁的组件包起来，放到内置的keep-alive组件中

// 三。问题：如何知道组件是被切走了还是切换回来了呢？
// 解决：组件缓存下的两个钩子函数activated/deactivated
import UserInfo from "./components/UserInfo.vue";
import Account from "./components/Account.vue";

export default {
  // 1.设置变量承载要切换的组件
  data() {
    return {
      show: "Account",
    };
  },
  components: {
    UserInfo,
    Account,
  },
};
</script>
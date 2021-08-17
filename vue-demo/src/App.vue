

<template>
  <div>
    <!-- <VButton>点击</VButton> -->
    <van-button>点击2222</van-button>
  </div>
</template>

<script>
// 先下载: yarn add vant
// 再自动按需导入：
// 1.yarn add babel-plugin-import -D
// 2.修改babel.config.js文件
// 3.自动按需导入：import { Button } from "vant";
// 4. 全局注册:Vue.use(Button)
// 5。使用<van-button>

// 注意：组件一般是全局注册，但是函数

export default {
  // 局部注册
  // components: {
  //   VButton: Button,
  //   // [Button.name]: Button,
  // },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <!-- 1.基本数据类型属性 -->
    <input type="text" v-model="msg" />
    <!-- 2. 对象类型属性 -->
    <input type="text" v-model="user.name" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "请输入",
      user: {
        name: "章三",
      },
    };
  },
  // 监听data/computed属性值的改变
  watch: {
    // 1. 监听基础数据类型属性
    // 语法：监听哪个属性(newVal, oldVal){}
    msg(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
    // 2. 监听对象类型属性
    user: {
      // 2.1 页面一刷新/打开就触发一次
      immediate: true,
      // 2.2 深度监听对象里的属性
      deep: true,
      // 2.3 打印的是对象
      handler(newObj, oldObj) {
        console.log(newObj);
        console.log(oldObj);
      },
    },
  },
};
</script>
<template>
  <div>
    <!-- 按键修饰符 -->
    <!-- 1: 回车健：@keydown.enter -->
    <input type="text" @keydown.enter="enterFn" />
    <hr />
    <!-- 2: 返回键 -->
    <input type="text" @keydown.esc="escFn" />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    enterFn() {
      console.log("按下了回车键");
    },
    escFn() {
      console.log("按下了返回键");
    },
  },
};
</script>
<style scoped>
</style>
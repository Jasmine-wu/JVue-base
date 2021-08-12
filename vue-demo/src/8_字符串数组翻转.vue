<template>
  <div>
    <!-- 点击按钮翻转字符串 -->
    <button @click="reverse">{{ msg }}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello world",
    };
  },
  methods: {
    reverse() {
      // 字符串转数组
      let arr = this.msg.split("");
      // 翻转数组
      arr.reverse();
      // 数组转字符串
      this.msg = arr.join("");
    },
  },
};
</script>
<style scoped>
</style>
<template>
  <div>
    <!-- 获取事件对象 -->
    <!-- 1: 无参时，通过形参获取 -->
    <a @click="one" href="http://www.baidu.com">阻止默认跳转</a>
    <br />
    <!-- 2:有参，手动传入传参$event -->
    <a @click="two(10, $event)" href="http://www.baidu.com">阻止默认跳转</a>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    one(e) {
      console.log(e);

      e.preventDefault();
    },
    two(num, e) {
      console.log(num);
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
</style>
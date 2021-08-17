
<template>
  <div>
    <p>你要购买商品的数量:{{ count }}</p>
    <!-- 1 -->
    <button v-on:click="count = count + 1">+1</button>
    <br />
    <!-- 2 -->
    <button v-on:click="add">+1</button>
    <br />
    <!-- 3 -->
    <button v-on:click="addFn(5)">+5</button>
    <br />

    <!-- 4 -->
    <button @click="sub">-1</button>
  </div>
</template>

<script>
export default {
  name: "App",
  // 定义变量
  // data函数会把对象挂在当前组件上
  data() {
    return {
      count: 1,
    };
  },
  // 定义方法
  methods: {
    addFn(n) {
      this.count += n;
    },
    add() {
      this.count += 1;
    },
    sub() {
      this.count -= 1;
    },
  },
};
</script>
<style scoped>
</style>
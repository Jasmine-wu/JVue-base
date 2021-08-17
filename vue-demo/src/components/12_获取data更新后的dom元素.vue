
<template>
  <div>
    <!-- 获取data更新后的dom元素-->
    <!-- 1. 可在updated钩子函数里获取 -->
    <!-- 2. 使用this.$nextTick() -->
    <p ref="price">价格:{{ count }}</p>
    <button @click="add">价格+1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
      // 标签里的内容更新了，但是获取不到，为什么？
      // vdata更新开启的是一个dom更新异步任务
      // console.log(this.$refs.price.innerHTML); //0

      // 如何才能拿到更新后的内容呢？
      // 1: 推荐:
      this.$nextTick(() => {
        // dom更新完后会触发nextTick函数
        console.log(this.$refs.price.innerHTML); //1
      });
    },
  },
  // 2:
  updated() {
    console.log(this.$refs.price.innerHTML); //1
  },
};
</script>
<template>
  <div>
    <!-- 依赖项不变时，计算属性对应函数只会被调用一次，函数值直接从缓存中取 -->
    <p>计算属性num值：{{ num }}</p>
    <p>计算属性num值：{{ num }}</p>
    <p>计算属性num值：{{ num }}</p>

    <button @click="addFn">a变量+1</button>
  </div>
</template>
<script>
// 1. 计算属性是变量: 值依赖于其他变量的计算结果
// 2. 注意变量名不要和data里的重名
// 使用场景： 当依赖的变量改变时，计算属性值也会改变

// 计算属性对比函数调用的优势:
// 会缓存计算结果，当依赖项不变时，多次使用计算属性都是从缓存取值
// 当计算属性和函数都能达到同样的功能时，优先选择计算属性
export default {
  data() {
    return {
      a: 10,
      b: 20,
    };
  },
  methods: {
    addFn() {
      this.a++;
    },
  },
  computed: {
    // 计算属性num
    num() {
      // 计算属性对应的函数体
      console.log("计算属性被调用了");
      return this.a + this.b;
    },
  },
};
</script>
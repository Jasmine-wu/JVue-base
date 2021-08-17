<template>
  <div>
    <p id="my" ref="my2" class="myClass">通过my/ref属性获取原生dom</p>
  </div>
</template>
<script>
// 获取原生dom元素
// 1. 在元素里加id/ref属性
// 2. 在mouted钩子函数里获取：
export default {
  mounted() {
    // 2.1
    console.log(document.getElementById("my"));
    // 2.2
    console.log(this.$refs.my2);
    // 2.3
    console.log(document.querySelector(".myClass"));
  },
  methods: {
    printLog() {
      console.log("printLog call");
    },
  },
  data() {
    return {
      attr1: "changsha",
    };
  },
};
</script>
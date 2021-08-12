<template>
  <div>
    <input type="text" v-model="inputTxt" />
  </div>
</template>
<script>
// 计算属性的完整写法：
// 当要给计算属性赋值时，必须使用完整写法
export default {
  computed: {
    inputTxt: {
      // 给计算属性赋值的时候触发
      set(val) {
        console.log(val);
      },
      // 获取计算属性值时触发
      get() {
        return "请xxx";
      },
    },
  },
};
</script>
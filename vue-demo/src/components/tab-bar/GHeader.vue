<template>
  <!-- 2.2 使用 -->
  <div class="my-header" :style="{ background: background, color: color }">
    {{ title }}
  </div>
</template>

<script>
// 2.头部自定义
export default {
  // 重点属性校验
  // 2.1 定义属性
  props: {
    //
    background: {
      type: String,
    },
    color: {
      type: String,
      default: "#ffff", //默认值
    },
    title: {
      type: String,
      required: true, //必填
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
<template>
  <div class="my-tab-bar">
    <!-- 1.3 点击切换高亮样式 -->
    <!-- @click="click(index)" -->
    <!-- :class="{ current: index === curIndex } -->
    <div
      class="tab-item"
      v-for="(value, index) in arr"
      :key="index"
      @click="click(index, value.componentName)"
      :class="{ current: index === curIndex }"
    >
      <!-- 1.2: 追加class -->
      <span class="iconfont" :class="value.iconText"></span>
      <span>{{ value.text }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
      // 1.1 自定义校验规则
      validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true;
        } else {
          console.error("数据源长度必须是[2,5]");
          return false;
        }
      },
    },
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  methods: {
    click(index, componentName) {
      // 1.3
      this.curIndex = index;
      // 1.4 点击切换不同的页面
      this.$emit("switchItem", componentName);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
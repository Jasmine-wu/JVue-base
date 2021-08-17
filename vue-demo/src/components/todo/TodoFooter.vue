<template>
  <footer class="footer">
    <!-- 5.1 -->
    <span class="todo-count"
      >剩余:<strong>{{ total }}</strong></span
    >
    <!-- 6.2 切换list数据数据显示 -->
    <ul class="filters" @click="show">
      <!-- 6.1 切换高亮样式 -->
      <!-- 思路：切换status属性值，根据属性值动态设置样式 -->
      <li>
        <a
          href="javascript:;"
          :class="{ selected: status === 'all' }"
          @click="status = 'all'"
          >全部</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: status === 'no' }"
          @click="status = 'no'"
          >未完成</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: status === 'yes' }"
          @click="status = 'yes'"
          >已完成</a
        >
      </li>
    </ul>
    <!-- 7.1 清除已完成 -->
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  // 5.1 统计总任务数
  props: ["arr"],
  computed: {
    total() {
      return this.arr.length;
    },
  },
  data() {
    return {
      // 6.1 默认选中 全部
      status: "all",
    };
  },
  methods: {
    // 6.2
    show() {
      this.$emit("changeStatus", this.status);
    },
    // 7.1
    clear() {
      this.$emit("clearDone");
    },
  },
};
</script>
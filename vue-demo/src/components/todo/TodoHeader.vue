<template>
  <header class="header">
    <h1>todos</h1>
    <!-- 9.1 全选:v-model="isAll" -->
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>

    <!-- 3.1 添加任务-绑定键盘回车事件 -->
    <!-- 3.2.1 v-model绑定输入框value值-->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="keyDown"
      v-model.trim="content"
    />
  </header>
</template>

<script>
export default {
  // 3.2.2
  data() {
    return {
      content: "",
    };
  },
  methods: {
    keyDown() {
      // 3.2 主动触发add事件，传递数据？传什么数据？->输入框的value值
      // 问题：输入框的value值如何拿到? v-model
      this.$emit("add", this.content);
      // 3.3 细节：清空输入框
      this.content = "";
    },
  },
  // 9.1
  computed: {
    isAll: {
      // 点击全选按钮时触发
      set(checked) {
        this.arr.forEach((obj) => (obj.isDone = checked));
      },
      get() {
        // 小按钮变化时触发
        return this.arr.every((obj) => obj.isDone === true);
      },
    },
  },
  // 9.1.2
  props: ["arr"], //父传子
};
</script>
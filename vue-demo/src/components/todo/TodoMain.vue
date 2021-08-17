<template>
  <ul class="todo-list">
    <!-- 动态选择已完成文字下划线样式 -->
    <li
      v-for="(obj, index) in arr"
      :key="obj.id"
      :class="{ completed: obj.isDone }"
    >
      <div class="view">
        <!-- v-model绑定选中状态和isDone属性 -->
        <input class="toggle" type="checkbox" v-model="obj.isDone" />
        <label>{{ obj.name }}</label>
        <!-- 4.1 删除任务-绑定删除事件 -->
        <button @click="deleteFn(index)" class="destroy"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["arr"],
  methods: {
    deleteFn(index) {
      // 4.2 主动触发del事件，传递数据的索引index
      this.$emit("del", index);
    },
  },
};
</script>
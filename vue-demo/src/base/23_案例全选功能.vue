<template>
  <div>
    <!-- 2.v-model关联计算属性和checked属性 -->
    全选<input type="checkbox" v-model="isAll" /><button @click="reverseC">
      反选
    </button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <!-- 1.v-model关联c变量和checked属性 -->
        <input type="checkbox" v-model="item.c" />
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
// 实现全选功能：
// 选中全选时，如何知道其他复选框的选中状态？如何设置？
// 涉及的知识点：
// 复选框v-model关联如果是数组,那么关联的是复选框门的value值，否则关联的是当前复选框的checked属性

export default {
  data() {
    return {
      list: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  // 3.
  computed: {
    isAll: {
      // 3.2 全选框状态改变影响子复选框状态
      set(checked) {
        this.list.forEach((obj) => (obj.c = checked));
      },
      get() {
        // 3.1 子复选框状态改变影响全选框状态：
        // every遍历数组，不满足条件返回fasle
        return this.list.every((obj) => obj.c === true);
      },
    },
  },
  methods: {
    reverseC() {
      // 3.3 反选功能
      this.list.forEach((obj) => (obj.c = !obj.c));
    },
  },
};
</script>
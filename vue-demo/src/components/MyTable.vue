<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(value, index) in list" :key="index">
          <td>{{ index }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.age }}</td>
          <td>
            <!-- {{ value.headImgUrl }} -->
            <!-- 1. 作用域插槽占位 -->
            <slot :row="value"></slot>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
};
</script>
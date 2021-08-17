<template>
  <div class="pannel">
    <div class="title">
      <h4>{{ title }}</h4>
      <button @click="click">{{ flag ? "折叠" : "展开" }}</button>
    </div>
    <ul v-show="flag">
      <li v-for="(item, index) in arr" :key="item">{{ index }}.{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  // 1. 定义props变量，方便父组件传递值进来
  // 注意：props属性是只读的
  props: ["title", "arr"],
  data() {
    return {
      flag: true,
    };
  },

  methods: {
    click() {
      this.flag = !this.flag;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.pannel {
  width: 200px;
}
.title {
  display: flex;
  justify-content: space-between;
}

.title,
ul {
  border: 1px solid #ccc;
}
</style>
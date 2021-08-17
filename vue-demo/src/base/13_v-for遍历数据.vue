<template>
  <div>
    <div class="pannel">
      <div class="title">
        <h4>商品列表</h4>
        <button @click="click">{{ flag ? "折叠" : "展开" }}</button>
      </div>
      <ul v-show="flag">
        <li v-for="(item, index) in dataArr" :key="item">
          {{ index }}.{{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
      dataArr: ["连衣裙", "牛仔裤", "玩具", "风扇", "铅笔"],
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
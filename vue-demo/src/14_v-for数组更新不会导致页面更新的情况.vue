<template>
  <div>
    <!-- v-for数据什么变化会导致页面更新？ -->
    <!-- 不改变愿数组或者给数组的某个元素赋值不会导致页面更新 -->
    <!-- concat/filter/slice也不会 -->

    <!-- 数据变更方法会导致页面更新 -->
    <!-- 数组非变更方法，返回新数组的，不会更新。=》可采用更新覆盖数组或者this.$set() -->

    <!-- 解决v-for数组更新有些情况不会导致页面更新的问题？ -->
    <!-- 1. 覆盖原数组 -->
    <!-- 2. 用this.$set() 更新值 -->

    <ul>
      <li v-for="(item, index) in dataArr" :key="item">
        {{ index }}.{{ item }}
      </li>
    </ul>

    <button @click="reverse">数组翻转</button>
    <button @click="slice">数组截取</button>
    <button @click="pop">数组pop</button>
    <button @click="update">更新某个值</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      dataArr: ["连衣裙", "牛仔裤", "玩具", "风扇", "铅笔"],
    };
  },
  methods: {
    reverse() {
      // 数组翻转会导致页面更新
      this.dataArr.reverse();
    },
    slice() {
      // 1.数组截取slice不会导致页面更新！
      // this.dataArr.slice(0, 2);

      // 1.1解决v-for问题不会非变更方法不会导致页面更新的问题：覆盖原数组
      this.dataArr = this.dataArr.slice(0, 2);
    },
    pop() {
      this.dataArr.pop();
    },
    update() {
      // 2.给数组某个值重新赋值不会导致页面更新
      // this.dataArr[0] = "xxx";

      // 2.1 解决v-for更新数组某个值不会导致页面刷新的问题
      // this.$set(更新谁，更新哪里， 更新值)
      this.$set(this.dataArr, 0, "xxxxx");
    },
  },
};
</script>

<style scoped>
</style>
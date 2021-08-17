<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <button @click="kanPrice">砍价一元</button>
  </div>
</template>

<script>
import eventBus from "../EventBus";
export default {
  // 1.index属性：用来区分子组件
  props: ["title", "price", "intro", "index"],
  methods: {
    kanPrice() {
      // 3. 如果将事件传递出去
      // this.$emit（）主动触发事件:触发哪个事件subPrice？传递什么值过去？this.index, 1
      // this.$emit("subPrice", this.index, 1);
      // 3. 两个非父子关系组件之间的通信：事件触发方：主动触发哪个事件，带什么参数？
      eventBus.$emit("send", this.index, 1);
    },
  },
};
</script>

<style scoped>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
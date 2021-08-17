<template>
  <ul class="my-product">
    <li v-for="(item, index) in arr" :key="index">
      <span>{{ item.proname }}</span>
      <span>{{ item.proprice }}</span>
    </li>
  </ul>
</template>

<script>
import eventBus from "../EventBus";
export default {
  props: ["arr"],
  //   2. 事件接收方：接收哪个事件send？带什么事件参数？index, price
  //   组件创建完毕时。注册监听哪个事件
  created() {
    eventBus.$on("send", (index, price) => {
      //   让prolist价格跟随者product减1
      this.arr[index].proprice >= price &&
        (this.arr[index].proprice = (this.arr[index].proprice - price).toFixed(
          2
        ));
    });
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
<template>
  <div style="overflow: hidden">
    <!-- 两个没有引入关系的组件（父子）如何通信？EventBus -->
    <!-- 没有父子关系就找一个共同的爹：1.创建一个空白的vue对象eventBus,只负责监听和触发事件-->
    <!-- 2. 接收事件方: eventBus.$on():注册事件接收 -->
    <!-- 3. 事件触发方： eventBus.$emit() -->

    <!-- 需求：product给proList组件传值 -->

    <!-- 组件1: -->
    <div style="float: left">
      <product
        v-for="(item, index) in list"
        :key="item.id"
        :title="item.proname"
        :price="item.proprice"
        :intro="item.intro"
        :index="index"
        @subPrice="sub"
      >
      </product>
    </div>

    <!-- 组件2: -->
    <div style="float: left">
      <plist :arr="list"></plist>
    </div>
  </div>
</template>

<script>
import product from "./components/product.vue";
import pList from "./components/proList.vue";
export default {
  components: {
    product: product,
    plist: pList,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  methods: {
    sub(index, price) {
      this.list[index].proprice >= price &&
        (this.list[index].proprice = (
          this.list[index].proprice - price
        ).toFixed(2));
    },
  },
};
</script>
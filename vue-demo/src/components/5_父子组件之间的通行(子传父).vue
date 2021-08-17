<template>
  <!-- 如何实现子组件的砍价功能？ -->
  <!-- 父组件绑定子组件砍价的暴露的方法，将砍价的功能实现放到父组件中 -->
  <!-- 问题：  -->
  <!-- 1.父组件怎么知道是哪个组件触发的？父组件外传入子组件index索引区分子组件  -->
  <!-- 2.父组件砍价实现方法与子组件的砍价事件绑定时，子组件的砍价事件触发时，如何传递到绑定的父组件实现方法中？ -->
  <div>
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
</template>
<script>
import product from "./components/product.vue";
export default {
  components: {
    product: product,
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
    // 2.哪个组件，砍价多少
    sub(index, price) {
      this.list[index].proprice >= price &&
        (this.list[index].proprice = (
          this.list[index].proprice - price
        ).toFixed(2));
    },
  },
};
</script>
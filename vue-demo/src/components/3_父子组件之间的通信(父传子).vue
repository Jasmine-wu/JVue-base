<template>
  <div>
    <!-- 2. 父组件向子组件传递数据值 -->
    <pannelL
      v-for="(value, index) in list"
      :key="index"
      :title="value.title"
      :arr="value.arr"
    >
    </pannelL>
  </div>
</template>
<script>
// 1.父组件向子组件通信
// 1.1 子组件定义props变量接收变量值
import pannelL from "./components/pannelL.vue";
export default {
  components: {
    pannelL: pannelL,
  },
  data() {
    return {
      dataArr: ["连衣裙", "牛仔裤", "玩具", "风扇", "铅笔"],
      list: [
        {
          title: "商品列表",
          arr: ["连衣裙", "牛仔裤", "玩具", "风扇", "铅笔"],
        },
        {
          title: "商品列表2",
          arr: ["连衣裙2", "牛仔裤2", "玩具2", "风扇2", "铅笔2"],
        },
      ],
    };
  },
};
</script>
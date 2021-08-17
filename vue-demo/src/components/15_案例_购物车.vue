<template>
  <div>
    <CartHeader background="red" title="京东购物车"></CartHeader>
    <div class="main">
      <!-- 3, 获取数据，展示购物车 -->
      <CartGoods :gObj="value" v-for="value in list" :key="value.id">
      </CartGoods>
    </div>
    <!-- 6.1 全选 -->
    <CartFooter :list="list"></CartFooter>
  </div>
</template>
<script>
// 1. 项目初始化
// 1.1 yarn add bootstrap less less-loader@5.0.0 -D
// 1.2 import 'bootstrap/dist/css/bootstrap.css'
// 1.3

import CartHeader from "./components/shopping-cart/CartHeader.vue";
import CartGoods from "./components/shopping-cart/CartGoods.vue";
import CartCount from "./components/shopping-cart/CartCount.vue";
import CartFooter from "./components/shopping-cart/CartFooter.vue";

// 2, CartHeader自定义
// 分析： 属性校验

// 3. 获取数据，展示购物车
// 分析：
// 1.将axios挂载到Vue原型上，全局共享
// 2.商品件数传入object,而不是goods.count。（好处在5. 商品+1/-1就体现出来了）

// 4. 商品选中效果
// 分析：
// 1.点击复选框处选中
// 2. 点击商品图片复选框也选中，如何做到的？-->label关联表单，点击label相当于点击表单

// 5. 商品+1/-1
// 分析：
// 1.手动点击+1/-1（负值处理）
// 2. 输入件数（禁止输入负值）

// 6. 全选功能
// 分析：
// 1.点击小复选框影响全选
// 2.点击全选影响小复选框

// 7. 结算总数量
// 分析： 总件数依赖数据里的goods_status（计算属性）

// 8. 统计总价
// 分析： 和7一致

export default {
  components: {
    CartHeader,
    CartGoods,
    CartCount,
    CartFooter,
  },
  created() {
    this.$axios({
      url: "api/cart",
      method: "GET",
    }).then((res) => {
      this.list = res.data.list;
    });
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>
<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
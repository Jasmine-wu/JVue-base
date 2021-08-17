<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <!-- 4.2 点击图片复选框也选中(重点: label关联表单，点击label相当于点击表单) -->
        <!-- 4.2.1 将label for属性和输入框id绑定 -->
        <input
          type="checkbox"
          class="custom-control-input"
          v-model="gObj.goods_state"
          :id="gObj.id"
        />
        <label class="custom-control-label" :for="gObj.id">
          <img :src="gObj.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ gObj.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ gObj.goods_price }}</span>
        <span>
          <!-- 3.1 细节重点：注意: 这里传入的件数不是goods_count,而是gObj,why? -->
          <!-- 传入对象，可以利用对象的引用特性 -->
          <CartCount :gObj="gObj"></CartCount>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCount from "./CartCount.vue";
export default {
  // 3.1 获取数据显示购物车内容
  props: {
    gObj: {
      type: Object,
    },
  },

  components: {
    CartCount,
  },
};
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
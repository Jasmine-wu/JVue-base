<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <!-- 6.0 全选功能:v-model="isAll"-->
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="isAll"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <!-- 8：统计总价 -->
      <span class="price">¥ {{ prices }}</span>
    </div>
    <!-- 按钮 -->
    <!-- 7: 结算总件数 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ( {{ total }} )
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // 6.0 父传子
    list: {
      type: Array,
    },
  },
  computed: {
    isAll: {
      // 6.2 点击全选框时触发
      set(checked) {
        console.log(checked);
        this.list.forEach((obj) => (obj.goods_state = checked));
      },
      // 6.1 小复选框变化时触发
      get() {
        return this.list.every((obj) => obj.goods_state === true);
      },
    },
    // 7.结算总数量
    total() {
      return this.list.reduce((sum, obj) => {
        if (obj.goods_state === true) sum += obj.goods_count;
        // return每次累加的结果
        return sum;
      }, 0); //累加初始值0
    },
    // 7.统计总价
    prices() {
      return this.list.reduce((sum, obj) => {
        // 注意：价格要和 * count再累加
        if (obj.goods_state === true) sum += obj.goods_price * obj.goods_count;
        return sum;
      }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>
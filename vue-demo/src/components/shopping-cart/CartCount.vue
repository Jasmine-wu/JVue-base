<template>
  <div class="my-counter">
    <!-- 5. 商品+1/-1 -->
    <!-- 5.1 细节：如何避免点击-1出现负值？ @click="gObj.goods_count>1 && gObj.goods_count--"-->
    <!-- 5.2 细节：只有1件时, -号按钮禁用,按钮禁用的时，点击事件不会被触发-->
    <!-- 5.3 禁止用户输入负值 -->
    <button
      type="button"
      class="btn btn-light"
      @click="gObj.goods_count--"
      :disabled="gObj.goods_count === 1"
    >
      -
    </button>
    <!-- goods_count双向数据绑定 -->
    <input type="number" class="form-control inp" v-model="gObj.goods_count" />
    <button type="button" class="btn btn-light" @click="gObj.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    gObj: {
      type: Object,
    },
  },
  // 5.3 禁止用户输入负件数
  watch: {
    gObj: {
      deep: true,
      handler() {
        console.log(this.gObj.goods_count);
        if (this.gObj.goods_count < 1) this.gObj.goods_count = 1;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
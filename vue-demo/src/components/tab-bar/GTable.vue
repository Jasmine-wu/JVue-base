<template>
  <table class="table table-bordered table-stripped">
    <thead>
      <!-- 3.1 thead自定义:slot -->
      <slot name="head"></slot>
    </thead>

    <tbody>
      <!-- 2. -->
      <tr v-for="value in arr" :key="value.id">
        <!-- 3.1 thead自定义:slot -->
        <slot name="body" :row="value"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  // 2.1
  props: {
    arr: {
      type: Array,
    },
  },
};
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
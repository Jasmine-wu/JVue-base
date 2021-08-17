
<template>
  <div>
    <!-- 获取组件对象-->
    <!-- 1.给组件设置ref属性  -->
    <RefDom ref="refDom"></RefDom>
  </div>
</template>
<script>
import RefDom from "./components/RefDom.vue";

export default {
  components: {
    RefDom: RefDom,
  },
  // 2. 获取
  mounted() {
    console.log(this.$refs.refDom);
    // 获取组件对象以后，可以调用组件内的一切
    this.$refs.refDom.printLog();
    console.log(this.$refs.refDom.attr1);
  },
};
</script>

<template>
  <div>
    <!-- 使用 -->
    <NameDom></NameDom>
  </div>
</template>
<script>
import NameC from "./components/NameC.vue";

export default {
  components: {
    // 不想给组件命名可以直接使用组件内设置的name属性
    [NameC.name]: NameC,
  },
};
</script>
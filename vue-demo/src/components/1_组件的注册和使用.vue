<template>
  <div>
    <!-- 1.3. 使用全局注册的组件 -->
    <pannel></pannel>
    <!-- 2.3. 使用局部注册的组件 -->
    <pannelL> </pannelL>
  </div>
</template>
<script>
// 2. 局部注册组件
// 2.1
import pannelL from "./components/pannelL.vue";
// 2.2
export default {
  components: {
    "pannelL": pannelL,
  },
};
</script>
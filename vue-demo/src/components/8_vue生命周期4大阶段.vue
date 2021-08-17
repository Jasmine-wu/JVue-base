<template>
  <div>
    <!-- v-if=false从dom中移除 -->
    <life v-if="isShow"></life>
    <button @click="isShow: false;">销毁life组件</button>
  </div>
</template>
<script>
import Life from "./components/Life.vue";

export default {
  components: {
    Life: Life,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<template>
  <div>
    <!-- 语法: :style="{css属性名：属性值}" -->

    <button :style="{ color: textColor }">设置class属性</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      textColor: "red",
    };
  },
};
</script>

<style scoped>
</style>
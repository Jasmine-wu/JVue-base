<template>
  <div>
    <!-- 语法: :class="{类名：布尔值}" -->

    <button :class="{ showBg: flag }">设置class属性</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style scoped>
.showBg {
  background-color: red;
}
</style>
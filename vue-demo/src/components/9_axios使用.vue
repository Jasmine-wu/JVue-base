
<template>
  <div>
    <Book></Book>
  </div>
</template>
<script>
import BookAxios from "./components/BookAxios.vue";

export default {
  // axios: 基与XMLHttpRequest和Promise封装的前后端异步请求库
  components: {
    Book: BookAxios,
  },
};
</script>
<template>
  <div>
    <!-- 目前v-model还只用于表单value属性值和数据双向绑定 -->
    <input type="text" v-model="name" />
    <hr />
    <input type="password" v-model="pwd" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pwd: "",
      name: "",
    };
  },
};
</script>
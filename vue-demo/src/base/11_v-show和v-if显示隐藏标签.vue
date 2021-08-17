<template>
  <div>
    <!-- v-if和v-show的区别 -->
    <!-- v-if=false:  从dom中移除-->
    <!-- v-show=false: display=none-->
    <p v-if="isShow">这是一个p</p>
    <div v-show="flag">这是一个div</div>

    <!-- v-if/v-else配合使用 -->
    <p v-if="age > 10">年龄大于10显示</p>
    <p v-else>年龄小于10显示</p>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isShow: false,
      flag: false,
      age: 15,
    };
  },
};
</script>
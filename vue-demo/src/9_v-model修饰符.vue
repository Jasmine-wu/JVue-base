<template>
  <div>
    <!-- 注意： -->
    <!-- 表单value值改变同步到数据的数字是字符串型的，但我们我想要的数字型的，怎么办？ -->
    <!-- v-modle修饰符 -->
    <!-- 1. v-model.number -->
    <input type="text" v-model.number="age" />
    <hr />
    <!-- 2. v-model.trim -->
    <input type="text" v-model.trim="motto" />

    <!-- .lazy -->
    <!-- 失去焦点且内容改变时触发 -->
    <hr />
    <span>自我介绍：</span>
    <textarea name="" id="" cols="30" rows="10" v-model.lazy="intro"></textarea>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: "",
      motto: "",
      intro: "123",
    };
  },
};
</script>
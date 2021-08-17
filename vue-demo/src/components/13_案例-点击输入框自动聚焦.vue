
<template>
  <div>
    <!-- <input ref="search" v-show="isShow" type="text" placeholder="请输入内容" />
    <button v-show="!isShow" @click="click">点击输入</button> -->
    <input ref="search" v-if="isShow" type="text" placeholder="请输入内容" />
    <button v-else @click="click">点击输入</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    // 1. 写法1:
    // click() {
    //   this.isShow = true;
    //   this.$nextTick(() => {
    //     this.$refs.search.focus();
    //   });
    // },

    //写法2:
    // nextTick返回的是promise对象
    async click() {
      this.isShow = true;
      await this.$nextTick();
      this.$refs.search.focus();
    },
  },
};
</script>
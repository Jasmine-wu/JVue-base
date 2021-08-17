
<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  // 组件闯进和销毁钩子函数
  created() {
    console.log("userinfo create");
  },
  destroyed() {
    console.log("userinfo destroy");
  },
  // 组件缓存在的钩子函数
  activated() {
    console.log("userinfo被激活");
  },
  deactivated() {
    console.log("userinfo失去激活");
  },
};
</script>
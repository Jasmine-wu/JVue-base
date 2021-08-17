<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" />
    </div>
    <div>
      <span>密码：</span>
      <input type="password" />
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log("account create");
  },
  destroyed() {
    console.log("account destroy");
  },
  // 组件缓存在的钩子函数
  activated() {
    console.log("account被激活");
  },
  deactivated() {
    console.log("account失去激活");
  },
};
</script>
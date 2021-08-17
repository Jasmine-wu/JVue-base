<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <h4>标题</h4>

      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">
      <!-- 作用域插槽占位： -->
      <!-- 1.将你想访问的内部变量动态绑定在插槽的属性上，属性名随意 -->
      <slot :row="defaultObj">{{ defaultObj.defaultOne }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      defaultObj: {
        defaultOne: "默认内容1",
        defaultTwo: "默认内容2",
      },
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>
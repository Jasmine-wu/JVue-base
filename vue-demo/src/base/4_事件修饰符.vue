<template>
  <div>
    <!-- 事件修饰符：-->
    <!-- 1. prevent：阻止默认事件 -->
    <a @click.prevent="one" href="http://www.baidu.com">阻止默认跳转</a>
    <br />
    <!-- 2. one: 只触发一次 -->
    <a @click="two(10, $event)" href="http://www.baidu.com"
      >程序运行期间值只触发一次</a
    >

    <!-- 3。stop： 阻止事件冒泡 -->
    <div class="father" @click="fatherClick">
      <div class="son" @click.stop="sonClick">click 阻止事件冒泡</div>
    </div>

    <!-- 4.多个修饰符连用 .prevent.stop -->
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    one(e) {
      console.log(e);
    },
    two(num, e) {
      console.log(num);
    },
    fatherClick() {
      console.log("f click");
    },
    sonClick() {
      console.log("s click");
    },
  },
};
</script>
<style scoped>
.father {
  width: 200px;
  height: 200px;
  background-color: red;
}

.son {
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>
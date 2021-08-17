<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>

      <PannelView>
        <!-- 插槽1内容 -->
        <template v-slot:title>
          <h4>风景独好</h4>
        </template>
        <!-- 插槽2内容 -->
        <template v-slot:content>
          <img src="./assets/logo.png" alt="" />
          <p>这是内容</p>
        </template>
      </PannelView>

      <PannelView>
        <!-- 插槽1内容 -->
        <template v-slot:title>
          <h4>风满楼</h4>
        </template>

        <!-- 插槽2内容 -->
        <template v-slot:content>
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </template>
      </PannelView>
    </div>
  </div>
</template>
<script>
// 问题：组件内有多个地方需要放入标签怎么办？多个插槽
// 解决:
// 1. 给每个插槽设置name属性，区分插槽
// 2. 将外传入的标签包在template里，并用v-slot属性=name对应不同的插槽
// 注意：v-slot:title，冒号是具名插槽
import PannelView from "./components/PannelView2.vue";
export default {
  components: {
    PannelView,
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>
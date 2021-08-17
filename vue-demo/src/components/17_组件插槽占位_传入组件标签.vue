<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <PannelView>
        <!-- 2.在外传入真实内容替换slot占位-->
        <img src="./assets/logo.png" alt="" />
        <p>这是内容</p>
      </PannelView>
      <PannelView>
        <!-- 2.在外传入真实内容替换slot占位-->
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </PannelView>
      <!-- 3. 插槽的默认内容: 如果占位的slot有默认内容 -->
      <!-- 3.1 如外部不传入真实内容时，会显示默认内容 -->
      <!-- 3.2 如外部传入真实内容，替换默认内容 -->
      <PannelView></PannelView>
    </div>
  </div>
</template>
<script>
// 问题，组件里的数据不确定怎么办? props暴露属性，外面动态设置
// 问题，如果组件标签也不确定呢？下拉的内容显示不一样，怎么传不同的标签内容进去？
// 解决：通过slot属性，让组件接收不同的标签

// 1. 使用slot标签在PannelView下拉位置占位（含不含默认内容的插槽）
// 2. 在外传入真实内容替换slot占位
import PannelView from "./components/PannelView.vue";
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
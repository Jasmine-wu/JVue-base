<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>

      <PannelView>
        <!-- 2 : 用一个任意变量(scope)接收你在该插槽上绑定的所有变量-->
        <template v-slot="scope">
          <!-- 3. 访问具体的变量 -->
          {{ scope.row.defaultTwo }}
        </template>
      </PannelView>
    </div>
  </div>
</template>
<script>
import PannelView from "./components/PannelView3.vue";
// 问题: 在父组件使用插槽时，能否使用插槽内的变量呢？
// 比如：在外面将占位插槽的内容改为defaultTwo

// 解决：作用域插槽
// 1. 在占位插槽上将你想访问的组件内部变量动态绑定在slot标签属性上:row="defaultObj"（属性名随意）
// 2. 在外面传入插槽具体内容时，用template,v-slot="随意变量名"包起来,如v-slot="scope"
// 2.2 占位插槽上的所有绑定的变量会绑定在这个变量上
// 3. 在外面访问你想访问的组件: scope.row.defaultObj
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
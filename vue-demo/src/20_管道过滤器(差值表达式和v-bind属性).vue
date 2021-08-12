
<template>
  <div id="app">
    <!-- vue过滤器只能用于插值表达式和v-bind属性 -->
    <!-- 管道过滤器：对传入值处理，返回处理结果 -->

    <!-- 一：定义过滤器语法： -->
    <!-- 1: Vue.filter("过滤器名",fn) -->
    <!-- 2: filter:{"过滤器名字":fn} -->

    <!-- 二：过滤器传参数 -->

    <!-- 1.使用:全局过滤器  -->
    <ul>
      <li v-for="(item, index) in dataArr" :key="index">
        {{ item | reverse }}
      </li>
    </ul>

    <!-- 2.使用局部过滤器 -->
    <p>使用局部过滤器{{ msg | reverse2 }}:</p>

    <!-- 3. 使用带参数的局部过滤器 -->
    <p>使用局部过滤器{{ msg | reverse3("111") }}:</p>
  </div>
</template>

<script>
// 1.定义全局过滤器：任何vue文件都可用
import Vue from "vue";
Vue.filter("reverse", (obj) => obj.split("").reverse().join(""));

export default {
  name: "App",
  data() {
    return {
      dataArr: ["hello2", "hello1", "hello3", "hello5", "hello6"],
      msg: "a title",
    };
  },
  // 2.定义局部过滤器，当前vue可用
  filters: {
    reverse2(obj) {
      return obj.split("").reverse().join("");
    },
    // 过滤器传参
    reverse3(obj, arg) {
      console.log(obj);
      console.log(arg);

      return obj.split("").reverse().join("");
    },
  },
};
</script>

<style >
.red {
  color: red;
}
</style>
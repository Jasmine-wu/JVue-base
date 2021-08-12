<template>
  <div>
    <!--1. 差值语法设置标签内容值 -->
    {{ msg }}
    {{ obj.name }}
    {{ obj.age > 10 ? 100 : 10 }}

    <!-- 2: v-bind/:语法设置标签属性值 -->
    <input type="text" :placeholder="hint" />
  </div>
</template>

<script>
// 1. vue变量声明要放到js data函数return对象里
// 2. vue插入标签内容:插值语法{{obj/表达式}}
// 3. vue给标签属性设置变量：v-bind：属性名:"变量名"/ :属性名=“变量名”
export default {
  name: "App",
  data() {
    return {
      msg: "hello my friend",
      obj: {
        name: "xxxx",
        age: 10,
      },
      hint: "这是一个提示",
    };
  },
};
</script>


<style scoped>
/* scoped 保证样式只对当前template标签内有效 */
</style>

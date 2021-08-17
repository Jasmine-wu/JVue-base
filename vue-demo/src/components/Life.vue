
<template>
  <div>
    <p id="my">{{ msg }}</p>
    <ul>
      <li v-for="(value, index) in arr" :key="index">
        {{ value }}
      </li>
    </ul>
    <button @click="clickFn">添加一条数据</button>
  </div>
</template>
<script>
// 生命周期钩子函数
export default {
  data() {
    return {
      msg: " this is a msg",
      arr: [3, 5, 4, 7],
      timer: null,
    };
  },
  methods: {
    clickFn() {
      this.arr.push("xxx");
    },
  },
  //    1. 初始化
  // 1.1: beforeCreate: new Vue()以后，初始化生命周期函数和一些事件(较少用)
  // 此时vue实例方法vdata/vmethods还未初始化
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.msg); //undefine
  },
  // 1.2: created： 实例创建完毕,此时vue实例方法vdata/vmethods初始化之后
  // 应用场景：提前注册事件（eventBus）/网络请求等
  created() {
    console.log("Created");
    // 开启定时器
    this.timer = setInterval(() => {
      console.log("+1");
    }, 1);
  },
  //   2. 挂载
  // 2.1: beforeMount: 挂载之前,此时编译template成render function
  // 应用场景：预处理data，不会触发updated钩子函数
  beforeMount() {
    console.log("beforeMount");
    console.log(document.getElementById("my")); //null
    this.msg = "更换值";
  },
  // 2.2: mounted：挂载，此时真实dom已取代虚拟dom
  // 应用场景： 获取真实dom
  mounted() {
    console.log("mount");
    console.log(document.getElementById("my"));
  },
  //   3. 更新:  当data变化时才会触发！
  //   3.1: beforeUpdate： 虚拟dom重新渲染
  beforeUpdate() {
    console.log("beforeUpdate");
    // 拿不到更新的li xxx
    console.log(document.querySelector("ul>li:nth-of-type(5)")); //null
  },
  updated() {
    console.log("updated");
    console.log(document.querySelector("ul>li:nth-of-type(5)"));
  },

  //4. 销毁: 从dom中移除该组件时才会调用
  //应用：该组件销毁之前，移除该组件开启的定时器，全局事件等
  beforeDestroy() {
    //   销毁定时器
    clearInterval(this.timer);
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>


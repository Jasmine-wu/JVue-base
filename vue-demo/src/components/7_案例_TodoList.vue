<template>
  <div class="todoapp">
    <!-- 3.3 接收add添加事件 -->
    <!-- 9.1 全选 -->
    <theader @add="addTask" :arr="list"></theader>
    <!-- 4.3 接收del删除事件@del="delTask" -->
    <!-- 6.4  showList-->
    <tmain :arr="showList" @del="delTask"></tmain>
    <!-- 5.2 统计总任务数;:arr="list" -->
    <!-- 6.2 切换list数据显示：@changeStatus="renderUI"> -->
    <!-- 6.4 showList -->
    <!-- 7.2 清除已完成 -->
    <tfooter
      :arr="showList"
      @changeStatus="renderUI"
      @clearDone="clearFn"
    ></tfooter>
  </div>
</template>
<script>
// 1.导入样式文件
import "./styles/base.css";
import "./styles/index.css";
// 2.导入子组件
import todoFooter from "./components/todo/TodoFooter.vue";
import todoHeader from "./components/todo/TodoHeader.vue";
import todoMain from "./components/todo/TodoMain.vue";
// 3. 添加任务
// 分析：需要将header组件里的值传给App.vue组件的list变量（子传父）
// 4. 删除任务
// 分析：mian组件里的删除事件以及删除哪条数据需要传递给App.vue(子传递父)
// 5. 统计任务总数
// 分析：任务总数依赖于list的长度--->计算属性
// 6. 切换显示（全部，未完成，已完成）
// 分析：需切换button的样式以及切换list数据（重点：样式/数据切换的思路）
// 注意：如果数组过滤然后赋值给原数组会导致数组被覆盖，数据永久丢失。那要如何切换数据？
// 7.清空已完成
// 分析： 删选出已完成的数据赋值给原数组
// 8. 数据缓存
// 添加/删除/清空已完成都是永久操作，每个操作都存到本地？
// 解决：深度监听list数据的改变
// 9. 全选功能

export default {
  components: {
    theader: todoHeader,
    tmain: todoMain,
    tfooter: todoFooter,
  },
  data() {
    return {
      // 8.2 从缓存中获取数据
      list: JSON.parse(localStorage.getItem("todoList")),
      status: "all",
    };
  },
  methods: {
    // 3.3 添加任务
    addTask(content) {
      const id =
        this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1;
      this.list.push({
        id: id,
        name: content,
        isDone: false,
      });
    },
    // 4.3。删除任务
    delTask(index) {
      this.list.splice(index, 1);
    },
    // 6.2
    renderUI(status) {
      // 注意：不能直接操作list，直接操作list会导致数据永久丢失
      // 思路：筛选list赋值给计算属性，数据值用计算属性值！！！！！！！！！
      this.status = status;
    },
    // 7.3 清除已完成是永久改变原数据
    clearFn() {
      this.list = this.list.filter((obj) => obj.isDone === false);
    },
  },
  // 6.3
  computed: {
    showList() {
      if (this.status === "all") {
        return this.list;
      } else if (this.status === "yes") {
        return this.list.filter((obj) => obj.isDone === true);
      } else if (this.status === "no") {
        return this.list.filter((obj) => obj.isDone === false);
      }
    },
  },
  // 8.1 深度监听list数组变化
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem("todoList", JSON.stringify(this.list));
      },
    },
  },
};
</script>
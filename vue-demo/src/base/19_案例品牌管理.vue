
<template>
  <div id="app">
    <!-- 涉及的知识点： -->
    <!-- 1. vue如何引入bootstrap样式文件? -->
    <!-- 1.1 yarn add bootstrap -->
    <!-- 1.2  import 'bootstrap/dist/css/bootstrap.css' -->

    <!-- 2. class属性设置动态值 -->
    <!-- 比如，价格大于100,价格文字颜色为红色 -->

    <!-- 3. 新增表单数据 -->
    <!-- 如何动态获取表单值？ -->
    <!-- 4. 删除表单数据 -->
    <!-- 如何获取点击删除对应的数据？如何删除？（删除事件传递参数id） -->

    <!-- 5.使用局部过滤器处理时间 -->

    <!-- 6.使用计算属性计算总价和均价 -->
    <!-- 问：为什么不用函数而是用计算属性？ -->

    <!-- 7.监听list变量变化，缓存到本地 -->

    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>
            <!-- 动态设置class属性值:class="{className:布尔值}" -->
            <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <!-- 5.3 使用局部时间过滤器 -->
            <td>{{ obj.time | dateFomate }}</td>
            <td><a @click="deleteFn(obj.id)" href="javascript:;">删除</a></td>
          </tr>
          <!-- 6: 使用计算属性计算总价和均价 -->
          <tr>
            <td>统计</td>
            <td colspan="2">计算总价为: {{ total }}</td>
            <td colspan="2">计算均价为: {{ average }}</td>
          </tr>
        </tbody>
        <!-- 显示和隐藏暂无数据 -->
        <tfoot v-show="this.list.length <= 0">
          <tr>
            <!-- 合并列 -->
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <!-- 获取表单value值 -->
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!--.prevent 阻止默认提交行为 -->
        <button @click.prevent="add" class="btn btn-primary">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 5.1 导入moment模块
import moment from "moment";
export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: JSON.parse(localStorage.getItem("plist")), //7.2
      // list: [
      //   { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
      //   { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
      //   { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
      //   { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      // ],
    };
  },
  methods: {
    // 3. 添加最新数据
    add() {
      if (this.name.length <= 0) {
        return alert("资产名称不能为空");
      }

      if (this.price <= 0) {
        return alert("资产价格不能小于0");
      }

      const id =
        this.list.length === 0 ? 1 : this.list[this.list.length - 1].id + 1;

      const newData = {
        // 3.1 获取最新id+1
        id: id,
        // 3.2 动态获取表单值
        name: this.name,
        price: this.price,
        time: new Date(),
      };
      // 3.3 往数组里添加数据
      this.list.push(newData);
    },

    // 4. 删除数据
    deleteFn(id) {
      console.log(id);
      // 4.1 根据对象id找到数组对象里对应数据的下标
      let index = this.list.findIndex((obj) => obj.id === id);
      // 4.2 根据下标删除数组里的数据
      this.list.splice(index, 1);
      // 注意:slice是截取
    },
  },
  // 5.2使用moment模块定义时间过滤器
  filters: {
    dateFomate: function (value) {
      return moment(value).format("YYYY-MM-DD");
    },
  },
  // 6. 使用计算属性计算总价和均价
  computed: {
    total() {
      //6.1 数组的累积求和方法
      // sum累积的对象，obj遍历的对象，0 sum初始值
      return this.list.reduce((sum, obj) => (sum += obj.price), 0).toFixed(2);
    },
    average() {
      // 6.2
      return (this.total / this.list.length).toFixed(2);
    },
  },
  // 7.监听list变化，缓存到本地
  watch: {
    list: {
      deep: true,
      handler(newVal, oldVal) {
        // 7.1
        localStorage.setItem("plist", JSON.stringify(this.list));
      },
    },
  },
};
</script>

<style >
.red {
  color: red;
}
</style>
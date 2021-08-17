<template>
  <div class="table-list">
    <GTable :arr="list">
      <!-- 3.1 thead -->
      <!-- 3.1.2 具名插槽的另一种写法#name -->
      <template #head>
        <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </tr>
      </template>
      <!-- 3.2  tbody-->
      <!-- 3.2.2 具名插槽和作用域插槽连用 -->
      <template v-slot:body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <!-- 6. 添加tag -->
          <!-- 6.1 问题：点击+tag,v-if=“isshow”时，列表所有tr输入框都显示出来了 -->
          <!-- 解决：v-if不要绑定同一个固定值,而是绑定不同对象上的值:v-if="scope.row.inputVisible"-->
          <!-- 6.2 输入框自动聚焦 :v-ifocus-->
          <!-- 6.3 输入框失去焦点，切换成+tag ：@blur="scope.row.inputVisible = false"-->
          <!-- 6.4 监测输入框回车事件，有值，增加新的标签 -->
          <!-- 6.4 问题：如何监测各自的value值:v-model="scope.row.inputValue" -->
          <!-- 6.5 监听输入框esc事件，清空输入框 -->
          <input
            v-if="scope.row.inputVisible"
            v-ifocus
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            v-model.trim="scope.row.inputValue"
            @keydown.esc="scope.row.inputValue = ''"
            type="text"
            placeholder="请输入标签名"
            style="width: 80px; font-size: 7px"
          />
          <button
            v-else
            type="button"
            class="btn btn-primary btn-sm"
            @click="scope.row.inputVisible = true"
          >
            +tag
          </button>
          <!-- 4. tags标签的铺设 -->
          <span
            v-for="(tag, index) in scope.row.tags"
            :key="index"
            class="badge badge-warning"
            style="margin-left: 10px"
            >{{ tag }}</span
          >
        </td>
        <td>
          <button @click="deleteFn(scope.row.id)" class="btn btn-danger">
            删除
          </button>
        </td>
      </template>
    </GTable>
  </div>
</template>
<script>
import GTable from "../GTable.vue";
export default {
  components: {
    GTable,
  },
  data() {
    return {
      list: [],
      // 输入框默认隐藏
      isShow: false,
    };
  },
  // 2.请求数据，展示GoodsList页
  created() {
    this.$axios({
      url: "api/goods",
      method: "GET",
    }).then((res) => {
      this.list = res.data.data;
    });
  },
  methods: {
    // 5
    deleteFn(id) {
      const index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    // 6.4
    enterFn(obj) {
      if (obj.inputValue.length <= 0) {
        return alert("输入的标签为空");
      }
      // 增加新的标签
      obj.tags.push(obj.inputValue);
      //清空输入框
      obj.inputValue = "";
    },
  },
  // 6.2 自动聚焦
  directives: {
    ifocus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
<style scoped>
.table-list {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
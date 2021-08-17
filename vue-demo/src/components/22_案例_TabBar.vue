<template>
  <div>
    <!-- 0 头部 -->
    <GHeader :title="'tabBar案例'"></GHeader>
    <!-- 1.4 点击item切换页面-->
    <keep-alive>
      <component :is="curComponent"></component>
    </keep-alive>
    <!-- 1.底部tabBar-->
    <GTableBar :arr="itemsList" @switchItem="clickItem"></GTableBar>
  </div>
</template>
<script>
import GHeader from "./components/tab-bar/GHeader.vue";
import GTableBar from "./components/tab-bar/GTableBar.vue";
import GoodsList from "./components/tab-bar/views/GoodsList.vue";
import GoodsSearch from "./components/tab-bar/views/GoodsSearch.vue";
import UserInfo from "./components/tab-bar/views/UserInfo.vue";

// tabBar
// 1.先实现tabBar（重点）
// 分析：
// 1.1 自定义校验规则：item只能【2，5】项
// 1.2 追加class
// 1.3 切换tab item，切换高亮样式
// 当item index=选中的index时，动态设置class
// 1.4 切换tab item，切换页面

// 2. 请求数据，展示GoodsList页

// 3. GTable里的头部和主体自定义(具名插槽+作用域插槽)

// 4. tags标签的铺设(v-for+bootstrap样式)

// 5. 删除数据

// 6. 点击+tag，添加tag标签（重点）
// 分析：
// 6.1 问题：点击+tag,v-if=“isshow”时，列表所有tr输入框都显示出来了
// 解决：v-if不要绑定同一个固定值,而是绑定不同对象上的值:v-if="scope.row.inputVisible"
// 6.2 输入框自动聚焦 :v-ifocus
// 6.3 输入框失去焦点，切换成+tag ：@blur="scope.row.inputVisible = false"
// 6.4 监测输入框回车事件，有值，增加新的标签
// 6.4 问题：如何监测各自的value值:v-model="scope.row.inputValue"
// 6.5 监听输入框esc事件，清空输入框

export default {
  components: {
    GHeader,
    GTableBar,
    GoodsList,
    GoodsSearch,
    UserInfo,
  },
  data() {
    return {
      itemsList: [
        // 底部导航的数据
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "GoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "GoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "UserInfo",
        },
      ],
      // 默认当前页
      curComponent: "GoodsList",
    };
  },
  // 1.4 点击item切换页面
  methods: {
    clickItem(name) {
      this.curComponent = name;
    },
  },
};
</script>
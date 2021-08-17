<template>
  <div id="container">
    <MyTable :list="list">
      <!-- 2. -->
      <template v-slot="scope">
        <!-- 1. 可传入标签 -->
        <img style="width=40px;" :src="scope.row.headImgUrl" alt="" />
        <!-- 2. 可传入内容 -->
        <!-- {{ scope.row.headImgUrl }} -->
      </template>
    </MyTable>
  </div>
</template>
<script>
import MyTable from "./components/MyTable.vue";
// 需求：图像内容自定义:可传入内容，也可传入标签,是不是很灵活？
// 问题：图片地址怎么拿到？
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [
        {
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
        },
        {
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
        },
        {
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>
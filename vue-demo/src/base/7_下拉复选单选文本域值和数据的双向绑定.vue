<template>
  <div>
    <!-- 注意：v-model双向绑定的是value属性 -->
    <!-- 1.下拉框 ：下拉框v-model要绑定在select标签上-->
    <span>请选择:</span>
    <select name="city" id="" v-model="city">
      <option value="北京">北京</option>
      <option value="上海">南京</option>
      <option value="长沙">长沙1</option>
    </select>

    <hr />
    <!-- 2. 复选框 -->
    <!-- 复选框v-model绑定的数据非数据，绑定的是checked属性 -->
    <!-- 数组：绑定的value -->
    <input type="checkbox" value="游泳" v-model="hobby" />游泳
    <input type="checkbox" value="学习" v-model="hobby" />学习
    <input type="checkbox" value="读书" v-model="hobby" />读书
    <hr />

    <!-- 3. 单选框 -->
    <span>请选择：</span>
    <input type="radio" value="男" v-model="gender" />男
    <input type="radio" value="女" v-model="gender" />女
    <hr />

    <!-- 5. 文本域 -->
    <span>评论:</span>
    <textarea
      name="txt"
      id=""
      cols="30"
      rows="10"
      v-model="comments"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 下拉框默认选中value=上海对应的南京
      city: "上海",
      // 复选框默认选中value=学习/读书
      hobby: ["", "学习", "读书"],
      // 单选框默认选中value=女的
      gender: "女",
      comments: "123",
    };
  },
};
</script>
<template>
  <div>
    <button @click="getBooks">使用axios发起get请求</button>
    <br />
    <!-- -->

    <button @click="getBook">使用axios发起带参数get请求</button>
    <br />

    <button @click="addBooks">使用axios发起post请求</button>
  </div>
</template>
<script>
// axios使用：先下载:yarn add axios
import axios from "axios";
// 4.axios全局配置
axios.defaults.baseURL = "http://123.57.109.30:3006/";
export default {
  data() {
    return {
      bookname: "水浒传1",
      bookObj: {
        bookname: "水浒",
        author: "章三",
        publisher: "xx出版社",
      },
    };
  },
  methods: {
    //   1.不带参数get请求
    getBooks() {
      axios({
        url: "api/getbooks",
        method: "GET",
      }).then((res) => {
        console.log(res);
      });
    },
    // 2.带参数get请求
    getBook() {
      axios({
        url: "api/getbooks",
        method: "GET",
        params: { bookname: this.bookname },
      }).then((res) => {
        console.log(res);
      });
    },
    // 3. 发送post请求
    addBooks() {
      axios({
        url: "api/addbook",
        method: "POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          //   重点
          ...this.bookObj,
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
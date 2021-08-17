<template>
  <div>
    <!-- 1.2. 使用全局自定义指令 -->
    <!-- <input type="text" v-gfocus /> -->
    <!-- 2.2。使用全局自定义指令-->
    <input type="text" v-gfocus2 />
    <!-- 3。 自定义指令传值 -->
    <!-- 注意传值 -->
    <p v-color="gcolor">自定义指令传值-修改文字颜色</p>
  </div>
</template>
<script>
// 需求：使用自定义指令，在页面一打开，输入框自动聚焦
// 自定义指令
//1.注册全局自定义指令
//1.2.使用v-指令名

// 2. 注册局部自定义指令
// 2.2.使用v-指令名

// 3.自定义指令传值
// 自定义指令改变文字颜色
// ！！！3.1 注意：inserted函数只有当标签插入dom时才会执行，因此即使gcolor值变化，页面也不会刷新
// 解决：自定义指令的update方法

export default {
  data() {
    return {
      gcolor: "red",
    };
  },
  directives: {
    gfocus2: {
      // 标签插入dom才会触发inserted
      inserted(el) {
        el.focus();
      },
    },
    // 3.自定义指令传值
    color: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      // 3.1 解决自定义指令传入的数据值更新，但页面不更新的问题
      // 产生问题的原因：inserted方法只有在标签插入dom中才会调用一次
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
  },
};
</script>
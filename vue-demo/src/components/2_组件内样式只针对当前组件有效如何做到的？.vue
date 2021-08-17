<template>
  <div>
    <!-- 使用style scoped -->
    <!-- 1.style scoped时，样式只在当前文件内有效，这是如何做到的？ -->
    <!-- 原理：给组件内每个标签添加一个随机属性，设置样时使用包含该属性的属性选择器设置 -->
    <!-- 1.1 style 作用范围=scoped后，会在自定义组件所有标签内增加data-v-hash值属性-->
    <!-- 1.2 设置样式时，css选择器都被都被添加了[data-v-hash值]的属性选择器 -->
  </div>
</template>
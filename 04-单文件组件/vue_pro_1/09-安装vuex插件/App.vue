<!-- 
  vuex 插件的使用

  使用场景: 
  多个组件依赖于同一状态。来自不同组件的行为需要变更同一状态

  载体：
  store 对象

  安装：
  1. 安装 npm i vuex@3 / vuex@4
  2. 创建 vuex 目录(vuex) 和目录里 js 文件(store.js)
  3. js 中创建 store 对象并暴露
  4. main.js import store 对象
  5. Vue vm 实例增加 store 配置

  注意：
  1. 如果只是两个组件之间的数据通信 可以使用 vuex 但是不建议



-->

<template>
  <div>
    <alpha-a></alpha-a>
    <hr>
    <alpha-b></alpha-b>
  </div>
</template>

<script>
import AlphaA from './components/AlphaA.vue';
import AlphaB from './components/AlphaB.vue';

export default {
  name : "app",
  components : {AlphaA, AlphaB},
  

}

</script>

<!-- 
  消息的订阅与发布

  作用: 
  任意组件之间传递数据

  对象：
  发送方：发送数据
  订阅方：接收数据

  使用第三方库进行订阅与发布
  pubsub.js --》 第三方库
  1。 安装 npm i pubsub
  2. 使用 pubsub 对象
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

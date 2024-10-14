<!-- 
  全局事件总线

  1. 解决问题
  "兄弟", "爷孙" 组件间通信

  2. 在 main.js 中, 通过 原型链 给 Vue 对象扩展 $bus 属性
  通过给这个属性 绑定事件 和 绑定回调函数与事件
  进行跨组件通信


-->

<template>
  <div>
    <user-father @tranEvent="doEvent"></user-father>
  </div>
</template>

<script>
import userFather from './components/UserFather'

export default {
  name : "app",
  components : {userFather},
  mounted(){
    this.GVC.$on('tranEvent', this.doEvent);
  }, 
  methods : {
    doEvent(...params){
      console.log(params);
    }

  }

}

</script>

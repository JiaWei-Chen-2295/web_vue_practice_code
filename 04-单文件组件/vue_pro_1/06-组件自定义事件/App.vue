<!-- 
  组件自定义事件

  内置事件: 
    keyup click...
  
  组件的自定义事件的步骤
    1. 提供事件源(组件)
    2. 给组件绑定事件
      v-on: 事件名 |  @ 事件名
    3. 编写回调函数，将回调函数与事件进行绑定
    4. 等待事件的触发，事件触发，执行回调函数

    对于事件的once修饰符来说，组件的自定义事件也是可以使用的。
  
  对于自定义事件来说，需要一段代码来让其发生
  代码需要在被绑定事件的组件中书写

  作用：
  子组件向父组件传递参数

  父子组件通讯：
  父亲 -> 子 : props
  子   -> 父 : 组件自定义
  父绑定 -> 子传出
  

  方式: 
  1. 通过给子组件上标签
  2. 通过 ref

  如何解绑事件: 
    在被绑定事件的组件(子组件)中解绑事件
    使用 vc 的 $off
    this.$off('事件名')
    可以传入一个数组 不传入参数表示解绑全部事件

    vue 销毁时会自动解绑全部事件
-->

<template>
  <div>
    
    <user v-on:alevent="doEvent1"></user>    
    <user @alevent="doEvent1"></user>    

    <user ref="user"></user>

    <user ref="user2"></user>
    
    <user ref="user3"></user>
  </div>
</template>

<script>
import user from './components/user'

export default {
  name : "app",
  components : {user},
  mounted () {
    // 给ref是 user 的组件绑定 alevent 事件，并且给 alevent 事件绑定一个回调函数
    // 这里的 this 是 app 实例
    this.$refs.user.$on("alevent", this.doEvent1);

    // 保证事件仅仅触发一次
    // this.$refs.user.$once("alevent", this.doEvent1);
    
    // 如果回调函数是普通函数
    // this 是 user 组件实例，不是 app 实例
    // 这个函数归 user 组件调用
    this.$refs.user2.$on("alevent", function(){
      console.log(this);
    });

    // 回调函数是箭头函数
    // this 还是 app
    this.$refs.user3.$on("alevent", ()=>{
      console.log(this);
    });

  },
  methods : {
    // ES6 传入一个数组
    doEvent1(...param){
      alert(param);
    }

  }
}

</script>

<!-- 
 两个 Vue 组件有相同实现的功能函数无法复用

  解决方案: 
    使用 mixin 混入功能

  使用方式:
    1. 在 src 根目录新建 mixin.js (规范)
    写好所需的函数,并 export 这个函数

    2. 组件中import 函数

    3. 在组件配置项添加 mixins 
    minins 配置项的值是一个数组
    数组中的元素就是所用的函数名

  注意: 
    1. 当 mixin 的函数名与 methods 中的函数名一致
    会就近使用 methods 中的函数
    2. mixin vue 生命周期对钩子函数有影响
    3. 在 main.js 可以全局引用混入函数
    Vue.mixin()
    4. 但对于生命周期周期钩子函数来说，混入时，会采用叠加方式：
       就是在钩子函数中调用时，先执行混入的，后执行 methods 中的原来的。
-->
<template>
  <div>
    <myUser></myUser>
    <vipUser></vipUser>
  </div>
</template>

<script>

import myUser from "./components/user.vue"
import vipUser from '@/components/VipUser.vue'
export default {
  name : "app",
  components : {myUser, vipUser}
}
</script>

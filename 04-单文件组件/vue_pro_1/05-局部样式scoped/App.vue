<!-- 
  当组件的模板 class 一致
  vue 会将 css 合并
  会影响不同组件的样式
  
  style 的 scoped 属性保证了每个组件的 css 独立性，哪怕组件标签 class 一致
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

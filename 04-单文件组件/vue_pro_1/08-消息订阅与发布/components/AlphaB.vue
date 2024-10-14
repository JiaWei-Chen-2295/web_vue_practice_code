<template>
  <div>
    <span>B</span>
    <button @click="publishInfo">将 this 的 msg 发布给 A</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data(){
        return {
            msg : "ME!!"
        }
    },
    methods : {
      publishInfo(){

        
        // 发布消息
        pubsub.publish('B', this.msg);
      }
    }
}
</script>

<template>
  <div>
    <span>A</span>

  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    mounted (){
        // A 组件挂载完 进行订阅对象
        // this.PId = pubsub.subscribe('B', function(messageName, message){
        //     // messageName -> key
        //     // message -> value
        //     console.log("消息名字" + messageName + "\n" + "Info" + message);
        // });
        // 推荐使用箭头函数 函数体中的 this 是 VC 
        this.PId = pubsub.subscribe('B', (messageName, message) => {
            // messageName -> key
            // message -> value
            console.log("我在 A 组件");
            console.log("消息名字" + messageName + "\n" + "Info" + message);
        });
    },
    beforeDestroy(){
        // 取消订阅
        pubsub.unsubscribe(this.PId);
    }
}
</script>

<template>
  <div calss="box">
    <h1>{{ msg }}</h1>
    <hr>
    <user></user>
  </div>
</template>

<script>
import user from './user'
export default {
    data (){
        return {
            msg : "用户信息"
        }
    },
    components: {user}

}
</script>

<style scoped>
    .box {
        background-color: skyblue;
        border : 0.5px;
        
    }
</style>
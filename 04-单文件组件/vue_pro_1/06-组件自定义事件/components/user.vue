<template>
  <div>
    <h1>{{ msg }}</h1>

    <table>
        <thead>
            <tr>
                <th>名字</th>
                <th>年龄</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <th>{{ name }}</th>
                <th>{{ age }}</th>
            </tr>
        </tbody>
    </table>

    <button @click="triggerEvent1">弹窗查看信息</button>
  </div>
</template>

<script>

export default {
    name : 'myUser',
    data(){
        return {
            msg : "查看用户",
            name : "李四",
            age : 20
        }
    },

    methods : {

        triggerEvent1(){
            // 触发 event 事件的代码
            // 写在这里
            // p = param
            // 触发事件同时，可以给事件绑定的回调函数传参数
            this.$emit('alevent', this.name, this.age);
            
        },
        unbinding(){
            // 仅仅解绑 this 的 这个事件
            this.$off("alevent");
        }
    }
}
</script>


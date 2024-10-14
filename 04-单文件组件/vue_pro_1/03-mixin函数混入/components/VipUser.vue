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

    <button @click="alertInfo">弹窗查看VIP信息</button>
  </div>
</template>

<script>
// import { mix1 } from '@/mixin';
export default {
    name : 'vipUser',
    data(){
        return {
            msg : "查看VIP用户",
            name : "李四",
            age : 20
        }
    },
    // mixins : [mix1]
}
</script>


<template>
  <div>

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

    <button @click="tranInfo">将信息传给“爷爷”</button>

  </div>
</template>

<script>

export default {
    name : 'myUser',
    data(){
        return {
            name : "李四",
            age : 20
        }
    },

    methods : {
        tranInfo(){
            // 获取全局 vc
            this.GVC.$emit('tranEvent', this.name);
        }
    }

}
</script>


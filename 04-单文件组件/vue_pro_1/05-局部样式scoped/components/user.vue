<template>
  <div class="card">
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
    }
}
</script>

<style scoped>
    .card {
        color: yellowgreen;
    }
</style>


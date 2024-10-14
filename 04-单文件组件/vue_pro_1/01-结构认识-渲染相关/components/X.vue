<!-- 结构 -->
<template>
    <div>
        <h2>
            输入数字 <input type="text">
        </h2>
        <XX></XX>
    </div>
</template>

<!-- 交互 -->
<script>
    import XX from "./XX.vue"
    const x = {
        component : {XX}
    }

    // 默认导出
    export default x
</script>


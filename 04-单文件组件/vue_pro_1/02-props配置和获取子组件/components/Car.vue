<template>
    <div>
        <p>牌子： {{ brand }}</p>
        <p>颜色：{{ color }}</p>
        <p>价格：{{ inner_price }}W</p>
        <button @click="add">价格+1</button>
    </div>
</template>

<script>
export default {
    name : 'CarObj',

    data (){
        return {
            inner_price : this.price
        }
    },

    methods : {
        
        add(){
            // Vue 不建议直接在 props 中修改数据 会将这个值覆盖
            //this.price++;
            this.inner_price++;
        }
    },

    // data() {
    //     return {
    //         brand : 'su 7',
    //         color : 'red',
    //         price : 22
    //     }
    // }

    // 在 CarObj 组件中使用 props 数据项进行数据的接收

    // 第一种方式 数组(简单，直接用数组接收)
    //props : ['brand', 'color', 'price']

    // 第二种 对象 可以限制属性类型
    // props : {
    //     brand : String,
    //     color : String,
    //     // 当类型不对应时 控制台会报错
    //     price : Number
    // }

    // 第三种 添加类型限制 可以添加默认值 添加值的必要性
    props : {
        brand : {
            type : String,
            required : true
        },
        color : {
            type : String,
            default : "请咨询工作人员"
        },
        price : {
            type : Number,
            // 没有传输数据 就会报错
            required : true
        }
    }
}
</script>

<template>
  <div>
    <h1>App组件</h1>
    <!-- 在父组件的标签中 找到子组件,给其打标记 属性:ref -->
    <car-obj brand="su7" color="blue" :price=20 ref="car01"></car-obj>
    <br>
    <car-obj brand="su7Max" color="red" :price=23></car-obj>
    <br>
    <!-- 使用 v-bind 给属性赋值 Number 类型 -->
    <car-obj brand="xiaoPeng" color="blue" :price=20></car-obj>
    <br>
    <car-obj brand="ccc" :price=200></car-obj>
    <br>
    <car-obj brand="ccc" :price=250></car-obj>
    <hr>
    <button @click="printCarPriceSum">查看价格之和</button>
    


  </div>
</template>

<script>
import CarObj from './components/Car.vue'
export default {
  name : "app",
  methods : {
    printCarPriceSum(){
      // 从父组件中获取子组件
      // $refs 不仅可以访问到组件还可以访问 DOM 元素
      alert("价格之和是 " + this.$refs.car01.inner_price + "W");
    }
  },
  components : {CarObj}
}
</script>

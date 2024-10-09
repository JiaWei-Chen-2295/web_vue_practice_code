import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // Vue CLi 默认使用不带模板编译器的 vue（减少打包体积）

  // render 函数被自动调用
  // 会传入一个参数 createElement 
  // createElement 是一个函数
  /**
   * 等价于
   * render(createElement) {
   *    return  createElement(APP)
   * }
   * 使用箭头函数就是下面的
   * @param {function createElement(component) }
   * @returns 
   */
  render: h => h(App),
}).$mount('#app')

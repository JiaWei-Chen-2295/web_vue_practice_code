import Vue, { onBeforeMount } from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 创建共享 vc 对象
// const VcConstructor = Vue.extend({});
// const globalVc = new VcConstructor();

// 通过扩展原型对象属性来实现全局 共享 vc
// Vue.prototype.GVC = globalVc;

new Vue({
  el : '#app',
  render: h => h(App),
  beforeCreate(){
    // 通过扩展原型对象属性来实现全局 共享 vc
    Vue.prototype.GVC = this;
    // 有个更规范的名字
    Vue.prototype.$bus = this;
  }
});


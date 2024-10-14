import Vue from 'vue'
import App from './App.vue'

import { plugin1 } from './plugins'

// 使用插件
// 插件的使用一般在 vue 创建实例之前
Vue.use(plugin1, 1, 4);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

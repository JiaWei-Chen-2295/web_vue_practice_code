import Vue from 'vue'
import App from './App.vue'

// 全局引入

import { mix1 } from '@/mixin';
Vue.mixin(mix1);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

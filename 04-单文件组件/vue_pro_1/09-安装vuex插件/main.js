import Vue, { onBeforeMount } from 'vue'
import App from './App.vue'

import store from './vuex/store';

new Vue({
  el : '#app',
  // vm vc 均会增加 $store 属性
  store : store,
  render: h => h(App),
});


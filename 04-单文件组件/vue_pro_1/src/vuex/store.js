
import Vue from 'vue'

// 引入 vuex 插件
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 创建 store 对象配置的三个对象
const actions = {}
const mutations = {}
const state = {}

// 创建 store 对象
const store = new Vuex.Store({
    // // 负责某个行为的对象
    // actions : actions,
    // // 负责更新的对象
    // mutations: mutations,
    // // 状态对象
    // state : state

    // 简写
    actions, mutations, state 
});

export default store;
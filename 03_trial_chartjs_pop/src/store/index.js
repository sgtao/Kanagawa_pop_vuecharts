import Vue from 'vue'
import Vuex from 'vuex'
//
Vue.use(Vuex)
//
export default new Vuex.Store({
  // ステートを定義する
  state: {
    // ステート対象の初期値(false)を定義
    drawer: false
  },
  // ステートの状態を更新する
  mutations: {
    // アクションの内容として、drawer状態を反転を定義する
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    }
  },
  // actions はコンポーネントとのインタフェース
  actions: {
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu')
    }
  }
})
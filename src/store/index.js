import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    name:'name',
    grade:'grade',
    loggedIn: false, // 마이페이지 버튼 경로 설정(기본값 : false)
    toMyPage: false, // 마이페이지 버튼 경로 설정(기본값 : false)
    toLoginPage: true // 로그인 상태 표시 설정(기본값 : true)
  },
  getters: {
  },
  mutations: {
    loginPlease (state, payload) {
      state.name = payload.b_name
      state.grade = payload.b_grade
      state.loggedIn = true
      state.toMyPage = true
      state.toLoginPage = false
    },
    logoutPlease (state) {
      state.loggedIn = false
      state.toMyPage = false
      state.toLoginPage = true
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[createPersistedState({
    paths:['name', 'grade', 'loggedIn', 'toMyPage', 'toLoginPage']
  })]
})

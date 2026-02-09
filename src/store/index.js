import { createStore } from 'vuex'
export default createStore({
 state: {
 isLoggedIn: false,
 user: null
 },
 mutations: {
 LOGIN(state, user) {
 state.isLoggedIn = true
 state.user = user
 },
 LOGOUT(state) {
 state.isLoggedIn = false
 state.user = null
 }
 },
 actions: {
 login({ commit }, userData) {
 commit('LOGIN', userData)
 },
 logout({ commit }) {
 commit('LOGOUT')
 }
 },
 getters: {
 isLoggedIn: state => state.isLoggedIn,
 user: state => state.user
 }
})
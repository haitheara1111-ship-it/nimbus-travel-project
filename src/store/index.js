import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user: JSON.parse(localStorage.getItem('currentUser')) || null,
      users: JSON.parse(localStorage.getItem('users')) || []
    }
  },
  mutations: {
    register(state, newUser) {
      state.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    login(state, userData) {
      state.user = userData
      localStorage.setItem('currentUser', JSON.stringify(userData))
    },
    logout(state) {
      state.user = null
      localStorage.removeItem('currentUser')
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    user: (state) => state.user,
    users: (state) => state.users
  }
})

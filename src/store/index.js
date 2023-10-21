import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    Role: '',
    logined: false,
    username:''
  },
  getters: {
  },
  mutations: {
    REGISTER(state, infor){
      axios.post("https://localhost:7255/api/TaiKhoan/register",infor)
        .then(
          alert("Đăng ký thành công!")
        )
        .catch("đăng ký thất bại!")
    },

    async LOGIN(state, login){
      state.logined = true
      localStorage.setItem('isLogin',state.logined)
      state.username = login.account
      localStorage.setItem('username',state.username)
      if(login.roleId === 1)
      {
        state.Role = 'admin'
        localStorage.setItem('Role',state.Role)
      }
      else if(login.roleId === 2)
      {
        state.Role = 'HocVien'
        localStorage.setItem('Role',state.Role)
      }
      else if(login.roleId === 3)
      {
        state.Role = 'GiangVien'
        localStorage.setItem('Role',state.Role)
      }
    },

    LOGOUT(state){
      state.logined = false
      localStorage.setItem('isLogin',state.logined)
      state.Role = ''
      state.username = ''
      localStorage.setItem('username',state.username)
      localStorage.setItem('Role',state.Role)
    }
  },
  actions: {
    async register({commit}, credentials)
    {
      commit('REGISTER',credentials)
    },

    async login({commit} ,credentials)
    {
      commit('LOGIN',credentials)
    },

    logout({commit})
    {
      commit('LOGOUT')
    }
  },
  modules: {
  }
})

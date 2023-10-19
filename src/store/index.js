import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    admin: false,
    Hocvien: false,
    GiangVien: false,
    logined: false,
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
    }
  },
  actions: {
    async register({commit}, credentials)
    {
      commit('REGISTER',credentials)
    }
  },
  modules: {
  }
})

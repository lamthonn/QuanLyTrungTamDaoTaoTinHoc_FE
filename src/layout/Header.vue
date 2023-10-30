<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-light navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"
      ><img
        id="MDB-logo"
        src="../assets/logo.jpg"
        alt="MDB Logo"
        draggable="false"
        height="60"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <router-link class="nav-link mx-2" to="/">Trang Chủ</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link mx-2" to="/about">Giới Thiệu</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link mx-2" to="/recourses">Khóa Học</router-link>
        </li>
        <li class="nav-item ms-3" v-if="logined == 'false' ">
          <router-link class="btn btn-black btn-primary" to="/login" style="margin-right:5px;">Đăng nhập</router-link>
          <router-link class="btn btn-black btn-primary" to="/register">Đăng ký</router-link>
        </li>
        <li class="nav-item ms-3" v-else>
          <a-dropdown-button>
            {{ usernameData }}
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                  Thông tin cá nhân
                </a-menu-item>
                <a-menu-item key="2" @click="LogOut">
                  Đăng xuất
                </a-menu-item>
              </a-menu>
            </template>
            <template #icon><UserOutlined /></template>
          </a-dropdown-button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Navbar -->
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import { Menu, MenuItem, DropdownButton }  from 'ant-design-vue/es/components'
import { UserOutlined } from '@ant-design/icons-vue';
export default {
  name: "Header-",
  components: {
    AMenu: Menu,
    AMenuItem:MenuItem,
    ADropdownButton:DropdownButton,
    UserOutlined
  },
  setup() { 
    const store = useStore()

    // localStorage.getItem("LOGINED")
    const logined = ref(localStorage.getItem("LOGINED"));
    const usernameData = ref(localStorage.getItem("USERNAME"));
    const Role = ref(localStorage.getItem("ROLE"));

    watch([logined, usernameData, Role], ([newLogined, newUsername, newRole]) => {
      // Cập nhật các biến khi có sự thay đổi
      logined.value = newLogined;
      usernameData.value = newUsername;
      Role.value = newRole;

      
    });
    
    const LogOut = () => {
       store.dispatch('logout')
       console.log(logined.value);
       console.log(usernameData.value);
       console.log(Role.value);
    }

    return{
      store,
      logined,
      usernameData,
      Role,

      LogOut,
    }
  },
};
</script>

<style>
.navbar-light .navbar-nav .nav-link {
  color: #000;
}

</style>

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
          <router-link class="nav-link mx-2" to="">Khóa Học</router-link>
        </li>
        <li class="nav-item ms-3" v-if="Logined == false">
          <router-link class="btn btn-black btn-primary" to="/login">Đăng nhập</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Navbar -->
</template>

<script>
export default {
  name: "Header-",
  components: {},
  data() {
    return{
      Logined: false,
      HocVien: false,
      GiangVien: false,
      Admin: false,
    }
  },
  created(){
    this.Logined = this.$store.state.logined,
    this.HocVien = this.$store.state.Hocvien,
    this.GiangVien = this.$store.state.GiangVien,
    this.Admin = this.$store.state.admin
  },
  setup() { 
    
  },
};
</script>

<style>
.navbar-light .navbar-nav .nav-link {
  color: #000;
}

</style>

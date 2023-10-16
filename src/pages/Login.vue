<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Đăng nhập</h2>
        <form @submit="submitForm">
          <div class="form-group">
            <label for="username">Tên người dùng:</label>
            <input type="text" id="username" v-model="username" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="password">Mật khẩu:</label>
            <input type="password" id="password" v-model="password" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  setup() {
    
  }
};
</script>

<style scoped >
.container-fluid {
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 700px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 24px;
  text-align: center;
  margin: 20px 0;
}

.form-group {
  margin: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>

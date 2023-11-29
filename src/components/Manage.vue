<template>
        <div style="width: 76%; margin-left:12%;">
      <a-tabs>
        <a-tab-pane key="1" tab="Học Viên">
          <a-collapse>
                <h2>DANH SÁCH HỌC VIÊN</h2>
                <table class="container">
                    <thead>
                        <tr>
                            <th>Mã học viên</th>
                            <th>Tên học viên</th>
                            <th>Địa chỉ</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th colspan="2">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="hocvien in danhSachHocVien" :key="hocvien.id">
                            <td>{{ hocvien.maHV }}</td>
                            <td>{{ hocvien.tenHV }}</td>
                            <td>{{ hocvien.diaChi }}</td>
                            <td>{{ hocvien.sdt }}</td>
                            <td> {{ hocvien.email }}</td>
                            <td> {{ hocvien.ngaySinh }}</td>
                            <td> {{ hocvien.gioiTinh }}</td>
                            <td>
                                <div class="frame">
                                    <div class="iconOperation" @click="changeStudent"><i class="fa-solid fa-pen"></i></div>
                                    <div class="iconOperation" @click="deleteStudent"><i class="fa-solid fa-trash-can"></i></div>                                   
                                </div>   
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- <ul>
                    <li v-for="hocvien in danhSachHocVien" :key="hocvien.id">
                    <p>Tên: {{ hocvien.tenHV }}</p>
                    <p>Địa chỉ: {{ hocvien.diaChi }}</p>
                    <p>Số điện thoại: {{ hocvien.sdt }}</p>
                    <p>Email: {{ hocvien.email }}</p>
                    <p>Ngày sinh: {{ hocvien.ngaySinh }}</p>
                    <p>Giới tính: {{ hocvien.gioiTinh }}</p>
                    </li>
                </ul> -->
          </a-collapse>
        </a-tab-pane>

        <a-tab-pane key="2" tab="Giảng Viên">
          <a-collapse>
            <a-collapse>
                <h2>DANH SÁCH GIẢNG VIÊN</h2>
                <table class="container">
                    <thead>
                        <tr>
                            <th>Mã giảng viên</th>
                            <th>Tên giảng viên</th>
                            <th>Địa chỉ</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th colspan="2">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="giangvien in danhSachGiangVien" :key="giangvien.id">
                            <td>{{ giangvien.maGV }}</td>
                            <td>{{ giangvien.tenGV }}</td>
                            <td>{{ giangvien.diaChi }}</td>
                            <td>{{ giangvien.sdt }}</td>
                            <td> {{ giangvien.email }}</td>
                            <td> {{ giangvien.ngaySinh }}</td>
                            <td> {{ giangvien.gioiTinh }}</td>
                            <td>
                                <div class="frame">
                                    <div class="iconOperation" @click="changeTeacher"><i class="fa-solid fa-pen"></i></div>
                                    <div class="iconOperation" @click="deleteTeacher"><i class="fa-solid fa-trash-can"></i></div>                                   
                                </div>   
                            </td>
                        </tr>
                    </tbody>
                </table>
          </a-collapse>
          </a-collapse>
        </a-tab-pane>
      </a-tabs>
    </div>
</template>

<script>
import { Tabs, TabPane, Collapse, notification } from 'ant-design-vue/es/components'
import axios from 'axios';
import { ref, onMounted } from 'vue';  // Import ref và onMounted từ Vue

export default {
    name: 'manage',
  components: {
    ATabs: Tabs,
    ATabPane: TabPane,
    ACollapse: Collapse,
  },
  setup() {
    const danhSachHocVien = ref([]);
    const danhSachGiangVien = ref([]);

    onMounted(() => {
      const HVGetData = () => {
        axios.get('https://localhost:7255/api/HocVien')  
          .then(res => {
            danhSachHocVien.value = res.data;  // Sử dụng .value để gán giá trị cho ref
          })
          .catch(err => {
            notification.open({
              message: `lỗi khi lấy dữ liệu học viên:${err}`,
              onClick: () => {
                console.log('Notification Clicked!');
              },
            });
          });  
      }
      HVGetData();

      const GVGetData = () => {
        axios.get("https://localhost:7255/api/GiangVien/getAllGV")
        .then(res => {
            danhSachGiangVien.value = res.data;  // Sử dụng .value để gán giá trị cho ref
          })
          .catch(err => {
            notification.open({
              message: `lỗi khi lấy dữ liệu giảng viên:${err}`,
              onClick: () => {
                console.log('Notification Clicked!');
              },
            });
          });
      }
      GVGetData();
    });

    const changeStudent = () => {

    }
    const deleteStudent = () => {

    }

    const changeTeacher = () =>{
        
    }
    const deleteTeacher = () =>{

    }
    return {
      danhSachHocVien,
      danhSachGiangVien,
      changeStudent,
      deleteStudent,
      changeTeacher,
      deleteTeacher,
    }
  },
};
</script>


<style scoped>
body {
  font-weight: 300;
  line-height: 1.42em;
  color:#000;
  background-color:#a3d6ca;
}

h1 {
    font-size:3em; 
    font-weight: 300;
    line-height:1em;
    text-align: center;
    color: #4DC3FA;
}

h2 {
    text-align: center;
    padding-top: 10px;
    font-weight: bold;
    color: #198754;
}

.blue { color: #185875; }
.yellow { color: #FFF842; }

.container th h1 {
    font-weight: bold;
    font-size: 1em;
    text-align: left;
    color: #185875;
}

.container td {
    font-weight: normal;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
    -moz-box-shadow: 0 2px 2px -2px #0E1119;
    box-shadow: 0 2px 2px -2px #0E1119;
}

.container {
	text-align: left;
	overflow: hidden;
	width: 80%;
	margin: 0 auto;
    display: table;
}

.container td, .container th {
	padding-bottom: 2%;
	padding-top: 2%;
    padding-left:2%;  
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
	background-color: #fff;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
	background-color: #fff;
}

.container th {
	background-color: #88cfae;
}

.container tr:hover {
    /* //background-color: #464A52; */
    -webkit-box-shadow: 0 6px 6px -6px #0E1119;
	-moz-box-shadow: 0 6px 6px -6px #0E1119;
	box-shadow: 0 6px 6px -6px #0E1119;
}

.container td:hover {
    font-weight: bold;
}

@media (max-width: 800px) {
    .container td:nth-child(4),
    .container th:nth-child(4) { display: none; }
}

th, td {
    border: 1px solid #185338;
    text-align: left;
    padding: 8px;
}

.ant-tabs-tab.ant-tabs-tab-active {
    font-size: 25px !important;
    font-weight: bold !important;
}
.ant-tabs-nav-wrap {
    justify-content: center;
}

div#rc-tabs-2-tab-1 {
    color: #198754;
}

.frame {
  width: 90%;
  text-align: center;
  display: flex;
}
.frame .iconOperation{
    width: 30px;
}

.frame .iconOperation:hover{
    color: #185338;
    cursor: pointer;
    font-weight: bold;
}
</style>
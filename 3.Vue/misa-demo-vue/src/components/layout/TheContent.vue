<template>
  <div class="content">
    <div class="container">
      <div class="content-header">
        <div class="content-title font-title">Danh sách nhân viên</div>
        <button class="button" id="add-employee">
          <div class="button-icon button-icon-employee"></div>
          <div class="btn-text">Thêm nhân viên</div>
        </button>
      </div>
      <div class="content-filter">
        <div class="textbox">
          <div class="textbox-icon icon-16 icon-search"></div>
          <input
            type="text"
            class="textbox-default textbox-with-icon"
            placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
          />
        </div>
        <div class="department" id="department">
          <div class="drop-content">
            <div class="dropdown dropdown-with-width">
              <div class="dropdown-text"></div>
              <div class="btn-dropdown">
                <i class="fas fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="drop-data-site"></div>
          </div>
        </div>
        <div class="position" id="position">
          <div class="drop-content">
            <div class="dropdown dropdown-with-width">
              <div class="dropdown-text"></div>
              <div class="btn-dropdown">
                <i class="fas fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="drop-data-site"></div>
          </div>
        </div>
        <div class="reload" id="btn-reload">
          <div class="reload-icon"></div>
        </div>
      </div>
      <div class="content-body">
        <div class="container">
          <table class="tbl tbl-striped" id="misa-datatable">
            <thead>
              <tr>
                <th>Mã nhân viên</th>
                <th>Họ và tên</th>
                <th>Giới tính</th>
                <th>Ngày sinh</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Chức vụ</th>
                <th>Phòng ban</th>
                <th class="txt-align-right">Mức lương cơ bản</th>
                <th>Trạng thái công việc</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in employees" :key="employee.EmployeeId">
                <td>{{ employee.EmployeeCode }}</td>
                <td>{{ employee.FullName }}</td>
                <td>{{ employee.GenderName }}</td>
                <td>{{ employee.DateOfBirth }}</td>
                <td>{{ employee.PhoneNumber }}</td>
                <td>{{ employee.Email }}</td>
                <td>{{ employee.PositionName }}</td>
                <td>{{ employee.DepartmentName }}</td>
                <td>{{ employee.Salary }}</td>
                <td class="txt-align-right">{{ employee.WorkStatus }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="content-footer">
        <div class="paging">
          <div class="pagintation-text">
            <p>Hiển thị 1-10/1000 nhân viên</p>
          </div>
          <div class="pagination">
            <div class="back-to-start"></div>
            <div class="pre-page"></div>
            <div class="number-page">
              <div class="number">
                <div class="number-text">1</div>
              </div>
              <div class="number">
                <div class="number-text">2</div>
              </div>
              <div class="number">
                <div class="number-text">3</div>
              </div>
            </div>
            <div class="next-page"></div>
            <div class="go-to-end"></div>
          </div>
          <div class="pagination-total">
            <p>10 nhân viên/trang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Employee",
  created() {
    var self = this;
    axios.get("http://cukcuk.manhnv.net/v1/Employees").then(function (res) {
      self.employees = res.data;
    });
  },
  data() {
    return {
      employees: [],
    };
  },
};
</script>

<style scoped>
@import "../../css/layout/content.css";
</style>
<template>
  <div class="modal" id="detail-employee" method="" employeeId="">
    <div class="container">
      <div class="modal-header">
        <div class="title font-title2">THÔNG TIN NHÂN VIÊN</div>
        <div class="btn-close close"></div>
      </div>
      <div class="modal-content">
        <div class="avatar">
          <div class="avatar-site"></div>
          <p class="note txt-align-center">
            (Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif)
          </p>
        </div>
        <div class="information">
          <div>A. THÔNG TIN CHUNG</div>
          <div class="below"></div>
          <div class="info-general">
            <div class="info-general-left">
              <div class="info-item">
                <p class="label">
                  Mã nhân viên (<span style="color: red">*</span>)
                </p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default"
                    size="1"
                    tabindex="1"
                    name="EmployeeCode"
                  />
                </div>
              </div>
              <div class="info-item">
                <p class="label">Ngày sinh</p>
                <div class="textbox">
                  <input
                    type="date"
                    class="textbox-default"
                    tabindex="3"
                    name="DateOfBirth"
                  />
                </div>
              </div>
              <div class="info-item">
                <p class="label">
                  Số CMND/ Căn cước (<span style="color: red">*</span>)
                </p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default"
                    size="1"
                    tabindex="4"
                    name="IdentityNumber"
                  />
                </div>
              </div>
              <div class="info-item">
                <p class="label">Nơi cấp</p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default"
                    size="1"
                    tabindex="6"
                    name="IdentityPlace"
                  />
                </div>
              </div>
              <div class="info-item">
                <p class="label">Email (<span style="color: red">*</span>)</p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default"
                    size="1"
                    tabindex="7"
                    name="Email"
                  />
                </div>
              </div>
            </div>
            <div class="info-general-right">
              <div class="info-item">
                <p class="label">
                  Họ và tên (<span style="color: red">*</span>)
                </p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default"
                    size="1"
                    tabindex="2"
                    name="FullName"
                  />
                </div>
              </div>
              <div class="info-item">
                <p class="label">Giới tính</p>
                <div class="drop-content">
                  <div class="dropdown">
                    <div class="dropdown-text">Nam</div>
                    <div class="btn-dropdown">
                      <i class="fas fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <div class="drop-data-site">
                    <div class="drop-item selected" data-value="1">
                      <div class="checked-icon">
                        <i class="fa fa-check"></i>
                      </div>
                      <div class="item-text">Nam</div>
                    </div>
                    <div class="drop-item" data-value="2">
                      <div class="checked-icon"></div>
                      <div class="item-text">Nữ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="info-item">
                <p class="label">
                  Ngày cấp (<span style="color: red">*</span>)
                </p>
                <div class="textbox">
                  <input
                    type="date"
                    class="textbox-default"
                    tabindex="5"
                    name="IdentityDate"
                  />
                </div>
              </div>
              <div class="info-item"></div>
              <div class="info-item">
                <p class="label">
                  Số điện thoại (<span style="color: red">*</span>)
                </p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default"
                    size="1"
                    tabindex="8"
                    name="PhoneNumber"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>B. THÔNG TIN CÔNG VIỆC</div>
          <div class="below"></div>
          <div class="info-general">
            <div class="info-general-left">
              <div class="info-item">
                <p class="label">Vị trí</p>
                <div class="drop-content">
                  <div class="dropdown">
                    <div class="dropdown-text">Giám đốc</div>
                    <div class="btn-dropdown">
                      <i class="fas fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <div class="drop-data-site">
                    <div class="drop-item selected" data-value="1">
                      <div class="checked-icon">
                        <i class="fa fa-check"></i>
                      </div>
                      <div class="item-text">Phó phòng</div>
                    </div>
                    <div class="drop-item" data-value="2">
                      <div class="checked-icon"></div>
                      <div class="item-text">Nhân viên</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="info-item">
                <p class="label">Mã số thuế</p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default"
                    size="1"
                    tabindex="9"
                    name="PersonalTaxCode"
                  />
                </div>
              </div>
              <div class="info-item">
                <p class="label">Ngày gia nhập công ty</p>
                <div class="textbox">
                  <input
                    type="date"
                    class="textbox-default"
                    tabindex="11"
                    name="JoinDate"
                  />
                </div>
              </div>
            </div>
            <div class="info-general-right">
              <div class="info-item">
                <p class="label">Phòng ban</p>
                <div class="drop-content">
                  <div class="dropdown">
                    <div class="dropdown-text">Phòng nhân sự</div>
                    <div class="btn-dropdown">
                      <i class="fas fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <div class="drop-data-site">
                    <div class="drop-item selected" data-value="1">
                      <div class="checked-icon">
                        <i class="fa fa-check"></i>
                      </div>
                      <div class="item-text">Phòng hành chính</div>
                    </div>
                    <div class="drop-item" data-value="2">
                      <div class="checked-icon"></div>
                      <div class="item-text">Phòng lập trình</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="info-item">
                <p class="label">Mức lương cơ bản</p>
                <div class="textbox">
                  <input
                    type="text"
                    class="textbox-default text-price"
                    size="1"
                    tabindex="10"
                    name="Salary"
                  />
                  <div class="font-italic">(VND)</div>
                </div>
              </div>
              <div class="info-item">
                <p class="label">Tình trạng công việc</p>
                <div class="drop-content">
                  <div class="dropdown">
                    <div class="dropdown-text">Đang làm việc</div>
                    <div class="btn-dropdown">
                      <i class="fas fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <div class="drop-data-site">
                    <div class="drop-item selected" data-value="1">
                      <div class="checked-icon">
                        <i class="fa fa-check"></i>
                      </div>
                      <div class="item-text">Đang làm việc</div>
                    </div>
                    <div class="drop-item" data-value="2">
                      <div class="checked-icon"></div>
                      <div class="item-text">Đã nghỉ việc</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="modal-action">
          <button class="button-default">
            <div class="btn-text close">Hủy</div>
          </button>
          <button class="button" id="btn-save">
            <div style="padding: 8px">
              <i class="fas fa-save"></i>
            </div>
            <div class="btn-text">Lưu</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
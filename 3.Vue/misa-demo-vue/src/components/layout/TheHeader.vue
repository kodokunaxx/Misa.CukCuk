<template>
  <div class="header">
    <div class="header-left">
      <div class="drop-content">
        <div class="dropdown non-border">
          <div class="dropdown-text">Nhà hàng Biển Đông</div>
          <div class="btn-dropdown">
            <i class="fas fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="drop-data-site">
          <div class="drop-item selected" data-value="1">
            <div class="checked-icon">
              <i class="fa fa-check"></i>
            </div>
            <div class="item-text">Nhà hàng Biển Đông</div>
          </div>
          <div class="drop-item" data-value="2">
            <div class="checked-icon"></div>
            <div class="item-text">Nhà hàng Biển Nam</div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div class="avt-logo"></div>
      <div class="username">Đỗ Mạnh Hà</div>
      <div class="option-icon"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../css/layout/header.css";
</style>
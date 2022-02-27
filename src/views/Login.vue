<template>
  <div class="login">
    <el-form class="login-form">
      <div class="login-title">
        <span class="login-title-txt">用户登录</span>
      </div>
      <el-form-item class="login-item">
        <span class="login-item-icon">
          <svg-icon icon="user" />
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-item">
        <span class="login-item-icon">
          <svg-icon icon="password" />
        </span>
        <el-input
          placeholder="password"
          name="password"
        ></el-input>
        <span class="login-item-icon">
          <svg-icon icon="eye" />
        </span>
      </el-form-item>
      <el-button type="primary" class="login-button">登录</el-button>
    </el-form>
  </div>
</template>
<script setup>

</script>
<style lang='scss' scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
  display: flex;
  align-items: center;
  justify-content: center;
  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 20px 0;
    font-weight: 600;
    font-size: 26px;
  }
  &-form {
    width: 520px;
  }
  &-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #fff;
    ::v-deep .el-form-item__content {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      input {
        background-color: transparent;
        border: none;
      }
      .el-icon svg {
        color: #fff;
      }
    }
    &-icon {
      margin-right: 10px;
      margin-left: 10px;
      &-show-pwd {
        margin-right: 10px;
        margin-left: 10px;
      }
    }
  }
  &-button {
    width: 100%;
    margin-bottom: 60px;
  }
}
</style>

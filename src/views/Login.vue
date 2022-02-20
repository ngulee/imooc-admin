<template>
  <div class="login">
    <el-form class="login-form">
      <div class="login-title">
        <span class="login-title-txt">用户登录</span>
      </div>
      <el-form-item class="login-item">
        <el-icon class="login-item-icon">
          <Avatar />
        </el-icon>
        <el-input
          placeholder="username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-item">
        <el-icon class="login-item-icon">
          <Lock />
        </el-icon>
        <el-input
          placeholder="password"
          name="password"
        ></el-input>
        <el-icon class="login-item-icon-show-pwd">
          <Open />
        </el-icon>
      </el-form-item>
      <el-button type="primary" class="login-button">登录</el-button>
    </el-form>
  </div>
</template>
<script setup>
import { } from 'vue'
import { Avatar, Lock, Open } from '@element-plus/icons-vue'
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
  }
  &-form {
    width: 520px;
  }
  &-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    ::v-deep .el-form-item__content {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      input {
        background-color: transparent;
        border: none;
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

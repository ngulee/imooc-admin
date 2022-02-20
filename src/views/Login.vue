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
          <Avatar />
        </el-icon>
        <el-input
          placeholder="password"
          name="password"
        ></el-input>
        <el-icon class="login-item-show-pwd">
          <Avatar />
        </el-icon>
      </el-form-item>
      <el-button type="primary" class="login-button">登录</el-button>
    </el-form>
  </div>
</template>
<script setup>
import { } from 'vue'
import { Avatar } from '@element-plus/icons-vue'
</script>
<style lang='scss' scoped>
.login {
  &-button {
    width: 100%;
    margin-bottom: 60px;
  }
}
</style>

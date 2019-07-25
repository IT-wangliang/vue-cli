<template>
  <div class="login">
    <div class="head">
      全维感知综合研判平台
    </div>
    <div class="body">
      <el-form
        ref="loginForm"
        label-position="right"
        label-width="80px"
        :model="formData"
        @submit.native.prevent
      >
        <el-form-item label="账号：">
          <el-input v-model="formData.loginName"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <button class="submit" native-type="submit" @click="onSubmit">
            登录
          </button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getParameter } from "@/service";
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("user/login", this.formData).then(() => {
            this.getSystemParameter();
            this.$router.push({
              path: "/menuA"
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async getSystemParameter() {
      let { data } = await getParameter();
      sessionStorage.setItem("systemParam", JSON.stringify(data));
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes rotate {
  form {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(180deg);
  }
}
.login {
  height: 100%;
  .head {
    text-align: center;
    color: #fff;
    line-height: 100px;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 200px;
  }
  .body {
    width: 400px;
    margin: 20px auto;
    .submit {
      width: 100%;
      cursor: pointer;
      line-height: 40px;
      text-align: center;
      border-radius: 20px;
      background-color: #6be3e7;
      color: #fff;
      font-weight: 700;
      letter-spacing: 10px;
      font-size: 18px;
      &:hover {
        background-color: #01f3fc;
      }
    }
    & /deep/ .el-form-item__label {
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>

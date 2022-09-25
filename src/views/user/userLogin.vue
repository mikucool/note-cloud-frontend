<template>
  <div class="columns py-6">
    <div class="column is-half is-offset-one-quarter">
      <el-card shadow="never">
        <div slot="header" class="has-text-centered has-text-weight-bold">
          LOGIN
        </div>
        <div>
          <el-form
            v-loading="loading"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="Username" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="Password" prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="remember" prop="delivery">
              <el-switch v-model="ruleForm.rememberMe"></el-switch>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >LOGIN</el-button
              >
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirect: undefined,
      loading: false,
      ruleForm: {
        username: "",
        password: "",
        rememberMe: true,
      },
      rules: {
        username: [
          { required: true, message: "input username", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "length is limited 2 to 15",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "input password", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "length is limited 6 to 20",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // 先校验数据是否符合规范
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 加载状态
          this.loading = true;
          // 将 ruleForm 的表单信息分发给 store 中的user/login
          this.$store
            .dispatch("user/login", this.ruleForm)
            .then(() => {
              this.$message({
                message: "Login successfully",
                type: "success",
                duration: 2000,
              });
              // 跳转到首页
              setTimeout(() => {
                this.loading = false;
                this.$router.push({ path: this.redirect || "/" });
              }, 0.1 * 1000);
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
</style>
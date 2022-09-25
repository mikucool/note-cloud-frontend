<template>
  <div class="columns py-6">
    <div class="column is-half is-offset-one-quarter">
      <el-card shadow="never">
        <div slot="header" class="has-text-centered has-text-weight-bold">
          新用户入驻
        </div>
        <div>
          <el-form
            ref="ruleForm"
            v-loading="loading"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="Username" prop="name">
              <el-input v-model="ruleForm.username" />
            </el-form-item>

            <el-form-item label="Password" prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item label="CheckPass" prop="checkPassword">
              <el-input
                v-model="ruleForm.checkPassword"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item label="Email" prop="email">
              <el-input v-model="ruleForm.email" autocomplete="off" />
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
              >Register</el-button>
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { userRegister } from '@/api/auth'

export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('input password again'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error(' the password did not match the re-typed password!'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      ruleForm: {
        username: '',
        password: '',
        checkPassword: '',
        email: ''
      },
      // 使用 vue 提供的校验规则
      rules: {
        username: [
          { required: true, message: 'input username', trigger: 'blur' },
          {
            min: 2,
            max: 15,
            message: 'length is limited 2 to 15',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: 'input password', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: 'length is limited 6 to 20',
            trigger: 'blur'
          }
        ],
        // 使用自定义的校验器
        checkPassword: [
          { required: true, message: 'input password again', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'input email', trigger: 'blur' },
          {
            type: 'email',
            message: 'email is invalid',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    // 提交数据
    submitForm(formData) {
      // 验证数据是否符合校验规则
      this.$refs[formData].validate((valid) => {
        if (valid) {
          // 如果符合规则，就进入提交状态
          this.loading = true
          // 调用 userRegister 方法将数据提交到服务端并等待响应
          userRegister(this.ruleForm)
            .then((value) => {
              const { code, message } = value;
              if (code === 200) {
                this.$message({
                  message: 'register successfully',
                  type: 'success'
                })
                setTimeout(() => {
                  this.loading = false
                  this.$router.push({ path: this.redirect || '/login' })
                }, 0.1 * 1000)
              } else {
                this.$message.error('failed，' + message)
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false;
        }
      })
    },
    resetForm(formData) {
      this.$refs[formData].resetFields()
    }
  }
}
</script>

<style>
</style>
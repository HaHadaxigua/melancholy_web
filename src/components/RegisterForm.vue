<template>
  <el-form
      ref="registerForm"
      :model="registerUser"
      :rules="registerRules"
      label-width="100px"
      class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="username">
      <el-input
          v-model="registerUser.username"
          placeholder="Enter UserName..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
          v-model="registerUser.email"
          placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
          v-model="registerUser.password"
          type="password"
          placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
          @click="handleRegister('registerForm')"
          type="primary"
          class="submit-btn"
      >注册
      </el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import {getCurrentInstance} from "vue";
import {useRouter} from "vue-router";

export default {
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    // @ts-ignore
    const {ctx} = getCurrentInstance();
    const router = useRouter();

    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          ctx.$axios.post("api/v1/auth/register", props.registerUser).then((rsp: any) => {
            if (rsp.status == 200) {
              ctx.$message({
                message: "注册成功",
                type: "success",
              })
              router.push("/");
            } else {
              ctx.$message({
                message: "Error:" + rsp.data.message,
                type: "warning",
              })
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return {handleRegister};
  },
};
</script>
<style scoped>
</style>
<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2 class="title">用户登陆</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin" class="login-btn" type="primary">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      }
    };
  },
  methods:{
    // 登陆请求
    async handleLogin(){
      // 模拟端口
        const res=await this.$http.post(this.$http.default.baseURL+'api/login',this.formdata);
        const {data,meta:{msg,status}}=res.data;
        if (status===200) {
          //登陆成功
          // 保存token,
          localStorage.setItem("token",data.token);
          // 跳转home
          this.$router.push({name:'home'});
          // 弹出提示
          this.$message.success(msg);
        }else{
          // 提示失败
          this.$message.error(msg);
        }
      
    }
  }
};
</script>

<style scoped lang="scss">
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form{
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;

    .title{
      font-weight: bold;
      color: #000;
      font-size: 20px;
      height: 24px;
      line-height: 24px;
      margin-bottom: 25px;
    }

    .login-btn{
      width: 100%;
    }
  }
}
</style>

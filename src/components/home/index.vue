<template>
  <el-container class="container">
    <el-header class="header">
      <el-col class="header-plane">
        <el-col :span="4">
          <div class="imgcontainer">
            <img src="../../assets/logo.png" alt="无法显示图片" />
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h3>完美商城管理系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="loginout" @click.prevent="handleSingout()" href="#">退出</a>
          </div>
        </el-col>
      </el-col>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!-- 导航部分 -->
        <!-- 开启路由模式 -->
        <el-menu :router="true" :unique-opened="false">
          <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">
              <i class="el-icon-success"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-success"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-success"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-success"></i>
              <span slot="title">商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-1">
              <i class="el-icon-success"></i>
              <span slot="title">分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-1">
              <i class="el-icon-success"></i>
              <span slot="title">商品分类</span>
            </el-menu-item>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-success"></i>
              <span slot="title">订单列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-success"></i>
              <span slot="title">数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <!-- 管理列表的显示容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  beforeCreate(){
    // 获取token
    const token=localStorage.getItem("token");
    // 如果有token继续渲染
    if (!token) {
      // 无，跳回登录页
      this.$router.push({name:'login'});
    }
  },
  methods:{
    handleSingout(){
      // 清除token
      localStorage.clear();
      // 提示成功退出
      this.$message.success('成功退出！');
      // 来到login组件
      this.$router.push({name:'login'});
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
  height: 100%;
}
/*头部样式*/
.header-plane {
  height: 100%;
}
.header-plane > div {
  height: 100%;
}
.imgcontainer {
  height: 100%;
  display: flex;
  align-items: center;
}
.middle h3 {
  font-weight: bold;
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
}
.loginout {
  text-align: center;
  height: 60px;
  line-height: 60px;
}
</style>

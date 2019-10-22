// 插件模块
import axios from "axios";
const MyHttpServer = {};
// 在use()实例后，该实例可保存该url
// 模拟端口
axios.default.baseURL = "http://rap2api.taobao.org/app/mock/234389/";
MyHttpServer.install = function(Vue) {
  Vue.prototype.$http = axios;
};

export default MyHttpServer;
//  在main.js引入，在Vue.use(MyHttpServer);实例化
// 以this.$http调用

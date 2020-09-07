import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, // api的base_url
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    //登录添加token
    if (config.url != "/user/front/login") {
      let token;
      if (localStorage.getItem("userInfo") == null) {
        token = null;
        localStorage.clear();
        router.push("/login");
      } else {
        config.data.systemId = localStorage.getItem('systemId');
        config.data.operatorId = JSON.parse(localStorage.getItem('userInfo')).id;
        token = JSON.parse(localStorage.getItem("userInfo")).token;
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['User-Token'] = token;
        config.headers['User-OperatorId'] = JSON.parse(localStorage.getItem('userInfo')).id;
        config.headers['User-SystemId'] = localStorage.getItem('systemId');
      }
    }
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    if (res.returnCode !== "200") {
      Message({
        message: res.returnMsg,
        type: 'error',
        duration: 2 * 1000
      })
      if (res.returnCode == "30005") {
        router.push("/login")
        localStorage.removeItem("personData");
      }
      return
    } else {
      return response
    }
  },
  error => {
    // console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

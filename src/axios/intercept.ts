import axios from 'axios';

const config: any = {};
if (typeof window === 'undefined') {
    // config.baseURL = 'http://192.168.1.80:5008/';
    config.baseURL = 'http://jzfyjnkj.com:5008/';
    config.withCredentials = true;  // 跨域
} else {
    // 浏览器
}
const instance = axios.create(config);
instance.interceptors.response.use((response: any) => {
    if (response.status === 200) {
        return response.data;
    }
})

export default instance;
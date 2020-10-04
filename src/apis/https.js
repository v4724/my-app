import axios from 'axios'
// import router from '../router/index.js'
import { tip, toLogin, to403Page } from './utils.js'

// 請求失敗的統一處理
const errorHandle = (status, msg) => {
    switch (status) {
        case 400:
            tip(msg);
            break;
        case 401:
            tip('登入過期，請重新登入');
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        case 403:
            to403Page();
            break;
        case 404:
            tip(msg);
            break;
        default: console.log('resp沒有攔截到的錯誤：' + msg);
    }
}

// instance
var instance = axios.create({
    baseURL: '/api/'
})

// request攔截器
instance.interceptors.request.use((response) => {
    return response;
}, (error) => {
    const { response } = error;

    if (response) {
        errorHandle(response.status, response.data.error);
        return Promise.reject(error);
    } else {
        // 成功發出請求但沒收到resp
        if (!window.navigator.onLine) {
            tip('網路問題......');
        } else {
            return Promise.reject(error);
        }
    }
});

export default function (method, url, data = null) {
    method = method.toLowerCase();
    if (method == 'post') {
        return instance.post(url, data)
    } else if (method == 'get') {
        return instance.get(url, { params: data })
    } else if (method == 'delete') {
        return instance.delete(url, { params: data })
    } else if (method == 'put') {
        return instance.put(url, data)
    } else {
        console.error('未知的method' + method);
        return false;
    }
}
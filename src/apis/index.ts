import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const token = 'TOKENSTRING';

//TODO: axios settings
const axiosInstance: AxiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: 'http://127.0.0.1:8080/',
  baseURL: 'https://1plg4q4dzj.execute-api.ap-northeast-2.amazonaws.com/dev/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
});

/**
 * http request 보내기직전 호출되는 함수.
 * @param config
 */
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (token) {
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;

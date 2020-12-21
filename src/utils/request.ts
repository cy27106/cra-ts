import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosPromise,
  AxiosError,
  AxiosResponse,
  ResponseType,
  Method,
} from 'axios'

const isProd = false
export const API_URL: string = isProd
    ? '' // 生产环境接口域名
    : '' // 开发环境接口域名

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000 // 毫秒
} as AxiosRequestConfig)

// 统一设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/** 拦截请求 **/
instance.interceptors.request.use(config => {
  // config.headers['token'] = sessionStorage.getItem('token') || ''
  return config
}, error => {
  return Promise.reject(error)
})

/** 拦截响应  **/
instance.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  return Promise.reject(error)
})

/** 统一封装get请求 **/
export const get = <T>(
    url: string,
    params: object,
    config: AxiosRequestConfig = {}
): AxiosPromise<T> => {
  return instance({
    method: 'GET',
    url,
    params,
    ...config
  } as AxiosRequestConfig)
}

/** 统一封装post请求  **/
export const post = <T>(
    url: string,
    data: object,
    config:AxiosRequestConfig = {}
): AxiosPromise => {
  return instance({
    method: 'POST',
    url,
    data,
    ...config
  } as AxiosRequestConfig)
}

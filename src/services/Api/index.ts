import axios, { AxiosError, AxiosResponse } from 'axios'
import { withCredentials } from '@/constants'

export class ApiServices {
  baseUrl: string

  constructor(url: string) {
    this.baseUrl = url
  }

  get(endpoint: string) {
    return axios(`${this.baseUrl}${endpoint}`, withCredentials)
  }

  post(endpoint: string, payload?: {}) {
    return axios.post(`${this.baseUrl}${endpoint}`, payload, withCredentials)
  }

  put(endpoint: string, payload: {}) {
    return axios.put(`${this.baseUrl}${endpoint}`, payload, withCredentials)
  }

  delete(endpoint: string) {
    return axios.delete(`${this.baseUrl}${endpoint}`, withCredentials)
  }
}

axios.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  (error: AxiosError) => {
    if (window.location.pathname !== '/auth' && error.request.status === 401) {
      window.location.href = '/auth'
    }
    return Promise.reject(error.request)
  }
)

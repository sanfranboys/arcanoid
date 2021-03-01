import axios, { AxiosError, AxiosResponse } from 'axios'
import { NotificationWindow } from 'elements'
import { withCredentials } from './constants'

export class ApiServices {
  baseUrl: string

  constructor(url: string) {
    this.baseUrl = url
    axios.interceptors.response.use(
      (response: AxiosResponse<any>) => response,
      (error: AxiosError) => {
        if (error.request.status === 0) {
          NotificationWindow({
            description: 'Нет доступа к интернету, проверте соединение',
            type: 'error',
          })
        }
        return Promise.reject(error.request)
      }
    )
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

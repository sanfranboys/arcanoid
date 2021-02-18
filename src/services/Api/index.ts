import axios from 'axios'
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

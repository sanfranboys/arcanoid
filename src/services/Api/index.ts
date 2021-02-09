import axios from 'axios';

export class ApiServices {
  baseUrl: string

  constructor(url:string){
    this.baseUrl = url
  }

  get(endpoint:string){
    return axios(`${this.baseUrl}${endpoint}`,{ withCredentials: true })
  }

  post(endpoint:string, payload?:{}){
    return axios.post(`${this.baseUrl}${endpoint}`, payload,{ withCredentials: true })
  }

  put(endpoint:string, payload:{}){
    return axios.put(`${this.baseUrl}${endpoint}`, payload,{ withCredentials: true })
  }

  delete(endpoint:string){
    return axios.delete(`${this.baseUrl}${endpoint}`,{ withCredentials: true })
  }

}

axios.interceptors.response.use(
  (response)=>response,
  (error)=>{
    if(window.location.pathname !== '/auth'
    && error.request.status === 401){
        window.location.href = '/auth'
    }
    return error.request
})

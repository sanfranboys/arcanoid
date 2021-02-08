import axios from 'axios';

export class ApiServices {
  baseUrl: string

  constructor(url:string){
    this.baseUrl = url
  }

  get(endpoint:string){
    return axios(`${this.baseUrl}${endpoint}`,{ withCredentials: true })
    .then(res=>res)
    .catch(e => e.response)
  }

  post(endpoint:string, payload?:{}){
    return axios.post(`${this.baseUrl}${endpoint}`, payload,{ withCredentials: true })
    .then(res=>res)
    .catch(e => e.response)
  }

  put(endpoint:string, payload:{}){
    return axios.put(`${this.baseUrl}${endpoint}`, payload,{ withCredentials: true })
    .then(res=>res)
    .catch(e => e.response)
  }

  delete(endpoint:string){
    return axios.delete(`${this.baseUrl}${endpoint}`,{ withCredentials: true })
  }

}

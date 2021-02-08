import { request } from "../../../utils/Request"
import { METHOD } from '../../../constants';

export class ApiServices {
  baseUrl: string

  constructor(url:string){
    this.baseUrl = url
  }

  get(url:string){
    return request({
      method:METHOD.GET,
      url:`${this.baseUrl}${url}`
    })
  }
  post(url:string,data?:{}){
    return request({
      method:METHOD.POST,
      url:`${this.baseUrl}${url}`,
      data
    })
  }
  put(url:string,data?:{}){
    return request({
      method:METHOD.PUT,
      url:`${this.baseUrl}${url}`,
      data
    })
  }
  delete(url:string,data?:{}){
    return request({
      method:METHOD.DELETE,
      url:`${this.baseUrl}${url}`,
      data
    })
  }

}

import { AuthFormData } from "pages/AuthPage/types"
import { ApiServices } from "services/Api"
import { NotificationWindow } from "@/elements/";

export class User {
  APIService: ApiServices
  constructor(APIService: ApiServices){
    this.APIService = APIService
  }

  changeUserProfile(data:AuthFormData){
    return this.APIService.put('/user/profile',data).then(res=>{
      if(res.status >= 200 && res.status < 299){
        NotificationWindow({description:'Данные успешно изменены',type:'success'})
        return res.data
      }
        NotificationWindow({description:'Неверные заполнены поля',type:'error'})

    })
  }

}

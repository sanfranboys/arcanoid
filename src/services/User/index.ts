import { AuthFormData } from "pages/AuthPage/types"
import { ApiServices } from "services/Api"

export class User {
  APIService: ApiServices
  constructor(APIService: ApiServices){
    this.APIService = APIService
  }

  changeUserProfile(data:AuthFormData){
    return this.APIService.put('/user/profile',data).then(res=>{
      console.log(res);
    })
  }

}

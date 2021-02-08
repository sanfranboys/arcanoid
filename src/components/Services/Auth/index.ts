import { AuthFormData } from "../../../pages/AuthPage/types";
import { RegistrationFormData } from "../../../pages/RegistrationPage/types";
import { ApiServices } from "../Api";

export class Auth {
  APIService: ApiServices
  constructor(APIService: ApiServices){
    this.APIService = APIService
  }

signIn(data:AuthFormData){
   return  this.APIService.post('/auth/signin',data).catch(error=>error)
}

signUp(data:RegistrationFormData){
return this.APIService.post('/auth/signup',data).catch(error=>error)

}

getUserInfo(){
  return this.APIService.get('/auth/user').catch(error=> {
    window.location.href = '/auth'
    return error})
}

logOut(){
  return this.APIService.post('/auth/logout').catch(error=>error)
}

}

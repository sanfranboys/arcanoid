import { NotificationType } from "../../../constants";
import { notificationWindow } from "../../../elements/Notification";
import { AuthFormData } from "../../../pages/AuthPage/types";
import { RegistrationFormData } from "../../../pages/RegistrationPage/types";
import { ApiServices } from "../Api";

export class Auth {
  APIService: ApiServices
  constructor(APIService: ApiServices){
    this.APIService = APIService
  }

  signIn(data:AuthFormData){
    return this.APIService.post('/auth/signin',data)
    .then((res)=>{
      if(res.status === 400){
        notificationWindow({type:NotificationType.warning,
          description:'Вы уже в системе',
          title:'Предупреждение!'})
      }

      if(res.status === 401){
        notificationWindow({type:NotificationType.error,
          description:'Неверный логин или пароль',
          title:'Ошибка'})
      }
      if(res.status >= 200 && res.status < 299){
        window.location.href = '/profile'
      }
    })
  }

  signUp(data:RegistrationFormData){
    return this.APIService.post('/auth/signup',data).then(
      res=>{
        if(res.status === 400){
          notificationWindow({type:NotificationType.warning,
            description:'Невверное введены данные!',
            title:'Предупреждение!'})
        }
        if(res.status >= 200 && res.status < 299){
          window.location.href = '/profile'
        }
      }
    )
  }

  getUserInfo(){
    return this.APIService.get('/auth/user').then(res=>{
      if(res.status >= 200 && res.status < 299){
        return res.data
      }
      if(res.status >399){
        window.location.href = '/auth'
      }
    })
  }

  logOut(){
    return this.APIService.post('/auth/logout').then(res=>{
      if(res.status >= 200 && res.status < 299){
        window.location.href = '/auth'
      }
      if(res.status >399){
        notificationWindow({type:NotificationType.warning,
          description:'Что-то пошло не так!',
          title:'Предупреждение!'})
      }
    })
  }

}

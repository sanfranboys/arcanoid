import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../../constants";
import { AuthFormData } from "../../../pages/AuthPage/types";
import { RegistrationFormData } from "../../../pages/RegistrationPage/types";

export class Auth {

async signIn(data:AuthFormData & AxiosRequestConfig){
  try {
    const res = await axios.post(`${BASE_URL}/auth/signin`, data).then(res=>res.data)
    return res
  } catch (error) {
    return console.log(error,'Ошибка');
  }
}

async signUp(data:RegistrationFormData){
try {
  const res = await axios.post(`${BASE_URL}/auth/signup`,data).then(res=>res.data)
  return res
} catch (error) {
  return console.log(error,'Ошибка');
}
}

getUserInfo(){

}

logOut(){

}

}

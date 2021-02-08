import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../../constants";
import { AuthFormData } from "../../../pages/AuthPage/types";
import { RegistrationFormData } from "../../../pages/RegistrationPage/types";

export class Auth {

signIn(data:AuthFormData & AxiosRequestConfig){
    return axios.post(`${BASE_URL}/auth/signin`, data)
    .then(({data})=>data)
    .catch(error=>console.error(error))
}

signUp(data:RegistrationFormData){
 return axios.post(`${BASE_URL}/auth/signup`,data)
 .then(({data})=>data)
 .catch(error=>console.error(error))
}

getUserInfo(){

}

logOut(){

}

}

axios.interceptors.request.use(conf=>{console.log('inter',conf); return conf});

import { RcFile } from 'antd/lib/upload';
// import { UploadChangeParam } from "antd/lib/upload"

export type ProfileTypes = {
    display_name:string,
    email:string,
    first_name:string,
    login:string,
    phone:string,
    second_name:string,
    avatar:null | string,
}


type ChangeDataUser = {
  onSubmit:(data:ProfileTypes)=>void
  changeAvatar:(file:RcFile) => void
}

export type ProfileFormDataKey = keyof ProfileTypes

export type ChangeProfileTypes = ProfileTypes & ChangeDataUser

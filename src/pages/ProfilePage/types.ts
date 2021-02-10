export type ProfileTypes = {
    display_name:string,
    email:string,
    first_name:string,
    login:string,
    phone:string,
    second_name:string,
}

type ChangeDataUser = {
  onSubmit:(data:ProfileTypes)=>void
}

export type ProfileFormDataKey = keyof ProfileTypes

export type ChangeProfileTypes = ProfileTypes & ChangeDataUser

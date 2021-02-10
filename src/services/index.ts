import { ApiServices } from './Api/index';
import { BASE_URL } from "../constants";
import { Auth } from "./Auth";
import { User } from "./User";

const API = new ApiServices(BASE_URL)
export const AuthServices = new Auth(API)
export const UserServices = new User(API)

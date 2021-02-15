import { ApiServices } from './Api/index';
import { API_URL } from "../constants";
import { Auth } from "./Auth";
import { User } from "./User";

const API = new ApiServices(API_URL)
export const AuthServices = new Auth(API)
export const UserServices = new User(API)

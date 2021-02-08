import { ApiServices } from './Api/index';
import { BASE_URL } from "../../constants";
import { Auth } from "./Auth";

const API = new ApiServices(BASE_URL)
export const AuthServices = new Auth(API)

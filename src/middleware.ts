import axios from "axios";

const PRAKTIKUM_AUTH_ENDPOINT = 'https://ya-praktikum.tech/api/v2/auth/user';

export const auth = async (req:any, res:any, next:any) => {
console.log(res.status);
  const authData = {
    authCookie: req.cookies.authCookie,
    uuid: req.cookies.uuid,
};
const cookies = Object
        .entries(authData)
        .map(([key, value]) => `${key}=${value}`)
        .join(';');
        try {
          const { data } = await axios.get(PRAKTIKUM_AUTH_ENDPOINT, {
              headers: { Cookie: cookies },
          });
          req.customProperty = data;
      } catch (err) {
          req.customProperty = null;
      }

  await next()
}

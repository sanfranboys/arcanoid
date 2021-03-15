import axios from "axios";

const PRAKTIKUM_AUTH_ENDPOINT = 'https://ya-praktikum.tech/api/v2/auth/user';

export const auth = async (req:any, res:any, next:any) => {
console.log(res.status);

  const authData = {
    authCookie: req.universalCookies.cookies,
    uuid: req.universalCookies.cookies,
};
console.log(authData);
// const cookies = Object
//         .entries(authData)
//         .map(([key, value]) => `${key}=${value}`)
//         .join(';');
// хардкод куки
const cookies = 'authCookie=f81cff4c10dea2c52e529227627ecdd3a2c9a69a%3A1615785033;uuid=f81ed140-c509-4605-ae6e-443fc64c885d'

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

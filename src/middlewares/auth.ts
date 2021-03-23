import axios from 'axios'
import { NextFunction, Response } from 'express'
import { CustomRequest } from 'types'

const PRAKTIKUM_AUTH_ENDPOINT = 'https://ya-praktikum.tech/api/v2/auth/user'

const authMiddleware = async (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
) => {
  const authData = {
    authCookie: req.cookies.authCookie,
    uuid: req.cookies.uuid,
  }
  const cookies = Object.entries(authData)
    .map(([key, value]) => `${key}=${value}`)
    .join(';')
  try {
    const { data } = await axios.get(PRAKTIKUM_AUTH_ENDPOINT, {
      headers: { Cookie: cookies },
    })
    req.customProperty = data
  } catch (err) {
    req.customProperty = null
  }

  await next()
}

export default authMiddleware

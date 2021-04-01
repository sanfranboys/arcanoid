import { NextFunction, Response } from 'express'
import SiteTheme from '../dataBase/models/siteTheme'
import User from '../dataBase/models/user'
import { CustomRequest } from '../types'

const themeMiddleware = async (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
) => {
  if (req.customProperty) {
    await User.findAll({
      where: { userId: JSON.stringify(req.customProperty.id) },
      include: [SiteTheme]
    })
      .then((el: any) => { req.customTheme = el[0].siteTheme.dataValues.themeClass }
      ).catch(() => { req.customTheme = 'default-theme' })
  }
  await next()
}

export default themeMiddleware

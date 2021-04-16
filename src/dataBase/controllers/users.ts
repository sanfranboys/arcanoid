import { Response } from 'express'

import SiteTheme from '../models/siteTheme'
import User from '../models/user'
import { ThemeRequestController } from './types'

class Controller {
  registrationUser = (req: ThemeRequestController, res: Response) => {
    const { userId } = req.body
    User.findOrCreate({
      where: { userId: JSON.stringify(userId) },
      defaults: {
        userId: JSON.stringify(userId),
      },
    })
      .then((response) => {
        res.send(response[0])
      })
      .catch(() => res.status(404).send({}))
  }

  updateTheme = (_req: ThemeRequestController, res: Response) => {
    const { userId, theme } = _req.body
    User.update(
      { theme: JSON.stringify(theme) },
      { where: { userId: JSON.stringify(userId) } }
    )
      .then((el) => res.send(el))
      .catch(() => res.status(404).send({}))
  }

  getUserTheme = (_req: ThemeRequestController, res: Response) => {
    const { userId } = _req.body
    User.findOne({
      where: { userId: JSON.stringify(userId) },
      include: [
        {
          model: SiteTheme,
          attributes: ['themeClass'],
        },
      ],
    })
      .then((el: any) => res.send(el.siteTheme.themeClass))
      .catch(() => res.status(404).send({}))
  }
}
const ControllerUser = new Controller()

export default ControllerUser

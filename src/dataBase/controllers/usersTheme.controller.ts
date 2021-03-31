import { Response } from 'express'

import SiteTheme from '../models/siteTheme';
import UserTheme from '../models/usersTheme'
import { CustomRequestController } from './types';


class Controller {
  registrationUser = (req: CustomRequestController, res: Response) => {
    const { userId } = req.body;
    UserTheme.findOrCreate({
      where: { userId: JSON.stringify(userId) },
      defaults: {
        userId: JSON.stringify(userId)
      }
    })
      .then((response) => {
        const { dataValues }: any = response[0]
        res.send(dataValues)
      })
      .catch(() => res.status(404).send({}));
  }

  updateTheme = (_req: CustomRequestController, res: Response) => {
    const { userId, theme } = _req.body;
    UserTheme.update({ theme: JSON.stringify(theme) },
      { where: { userId: JSON.stringify(userId) } })
      .then((el) => res.send(el))
      .catch(() => res.status(404).send({}))
  };

  getUser = (_req: CustomRequestController, res: Response) => {
    const { userId } = _req.body
    UserTheme.findAll({
      where: { userId: JSON.stringify(userId) },
      include: [SiteTheme]
    })
      .then((el: any) => res.send(el[0].siteTheme.themeClass))
      .catch(() => res.status(404).send({}))
  };
}
const ControllerUserTheme = new Controller()

export default ControllerUserTheme

import { Response } from 'express'

import SiteTheme from '../models/siteTheme';
import UserTheme from '../models/usersTheme'


class Controller {
  registrationUser = (_req: any, res: Response) => {
    const { userId } = _req.body
    UserTheme.create({
      userId: JSON.stringify(userId)
    })
      .then(() => res.send({}))
      .catch(() => res.status(404).send({}));
  }

  updateTheme = (_req: any, res: Response) => {
    const { userId, theme } = _req.body;
    UserTheme.update({ theme: JSON.stringify(theme) },
      { where: { userId: JSON.stringify(userId) } })
      .then((el: any) => res.send(el))
      .catch(() => res.status(404).send({}))
  };

  getUser = (_req: any, res: Response) => {
    const { userId } = _req.body
    UserTheme.findAll({
      where: { userId: JSON.stringify(userId) },
      include: [SiteTheme]
    })
      .then(el => res.send(el))
  };
}
const ControllerUserTheme = new Controller()
export default ControllerUserTheme

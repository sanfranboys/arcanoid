import { Response } from 'express'
import SiteTheme from '../models/siteTheme'


class Controller{
 getAllTheme = (_req:Request, res:Response) => {
  SiteTheme.findAll({
    attributes: [
      'themeName','themeClass'
  ]
  })
  .then((el:any)=>res.send(el))
  .catch(()=>res.status(404).send({}))
  }
}
const ControllerSiteTheme = new Controller()
export default ControllerSiteTheme

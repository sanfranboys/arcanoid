
import { ControllerUser, ControllerSiteTheme } from '../controllers'

const router = require("express").Router();
const bodyParser = require("body-parser");

const routerCustom = (app: any) => {
  app.use(bodyParser.json())

  router.post("/theme", ControllerSiteTheme.getAllTheme);
  router.post("/theme/user", ControllerUser.getUserTheme);
  router.post("/theme/user/registration", ControllerUser.registrationUser);
  router.post("/theme/user/update", ControllerUser.updateTheme);

  app.use("/api/v3", router);
};
export default routerCustom

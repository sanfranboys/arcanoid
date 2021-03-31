
import { ControllerUserTheme, ControllerSiteTheme } from '../controllers'

const router = require("express").Router();
const bodyParser = require("body-parser");

const routerCustom = (app: any) => {
  app.use(bodyParser.json())

  router.post("/theme", ControllerSiteTheme.getAllTheme);
  router.post("/theme/user", ControllerUserTheme.getUser);
  router.post("/theme/user/registration", ControllerUserTheme.registrationUser);
  router.post("/theme/user/update", ControllerUserTheme.updateTheme);

  app.use("/api/v3", router);
};
export default routerCustom

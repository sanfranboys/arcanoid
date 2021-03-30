import contollerSiteTheme from '../controllers/siteTheme.controller'
import contollerUserTheme from '../controllers/usersTheme.controller'

const router = require("express").Router();

export const routerCustom = (app: any) => {

  router.get("/alltheme", contollerSiteTheme.getAllTheme);
  router.get("/user", contollerUserTheme.getUser);
  router.get("/user/registration", contollerUserTheme.registrationUser);
  router.get("/user/update", contollerUserTheme.updateTheme);

  app.use("/api/sitetheme", router);
};

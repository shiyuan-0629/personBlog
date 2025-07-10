import Router from "@koa/router";
import indexController from "./indexController.js";
const router = new Router();

router.get("/",indexController);



export default router;

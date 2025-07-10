import indexController from "./indexController.js"
import createMessageController from "./createMessageController.js";
import Router from "@koa/router";
const router = new Router();

router.get('/',indexController);
router.post('/createMessage',createMessageController)

export default router;
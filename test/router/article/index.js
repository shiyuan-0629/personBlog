import indexController from "./indexController.js"
import getArticleByIdController from "./getArticleByIdController.js"
import Router from "@koa/router";
const router = new Router();

router.get('/',indexController);
router.get("/:mid",getArticleByIdController)


export default router;
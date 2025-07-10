import Router from '@koa/router';
import messagesRouter from "./messages/index.js"
import articleRouter from "./article/index.js"
import noticeRouter from "./notice/index.js"
const router = new Router();

router.use('/messages',
    messagesRouter.routes(),
    messagesRouter.allowedMethods());

router.use('/articles',
    articleRouter.routes(),
    articleRouter.allowedMethods());
    
router.use('/notice',
    noticeRouter.routes(),
    noticeRouter.allowedMethods());

export default router;
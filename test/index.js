import Koa from 'koa';
import router from './router/index.js';
import BodyParser from '@koa/bodyparser';
const app = new Koa();

app.use(BodyParser())
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx => {
    if (!ctx.body) {
        ctx.status = 404
        ctx.body = '404 Not Found'
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


import koaRouter from 'koa-router';

const router = koaRouter();

router.get('/', async (ctx) => {
    ctx.body = 'Hello world';
});

export default router;

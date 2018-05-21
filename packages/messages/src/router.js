import koaRouter from 'koa-router';
import status from 'http-status';

import validate from './utils/validate';
import * as healthcheckHandler from './handlers/healthcheck';
import * as messageHandler from './handlers/messages';
import messageSchema from './schemas/message';
import healthcheckSchema from './schemas/healthcheck';

const router = koaRouter();

router.get(
    '/helloworld',
    async (ctx) => {
        ctx.status = status.OK;
        ctx.body = 'Hello world!';
    },
);

router.get(
    '/messages',
    messageHandler.getMessages,
);

router.post(
    '/messages',
    validate(messageSchema),
    messageHandler.postMessage,
);

router.get(
    '/healthcheck',
    validate(healthcheckSchema),
    healthcheckHandler.getHealthcheck,
);

export default router;

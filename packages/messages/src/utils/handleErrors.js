import status from 'http-status';
import logger from './logger';

export default async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = status.INTERNAL_SERVER_ERROR;
        logger.log('Handle error', { err: err.message });
    }
};

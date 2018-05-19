import logger from './logger';
import status from 'http-status';

export default async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = status.INTERNAL_SERVER_ERROR;
        logger.log('Handle error', { err: err.message });
    }
};

import status from 'http-status';
import logger from './logger';

export default {
    onError: (err, ctx) => {
        ctx.status = status.INTERNAL_SERVER_ERROR;
        logger.log('Body parser Error', { err: err.message });
    },
};

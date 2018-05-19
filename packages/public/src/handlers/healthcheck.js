import status from 'http-status';
import logger from '../utils/logger';

// eslint-disable-next-line
export const getHealthcheck = async (ctx) => {
    try {
        const dependenciesStatus = await Promise.all([
            ctx.state.messagesService.getHealthcheck()
        ]);

        ctx.body = dependenciesStatus;

        if (status.every(e => (e.status === status.OK))) {
            ctx.status = status.OK;
            return;
        }

        ctx.status = status.INTERNAL_SERVER_ERROR;
    } catch (err) {
        logger.log('Healthcheck error', { err: err.message });
        ctx.status = status.INTERNAL_SERVER_ERROR;
        ctx.body = [];
    }
};

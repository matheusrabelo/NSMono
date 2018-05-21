import status from 'http-status';
import logger from '../utils/logger';

export const postMessage = async (ctx) => {
    try {
        const message = await ctx.state.messagesService.create(ctx.message);
        ctx.status = status.CREATED;
        ctx.body = message;
    } catch (err) {
        logger.log('Create message error', { err: err.message });
        ctx.status = status.INTERNAL_SERVER_ERROR;
    }
};

export const getMessages = async (ctx) => {
    try {
        const messages = await ctx.state.messagesService.getAll();
        ctx.status = status.OK;
        ctx.body = messages;
    } catch (err) {
        logger.log('Get messages error', { err: err.message });
        ctx.status = status.INTERNAL_SERVER_ERROR;
    }
};

import * as messagesService from '../services/messages';

export default async (ctx, next) => {
    ctx.state = {
        messagesService,
    };
    await next();
}

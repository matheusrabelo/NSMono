import Joi from 'joi';

export default {
    request: {
        body: {
            cron: Joi.string(),
            text: Joi.string().required(),
        },
    },
    response: {
        body: {
            id: Joi.number(),
            cron: Joi.string(),
            text: Joi.string().required(),
        },
    },
};

import Joi from 'joi';

export default {
    request: {
        body: {
            text: Joi.string().required(),
        },
    },
    response: {
        body: {
            id: Joi.number().required(),
            text: Joi.string().required(),
        },
    },
};

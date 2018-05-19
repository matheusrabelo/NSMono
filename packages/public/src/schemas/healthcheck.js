import Joi from 'joi';

export default {
    request: {},
    response: {
        body: Joi.array().required()
    }
};

import Joi from 'joi';
import status from 'http-status';
import logger from '../utils/logger';

const targetValidate = (schema, target) => {
    const validations = [];
    Object.keys(schema).forEach((field) => {
        const value = schema[field];
        const validation = Joi.validate(target[field], value, { abortEarly: false });
        if (validation && validation.error) {
            const { message } = validation.error;
            validations.push({ field, message });
        }
    });
    return validations;
}

const requestValidate = (schema, ctx) => {
    const validations = targetValidate(schema.request, ctx.request);
    if (validations.length !== 0) {
        ctx.status = status.BAD_REQUEST;
        ctx.body = {
            error: 'Request validation error',
            validations,
        };
        logger.log('Request validate error', { validations });
        return false;
    }
    return true;
};

const responseValidate = (schema, ctx) => {
    const validations = targetValidate(schema.response, ctx.response);
    if (validations.length !== 0) {
        logger.log('Response validate error', { validations });
    }
};

export default schema => async (ctx, next) => {
    const valid = requestValidate(schema, ctx);
    if (valid) {
        await next();
        responseValidate(schema, ctx);
    }
};

import axios from 'axios';
import config from '../config';

const messages = axios.create({
    baseURL: config.MESSAGES_SERVICE_URL,
    timeout: config.MESSAGES_SERVICE_TIMEOUT,
});

export const create = async (message) => {
    return await messages.post('/', message);
};

export const getAll = async () => {
    return await messages.get('/');
};

export const getHealthcheck = async () => {
    const healthcheck = await messages.get('/healthcheck');
    return { name: 'messagesService', status: healthcheck.status };
};

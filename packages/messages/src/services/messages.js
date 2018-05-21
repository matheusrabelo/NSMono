import axios from 'axios';
import status from 'http-status';
import util from 'util';

import config from '../config';
import logger from '../utils/logger';
import * as database from '../database';

export const create = async (message) => {
    throw new Error('not implemented');
};

export const getAll = async () => {
    throw new Error('not implemented');
};

export const getHealthcheck = async () => {
    try {
        await database.query('SELECT NOW()');
        return { name: 'database', status: status.OK };
    } catch (err) {
        logger.log('Messages get healthcheck error', { err: err.message });
        return { name: 'database', status: status.INTERNAL_SERVER_ERROR };
    }
};

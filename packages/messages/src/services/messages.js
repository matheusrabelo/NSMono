import axios from 'axios';
import status from 'http-status';
import util from 'util';
import fs from 'fs';
import path from 'path';

import config from '../config';
import logger from '../utils/logger';
import * as database from '../database';

const createMessageQuery = fs.readFileSync(path.join(__dirname, './queries/create-message.sql')).toString();
const getAllMessagesQuery = fs.readFileSync(path.join(__dirname, './queries/get-all-messages.sql')).toString();

export const create = async (message) => {
    const { text } = message;
    const insertedMessage = await database.query(createMessageQuery, [text]);
    const id = insertedMessage.rows[0].id;
    return Object.assign(message, { id });
};

export const getAll = async () => {
    const messages = await database.query(getAllMessagesQuery);
    return messages.rows;
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

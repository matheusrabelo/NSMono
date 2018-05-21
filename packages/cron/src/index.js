import { CronJob } from 'cron';

import * as sqs from './utils/sqs';
import * as database from './utils/database';
import logger from './utils/logger';

const addCronJobToMessage = (message) => {
    try {
        const job = new CronJob({
            cronTime: message.cron,
            onTick: () => {
                sqs.sendMessage(message, () => {
                    logger.log('New job', { message });
                });
            },
        });
        job.start();
    } catch (err) {
        logger.log('Invalid cron', { err: err.message });
    }
};

database.pool.query('SELECT * FROM messages', (err, res) => {
    if (err) {
        logger.log('Error while trying to start jobs', { err: err.message });
        return;
    }
    const messages = res.rows;
    logger.log('New jobs', { messages });
    messages.forEach(addCronJobToMessage);
});

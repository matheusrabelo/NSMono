import aws from 'aws-sdk';
import consumer from 'sqs-consumer';

import logger from './logger';
import config from '../config';

export const sqs = new aws.SQS();
sqs.config.update({ region: config.SQS_REGION });

export const consume = (callback) => {
    const app = consumer.create({
        queueUrl: config.SQS_QUEUE_URL,
        handleMessage: (message, done) => {
            callback(message.Body);
            done();
        },
        sqs,
    });

    app.on('error', (err) => {
        logger.log('Error while consuming', { err: err.message });
    });

    app.start();
};

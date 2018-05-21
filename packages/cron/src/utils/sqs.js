import aws from 'aws-sdk';
import logger from './logger';
import config from '../config';

export const sqs = new aws.SQS();
sqs.config.update({ region: config.SQS_REGION });

export const sendMessage = (message, callback) => {
    const params = {
        MessageBody: message.text,
        QueueUrl: config.SQS_QUEUE_URL,
        DelaySeconds: config.SQS_DELAY_SECONDS,
    };

    sqs.sendMessage(params, (err) => {
        if (err) {
            logger.log('SQS error', { err: err.message });
            return;
        }
        callback();
    });
};

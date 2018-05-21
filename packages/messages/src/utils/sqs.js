import aws from 'aws-sdk';
import util from 'util';
import logger from './logger';
import config from '../config';

export const sqs = new aws.SQS();
sqs.config.update({ region: config.SQS_REGION });

const asyncSqsSendMessage = util.promisify(sqs.sendMessage).bind(sqs);

export const sendMessage = async (message) => {
    const params = {
        MessageBody: message.text,
        QueueUrl: config.SQS_QUEUE_URL,
        DelaySeconds: config.SQS_DELAY_SECONDS
    };

    return await asyncSqsSendMessage(params);
};

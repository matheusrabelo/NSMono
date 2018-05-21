import aws from 'aws-sdk';
import logger from './logger';
import config from '../config';

aws.config.update({ region: 'us-east-2' });
export const sns = new aws.SNS();

export const publish = (message) => {
    try {
        const params = {
            Message: message,
            MessageStructure: 'raw',
            TopicArn: config.SNS_TOPIC_ARN,
        };
        sns.publish(params, (err) => {
            if (err) {
                logger.log('Error while trying to publish', { err: err.message });
            }
        });
    } catch (err) {
        logger.log('Publish error', { err: err.message });
    }
};

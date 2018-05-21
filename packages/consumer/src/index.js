import * as sqs from './utils/sqs';
import * as sns from './utils/sns';
import logger from './utils/logger';

sqs.consume((message) => {
    logger.log('New message', { message });
    sns.publish(message);
});

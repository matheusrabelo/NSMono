import dotenv from 'dotenv';

dotenv.config();

export default {
    SQS_REGION: process.env.SQS_REGION || 'US-EAST-2',
    SQS_QUEUE_URL: process.env.SQS_QUEUE_URL,
    SNS_REGION: process.env.SNS_REGION || 'US-EAST-2',
    SNS_TOPIC_ARN: process.env.SNS_TOPIC_ARN,
};

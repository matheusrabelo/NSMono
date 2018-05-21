import dotenv from 'dotenv';

dotenv.config();

export default {
    INTERVAL: process.env.INTERVAL,
    RDS_HOST: process.env.RDS_HOST,
    RDS_DATABASE: process.env.RDS_DATABASE,
    RDS_USER: process.env.RDS_USER,
    RDS_PASSWORD: process.env.RDS_PASSWORD,
    RDS_PORT: process.env.RDS_PORT,
    SQS_REGION: process.env.SQS_REGION || 'US-EAST-2',
    SQS_QUEUE_URL: process.env.SQS_QUEUE_URL,
    SQS_DELAY_SECONDS: process.env.SQS_DELAY_SECONDS || '0',
};

import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 3000,
    MESSAGES_SERVICE_URL: process.env.MESSAGES_SERVICE_URL || 'http://localhost:3001',
    MESSAGES_SERVICE_TIMEOUT: process.env.MESSAGES_SERVICE_TIMEOUT || '1000',
};

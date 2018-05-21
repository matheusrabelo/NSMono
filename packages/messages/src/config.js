import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 3000,
    RDS_HOST:  process.env.RDS_HOST,
    RDS_DATABASE: process.env.RDS_DATABASE,
    RDS_USER: process.env.RDS_USER,
    RDS_PASSWORD: process.env.RDS_PASSWORD,
    RDS_PORT: process.env.RDS_PORT,
};

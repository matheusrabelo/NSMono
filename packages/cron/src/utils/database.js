import pg from 'pg';
import logger from '../utils/logger';
import config from '../config';

// eslint-disable-next-line
export const pool = new pg.Pool({
    user: config.RDS_USER,
    host: config.RDS_HOST,
    database: config.RDS_DATABASE,
    password: config.RDS_PASSWORD,
    port: config.RDS_PORT,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        logger.log('Database connection error', { err: err.message });
        return;
    }
    logger.log('Connected with database', res.rows[0].now);
});

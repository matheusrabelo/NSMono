import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import router from './router';
import config from './config';

import logger from './utils/logger';
import handleErrors from './utils/handleErrors';
import setState from './utils/setState';
import bodyParserConfig from './utils/bodyParserConfig';

const app = new Koa();

app.use(handleErrors);
app.use(setState);
app.use(bodyParser(bodyParserConfig));
app.use(router.routes());

app.listen(config.PORT);
logger.log('App listening', { port: config.PORT });

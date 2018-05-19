import Koa from 'koa';
import router from './router';
import * as config from './config';

const app = new Koa();
app.use(router.routes());

app.listen(config.PORT);

// eslint-disable-next-line
console.log(`Listening on ${config.PORT}`);

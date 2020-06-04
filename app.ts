import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { viewEngine, engineFactory, adapterFactory } from "https://deno.land/x/view_engine/mod.ts";
import { PORT } from './configs/index.ts';

import router from './routes/doh.routes.ts';

const app = new Application();


const hbsEngine = await engineFactory.getHandlebarsEngine();
const oakAdapter = await adapterFactory.getOakAdapter();

app.use(async (ctx, next) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/public`
  })
  next();
});


app.use(viewEngine(oakAdapter, hbsEngine, {
  viewRoot: './views',
  viewExt: '.hbs'
}));


app.use(router.routes());
app.use(router.allowedMethods());




await app.listen({
  port: PORT
});
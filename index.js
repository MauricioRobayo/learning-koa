const Koa = require("koa")

const app = new Koa();

app.context.userData = {
  first: 'Mauricio',
  last: 'Robayo',
}

// log
app.use(async (ctx, next) => {
  await next();
  const responseTime = ctx.response.get('X-Response-Time')
  console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`)
})

app.use(async (ctx, next)=> {
  const start = Date.now()
  await next()
  const responseTime = Date.now() - start
  ctx.set(`X-Response-Time`, `${responseTime}ms`)
})

app.use(async (ctx) => {
  ctx.response.body = await ctx.userData;
})

app.listen(3000);

const Koa = require("koa")

const app = new Koa();

app.context.date = new Date();

app.use(ctx => {
  ctx.state.user = 'Mauricio'
  ctx.state.date = new Date();
  ctx.body = `Hello ${ctx.state.user}, ${ctx.date}, ${ctx.state.date}`
})

app.listen(3000);

const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-body");

const tasks = require("./routes/tasks");
const router = require("./routes/tasks");

app.use(bodyParser());
app.use(tasks.routes());
app.use(async ctx => (ctx.body = "Hello World"));


app.listen(5000, () => {
  console.log("Server running at port 5000");
});

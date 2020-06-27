const Router = require('koa-router')
const router = new Router()
const Task = require('../models/Task')

const getTasks = async ctx => {
    await Task.findAll()
    .then(tasks =>  {
        ctx.body = tasks
    })
    .catch (err => { 
        ctx.body = ' error: ' + err 
    })
}

router.get('/api/taks', getTasks)

const postTasks = async ctx => {
    if(!ctx.request.body.task_name) {
        ctx.body = {
            error: 'Bad Data'
        }
    }
    else {
        await Task.create(ctx.request.body)
        .then(data=> {
            ctx.body = data
        })
        .catch(err => {
            ctx.body = 'error: ' +err
        })
    }
}

router.post('./api/task', postTasks)

module.exports = router
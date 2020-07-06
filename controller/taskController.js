const Task = require("../models/Task");

const getTasks = async (ctx) => {
  try {
    const tasks = await Task.findAll();
    ctx.body = tasks;
  } catch (err) {
    ctx.body = " error: " + err;
  }
};

const getTask = async (ctx) => {
  try {
    const tasks = await Task.findOne();
    ctx.body = tasks;
  } catch (err) {
    ctx.body = "Task doesn't exist";
  }
};

const postTasks = async (ctx) => {
  if (!ctx.request.body.task_name) {
    ctx.body = {
      error: "Bad Data",
    };
  } else {
    try {
      const data = await Task.create(ctx.request.body);
      ctx.body = data;
    } catch (err) {
      ctx.body = "error: " + err;
    }
  }
};

const deleteTask = async (ctx) => {
  try {
    await Task.destroy({
      where: {
        id: ctx.params.id,
      },
    });
    ctx.body = { status: "Task Deleted" };
  } catch (err) {
    ctx.body = "error: " + err;
  }
};

const putTask = async (ctx) => {
  if (!ctx.request.body.task_name) {
    ctx.body = {
      error: "Bad Data",
    };
  } else {
    try {
      await Task.update(
        { task_name: ctx.request.body.task_name },
        { where: { id: ctx.params.id } }
      );
      ctx.body = { status: "Task Updated!" };
    } catch (err) {
      ctx.body = "error: " + err;
    }
  }
};
module.exports.getTasks = getTasks;
module.exports.getTask = getTask;
module.exports.postTasks = postTasks;
module.exports.deleteTask = deleteTask;
module.exports.putTask = putTask;

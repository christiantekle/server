const getTasks = async (ctx) => {
    await Task.findAll()
      .then((tasks) => {
        ctx.body = tasks;
      })
      .catch((err) => {
        ctx.body = " error: " + err;
      });
  };
  const getTask = async (ctx) => {
    await Task.findOne({
      where: {
        id: ctx.params.id,
      },
    })
      .then((tasks) => {
        ctx.body = tasks;
      })
      .catch((err) => {
        ctx.body = "Task does not exist";
      });
  };

  const postTasks = async (ctx) => {
    if (!ctx.request.body.task_name) {
      ctx.body = {
        error: "Bad Data",
      };
    } else {
      await Task.create(ctx.request.body)
        .then((data) => {
          ctx.body = data;
        })
        .catch((err) => {
          ctx.body = "error: " + err;
        });
    }
  };

  const deleteTask = async (ctx) => {
    await Task.destroye({
      where: {
        id: ctx.params.id,
      },
    })
      .then(() => {
        ctx.body = { status: "Task Deleted" };
      })
      .catch((err) => {
        ctx.body = "error: " + err;
      });
  }
  const putTask = async (ctx) => {
    if (!ctx.request.body.task_name) {
      ctx.body = {
        error: "Bad Data",
      };
    } else {
      await Task.update(
        { task_name: ctx.request.body.task_name },
        { where: { id: ctx.params.id } }
      )
        .then(() => {
          ctx.body = { status: "Task Updated!" };
        })
        .catch((err) => {
          ctx.body = "error: " + err;
        });
    }
  }
  module.exports.getTasks = getTasks;
  module.exports.getTask = getTask;
  module.exports.postTasks = postTasks;
  module.exports.deleteTask = deleteTask;
  module.exports.putTask = putTask;
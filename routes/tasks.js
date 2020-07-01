const Router = require("koa-router");
const router = new Router();
const Task = require("../models/Task");
const taskController = require("../controller/taskController")


router.get("/api/task", taskController.getTasks);

router.get("/api/task/:id", taskController.getTask);

router.post("./api/task", taskController.postTasks);

router.delete("/api/task/:id", taskController.deleteTask);

router.put("/api/task/:id", taskController.putTask);

module.exports = router;

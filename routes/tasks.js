const Router = require("koa-router");
const router = new Router();
const taskController = require("../controller/taskController")


router.get("/api/tasks", taskController.getTasks);

router.get("/api/tasks/:id", taskController.getTask);

router.post("/api/tasks", taskController.postTasks);

router.delete("/api/tasks/:id", taskController.deleteTask);

router.put("/api/tasks/:id", taskController.putTask);

module.exports = router;

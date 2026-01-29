const express = require("express");
const router = express.Router();
const {
  createTaskController,
  getAllTasksController,
  getTasjkByIdController,
  updateTaskByIdController,
  getTaskbyUserId,
} = require("../controllers/task.controller");

// Route to create a new task
router.post("/add-list", createTaskController);
router.get("/list-all", getAllTasksController);
router.get("/list/:id", getTasjkByIdController);
router.get("/list-by-email/:email", getTaskbyUserId);
router.patch("/list/:id/status", updateTaskByIdController);

module.exports = router;

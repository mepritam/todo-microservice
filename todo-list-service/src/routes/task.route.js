const express = require('express');
const router = express.Router();
const { createTaskController, getAllTasksController, getTasjkByIdController, updateTaskByIdController } = require('../controllers/task.controller');

// Route to create a new task
router.post('/add-list', createTaskController);
router.get('/list-all', getAllTasksController);
router.get('/list/:id', getTasjkByIdController);
router.patch('/list/:id/status', updateTaskByIdController);

module.exports = router;
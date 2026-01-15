const express = require('express');
const router = express.Router();
const { createTaskController, getAllTasksController, getTasjkByIdController, updateTaskByIdController } = require('../controllers/task.controller');

// Route to create a new task
router.post('/user/add-list', createTaskController);
router.get('/user/list-all', getAllTasksController);
router.get('/user/list/:id', getTasjkByIdController);
router.patch('/user/list/:id/status', updateTaskByIdController);

module.exports = router;
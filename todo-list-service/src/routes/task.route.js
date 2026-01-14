const express = require('express');
const router = express.Router();
const { createTaskController, getAllTasksController } = require('../controllers/task.controller');

// Route to create a new task
router.post('/user/add-list', createTaskController);
router.get('/user/list-all', getAllTasksController);

module.exports = router;
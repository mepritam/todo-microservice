const express = require('express');
const router = express.Router();
const { createTaskController } = require('../controllers/task.controller');

// Route to create a new task
router.post('/user/add-list', createTaskController);

module.exports = router;
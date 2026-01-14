const { createTaskService, getAllTasksService } = require('../services/task.service');

// Controller to handle creating a new task
const createTaskController = async (req, res) => {
  try {
    const taskData = req.body;
    const newTask = await createTaskService(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed! Task not created.', error: error.message });
  } 
};

// Controller to handle fetching all tasks
const getAllTasksController = async (req, res) => {
  try {
    const tasks = await getAllTasksService(req?.query || {});
    res.status(200).json(tasks);
  }
  catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Failed! Could not retrieve tasks.' });
  }
}

module.exports = {
  createTaskController,
  getAllTasksController,
};
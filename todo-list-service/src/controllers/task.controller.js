const { createTaskService, getAllTasksService, getTaskbyIdService, updateTaskByIdService } = require('../services/task.service');

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

const getTasjkByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskbyIdService(id);
    res.status(200).json(task);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateTaskByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedTask = await updateTaskByIdService(id, updateData);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed! Task not updated.', error: error.message });
  }
};

module.exports = {
  createTaskController,
  getAllTasksController,
  getTasjkByIdController,
  updateTaskByIdController,
};
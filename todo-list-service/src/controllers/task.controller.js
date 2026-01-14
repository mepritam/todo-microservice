const { createTaskService } = require('../services/task.servcie');

// Controller to handle creating a new task
const createTaskController = async (req, res) => {
  try {

    const taskData = req.body;
    console.log('Received task data:', taskData);
    const newTask = await createTaskService(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  } 
};

module.exports = {
  createTaskController,
};
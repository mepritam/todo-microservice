const { createNewTask } = require('../repositories/list.repository');

const createTaskService = async (taskData) => {
  // add the validations here if needed
  const newTask = await createNewTask(taskData);
  return newTask;
}

module.exports = {
  createTaskService,
};
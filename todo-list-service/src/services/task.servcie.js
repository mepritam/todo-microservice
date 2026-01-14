const { createNewTask, getAllTasks } = require('../repositories/list.repository');

const createTaskService = async (taskData) => {
  const startDate = new Date(taskData.taskStartDate);
  const endDate = new Date(taskData.taskEndDate);
  const requiredFields = ['taskName', 'description', 'taskStartDate', 'taskEndDate', 'totalEffortHours'];

  for (const field of requiredFields) {
    if (!taskData[field]) {
      throw new Error(`Field ${field} is required`);
    }
  }

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error('Invalid date format');
  }

  if (endDate <= startDate) {
    throw new Error('Task end date must be after start date');
  }

  // add the validations here if needed
  if (taskData?.totalEffortHours < 1) {
    throw new Error('Total effort hours must be at least 1');
  }

  // Normalize the data before moving to repository
  const payload = {
    ...taskData,
    taskStartDate: startDate,
    taskEndDate: endDate,
  }
  
  return createNewTask(payload);
}

const getAllTasksService = async (query) => {
  const {
    sortOrder = 'desc',
    sortBy = 'totalEffortHours',
    page = 0,
    limit = 10,
  } = query;

  const sortOptions = {
    page: Number(page),
    limit: Number(limit),
    sortBy,
    sortOrder,
  };

  return getAllTasks({}, sortOptions);
}

module.exports = {
  createTaskService,
  getAllTasksService,
};
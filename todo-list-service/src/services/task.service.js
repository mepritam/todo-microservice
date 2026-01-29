const moment = require("moment");

const {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  getTaskCount,
  getTaskbyUserId,
} = require("../repositories/task.repository");

const { validateUser } = require("../clients/user.client");

const createTaskService = async (taskData) => {
  const startDate = new Date(taskData.taskStartDate);
  const endDate = new Date(taskData.taskEndDate);
  const requiredFields = [
    "taskName",
    "description",
    "taskStartDate",
    "taskEndDate",
    "totalEffortHours",
  ];

  for (const field of requiredFields) {
    if (!taskData[field]) {
      throw new Error(`Field ${field} is required`);
    }
  }

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Invalid date format");
  }

  if (endDate <= startDate) {
    throw new Error("Task end date must be after start date");
  }

  // add the validations here if needed
  if (taskData?.totalEffortHours < 1) {
    throw new Error("Total effort hours must be at least 1");
  }

  // Normalize the data before moving to repository
  const payload = {
    ...taskData,
    taskStartDate: startDate,
    taskEndDate: endDate,
  };

  return createNewTask(payload);
};

const getAllTasksService = async (query) => {
  const {
    sortOrder = "desc",
    sortBy = "totalEffortHours",
    page = 1,
    limit = 10,
    taskStatus,
  } = query;

  const sortOptions = {
    page: Number(page - 1),
    limit: Number(limit),
    sortBy,
    sortOrder,
  };

  const filters = {};
  if (taskStatus) {
    filters.taskStatus = taskStatus;
  }

  return {
    tasks: await getAllTasks(filters, sortOptions),
    totalTasks: await getTaskCount(filters),
    currentPage: Number(page),
    pageSize: Number(limit),
  };
};

const getTaskbyIdService = async (id) => {
  if (require("mongoose").Types.ObjectId.isValid(id) === false) {
    throw new Error("Invalid Task ID format");
  }

  return getTaskById(id);
};

const updateTaskByIdService = async (taskId, updateData) => {
  if (require("mongoose").Types.ObjectId.isValid(taskId) === false) {
    throw new Error("Invalid Task ID format");
  }
  // fetch the current task details
  const taskDetails = await getTaskbyIdService(taskId);
  if (!taskDetails) {
    throw new Error("Invalid task Id");
  }

  const { taskStatus } = updateData;

  if (
    moment(new Date()) > moment(taskDetails?.taskEndDate) &&
    taskStatus !== "Pending"
  ) {
    throw new Error("Task status must be Pending.");
  }

  if (
    moment(new Date()) < moment(taskDetails?.taskEndDate) &&
    taskStatus !== "Completed"
  ) {
    throw new Error(
      "Task status must be Completed as task end date greater than current date.",
    );
  }

  return updateTaskById(taskId, updateData);
};

const getTaskbyUserIdService = async (userId) => {
  const user = await validateUser(userId);
  console.log("Validated user:", user);
  if (!user) {
    throw new Error("User not found");
  }
  return getTaskbyUserId(user?._id);
};

module.exports = {
  createTaskService,
  getAllTasksService,
  getTaskbyIdService,
  updateTaskByIdService,
  getTaskbyUserIdService,
};

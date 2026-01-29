const {
  createTaskService,
  getAllTasksService,
  getTaskbyIdService,
  updateTaskByIdService,
  getTaskbyUserIdService,
} = require("../services/task.service");

// Controller to handle creating a new task
const createTaskController = async (req, res) => {
  try {
    const taskData = req.body;

    // input validation OSWAP: A03 one example
    if (typeof req.body.taskName !== "string") {
      return res.status(400).json({ error: "Invalid input" });
    }

    const newTask = await createTaskService(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed! Task not created.", error: error.message });
  }
};

// Controller to handle fetching all tasks
const getAllTasksController = async (req, res) => {
  try {
    const { tasks, totalTasks, currentPage, pageSize } =
      await getAllTasksService(req?.query || {});
    const response = {
      tasks,
      totalTasks,
      currentPage,
      pageSize,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed! Could not retrieve tasks." });
  }
};

const getTasjkByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskbyIdService(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTaskByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedTask = await updateTaskByIdService(id, updateData);
    res.status(200).json(updatedTask);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed! Task not updated.", error: error.message });
  }
};

const getTaskbyUserId = async (req, res) => {
  try {
    const { email } = req.params;
    console.log("Fetching tasks for userId:", email);
    const tasks = await getTaskbyUserIdService(email);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed! Could not retrieve tasks.",
      error: error.message,
    });
  }
};

module.exports = {
  createTaskController,
  getAllTasksController,
  getTasjkByIdController,
  updateTaskByIdController,
  getTaskbyUserId,
};

const mongoose = require('mongoose');
const Task = require('../models/task.model');

// Function to create new todo list
const createNewTask = async (listData) => {
  const newList = new Task(listData);
  return await newList.save();
};

// function to get all todo lists
const getAllTasks = async (filters = {}, sortOptions) => {
  const { page = 0, limit = 2, sortBy = 'totalEffortHours', sortOrder = 'desc' } = sortOptions;
  
  const sort = {
    [sortBy]: sortOrder === 'asc' ? 1 : -1
  };

  return await Task.find(filters).sort(sort).skip(page * limit).limit(limit);
}

// fucntion to get todo list by id
const getTaskById = async (id) => {
  return Task.findById({ _id: id });
}

// function to update todo list by id
const updateTaskById = async (taskId, updateData) => {
  return Task.findByIdAndUpdate(
    taskId,
    { taskStatus: updateData.taskStatus },
    { new: true }
  )
}

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
};
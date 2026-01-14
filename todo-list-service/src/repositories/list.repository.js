const mongoose = require('mongoose');
const Task = require('../models/task.model');

// Function to create new todo list
const createNewTask = async (listData) => {
  const newList = new Task(listData);
  return await newList.save();
};

module.exports = {
  createNewTask,
};
const mongoose = require('mongoose');

//create a todo list schema

const TaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    taskStartDate: {
      type: Date,
      required: true,
    },
    taskEndDate: {
      type: Date,
      required: true,
    },
    taskStatus: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending',
    },
    totalEffortHours: {
      type: Number,
      required: true
    },
    userId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema);
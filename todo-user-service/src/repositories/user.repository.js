const User = require('../models/user.model');

// find user by email function
const findUserByEmail = async (email) => {
  return User.findOne({ email }).lean();
}

module.exports = { findUserByEmail };
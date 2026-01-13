const userRepository = require('../repositories/user.repository');

const findUserByEmail = async (email) => {
  // validations
  if (!email) {
    // we can validate here other email validation logics if required
    throw new Error('Email is required to find user');
  }
  // calls to repository layer
  return userRepository.findUserByEmail(email);

  // decision making or other business logics can be added here
}

module.exports = { findUserByEmail };
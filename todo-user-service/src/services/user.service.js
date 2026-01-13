const userRepository = require('../repositories/user.repository');

const findUserByEmail = async (email) => {
  if (!email) {
    // we can validate here other email validation logics if required
    throw new Error('Email is required to find user');
  }

  return userRepository.findUserByEmail(email);
}

module.exports = { findUserByEmail };
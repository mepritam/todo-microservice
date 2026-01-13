const userService = require('../services/user.service');

const getUserByEmail = async (req, res, next) => {
  try {
    // handles request inputs
    const { email } = req.params;
    // handles service or business logic calls
    const user = await userService.findUserByEmail(email);
    // handles http specific concerns
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // handles http responses
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { getUserByEmail };
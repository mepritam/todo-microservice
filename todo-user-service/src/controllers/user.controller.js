const userService = require('../services/user.service');

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const user = await userService.findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { getUserByEmail };
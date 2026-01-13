const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');

// GET /users/:email - Get user by email
router.get('/:email', userController.getUserByEmail);

module.exports = router;
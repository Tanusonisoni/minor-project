const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

/**
 * Public Routes
 */
// Register new user
router.post('/register', register);

// Login user
router.post('/login', login);

/**
 * Protected Routes
 * Require valid JWT token
 */
// Get current user info
router.get('/me', authMiddleware, getMe);

module.exports = router;

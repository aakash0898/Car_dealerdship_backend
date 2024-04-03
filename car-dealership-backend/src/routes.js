import express from 'express';
import { login, signup, logout, changePassword } from './controllers.js';

const authRoutes = express.Router();
const commonRoutes = express.Router();
const userRoutes = express.Router();
const dealershipRoutes = express.Router();

authRoutes.post('/login', login);
authRoutes.post('/signup', signup);
authRoutes.post('/logout', logout);
authRoutes.post('/change-password', changePassword);

export { authRoutes, commonRoutes, userRoutes, dealershipRoutes };

/*const express = require('express');
const { login, signup, logout, changePassword } = require('./controllers.js');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);
router.post('/change-password', changePassword);

module.exports = router;

*/
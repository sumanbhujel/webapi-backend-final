const express = require('express');
const AuthController = require('../controllers/auth/AuthController');

const APIROUTER = express.Router();

APIROUTER.post('/signup', AuthController.registerUser);
APIROUTER.post('/login', AuthController.logIn);

module.exports = APIROUTER;

const express = require('express');
const SignInController = require('../controllers/auth/SignInController');
const SignUpController = require('../controllers/auth/SignUpController');

const APIROUTER = express.Router();

APIROUTER.post('/signup', SignUpController.registerUser);
APIROUTER.post('/login', SignInController.logIn);

module.exports = APIROUTER;

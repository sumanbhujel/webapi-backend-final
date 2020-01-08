import express from 'express';
import SignUpController from '../controllers/auth/SignUpController';
import SignInController from '../controllers/auth/SignInController';

const APIROUTER = express.Router();

APIROUTER.post('/signup', SignUpController.registerUser);
APIROUTER.post('/login', SignInController.logIn);

export default APIROUTER;

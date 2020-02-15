const express = require('express');
const AuthController = require('../controllers/auth/AuthController');
const UserController = require('../controllers/UserController');
const ScrapController = require('../controllers/ScrapController');

const APIROUTER = express.Router();

APIROUTER.post('/signup', AuthController.registerUser);
APIROUTER.post('/login', AuthController.logIn);

APIROUTER.get('/user', UserController.viewUsers);
APIROUTER.get('/user/:id', UserController.viewUserById);
APIROUTER.put('/user/:id', UserController.updateUserDetail);
APIROUTER.delete('/user/:id', UserController.deleteUser);

APIROUTER.post('/scrap', ScrapController.addNewScrap);
APIROUTER.get('/scrap', ScrapController.getScrap);
APIROUTER.get('/scrap/:id', ScrapController.viewScrapById);
APIROUTER.put('/scrap/:id', ScrapController.updateScrap);
APIROUTER.delete('/scrap/:id', ScrapController.deleteScrap);

module.exports = APIROUTER;

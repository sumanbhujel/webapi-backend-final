const express = require('express');
const AuthController = require('../controllers/auth/AuthController');
const UserController = require('../controllers/UserController');
const ScrapController = require('../controllers/ScrapController');

const APIROUTER = express.Router();

APIROUTER.post('/signup', AuthController.registerUser);
APIROUTER.post('/login', AuthController.logIn);

APIROUTER.get('/users', UserController.viewUsers);
APIROUTER.get('/users/singleuser/:id', UserController.viewUserById);
APIROUTER.put('/updateuser/:id', UserController.updateUserDetail);
APIROUTER.delete('/deleteuser/:id', UserController.deleteUser);

APIROUTER.post('/addscrap', ScrapController.addScrap);
APIROUTER.post('/addnewscrap', ScrapController.addNewScrap);
APIROUTER.get('/scraps', ScrapController.viewScrap);
APIROUTER.get('/newscraps', ScrapController.getScrap);
APIROUTER.get('/scraps/singleuser/:id', ScrapController.viewScrapById);
APIROUTER.put('/updatescrap/:id', ScrapController.updateScrap);
APIROUTER.delete('/deletescrap/:id', ScrapController.deleteScrap);

module.exports = APIROUTER;

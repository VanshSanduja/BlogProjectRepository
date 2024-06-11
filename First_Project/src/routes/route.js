const express = require('express');
const route = express.Router()
const {createUser,getUserData} = require('../controller/userController');

route.post('/createsUser', createUser);
route.get('/getdata',getUserData);

module.exports = route;

const express = require('express');
const route = express.Router();
const {createUser, getAllUserData, login} = require('../controller/userController.js');
const {createBlog} = require('../controller/blogController.js');
const {authenticate} = require('../middleware/userAuthentication.js');

// <------API Used for Creating a user------>
route.post('/createdData', createUser);
// <------API Used for LogIn a user------>
route.post('/login', login);
// <------API Used for Authenticate a user and Creating a blog------>
route.post('/createBlog', authenticate, createBlog);
// <------API Used for Getting all database data------>
route.get('/getAllData', getAllUserData);


route.all("/*", (req, res) => {
    res.status(404).send({status: false, msg: "URL is not correct, Plz provide a valid URL"})
})

module.exports = route;
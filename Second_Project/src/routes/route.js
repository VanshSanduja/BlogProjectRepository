const express = require('express');
const route = express.Router();
const {createUser, getAllUserData, login} = require('../controller/userController.js');
const {createBlog} = require('../controller/blogController.js');

route.post('/createdData', createUser);
route.get('/getAllData', getAllUserData);
route.post('/createBlog', createBlog);
route.post('/login', login);

route.all("/*", (req, res) => {
    res.status(404).send({status: false, msg: "URL is not correct, Plz provide a valid URL"})
})

module.exports = route;
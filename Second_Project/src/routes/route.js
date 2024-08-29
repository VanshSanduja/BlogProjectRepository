const express = require('express');
const route = express.Router();
const {createUser, getAllUserData, login} = require('../controller/userController.js');
const {createBlog} = require('../controller/blogController.js');
const {getAllBooks} = require('../controller/blogController.js');
const {getBookData} = require('../controller/blogController.js');
const multer = require('multer')
// const {authenticate} = require('../middleware/userAuthentication.js');

const uploadImage = multer({

    storage: multer.diskStorage({})
});

// <------API Used for Creating a user------>
route.post('/createdData', uploadImage.single('ProfileImg'), createUser);
// <------API Used for LogIn a user------>
route.post('/login', login);
// <------API Used for Authenticate a user and Creating a blog------>
route.post('/createBlog', createBlog);
// <------API Used for Getting all database data------>
route.get('/getAllData', getAllUserData);
// <------API Used for Getting all Books data------>
route.get('/getAllBooksData/:category', getAllBooks);

route.get('/books/:getBookId', getBookData);


route.all("/*", (req, res) => {
    res.status(404).send({status: false, msg: "URL is not correct, Plz provide a valid URL"})
})

module.exports = route;
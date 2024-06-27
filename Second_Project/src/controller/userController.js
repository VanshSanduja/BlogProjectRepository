const userModel = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

require('dotenv').config()

exports.createUser = async (req, res) => {
  try {
    const { name, userName, Password, Email } = req.body;

    let validEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (validEmail.test(Email) == false) {
      return res.status(400).send({ msg: "Please provise a valid Email!!!" });
    }

    console.log(`Name: ${name}`);
    console.log(`Username: ${userName}`);
    console.log(`Password: ${Password}`);
    console.log(`Email: ${Email}`);

    if (req.body.length == 0) {
      return res.status(400).send({ msg: "Plz provide data" });
    }

    let checkPassword = await bcrypt.hash(Password, 5);
    req.body.Password = checkPassword;

    const userData = req.body;
    const createdData = await userModel.create(userData);

    return res.status(500).send({ msg: "Data is Created", msg: createdData });
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

exports.getAllUserData = async (req, res) => {
  try {
    const getdata = await userModel.find();
    res
      .status(200)
      .send({ status: true, msg: "Successfully get All Data", data: getdata });
      console.log(getdata);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

exports.login = async(req, res) => {

  try{

    const author = req.body;
    const { Email, Password } = req.body;

    let oldUser = await userModel.findOne({ Email: Email });
    if (!oldUser) { return res.status(400).send({status: false, message: "User Not present in database!!!, Plz SignUp"})};
    
    console.log(oldUser.Password,oldUser.Email);
    
    const checkpasword = await bcrypt.compare(Password.trim(), oldUser.Password);
    if (!checkpasword) {return res.status(400).send({ msg: "Given Password is Incorrect!" })};


    let token = jwt.sign(
      {

        authorId : oldUser._id.toString(),
      },
      process.env.SecretKey_For_Login, {expiresIn: '12h'}
    )

    const userId = oldUser['_id'];

    return res.status(201).send({msg : "User Logged in Successfully!!!", token, userId})

  } catch(error){

    return res.status(500).send({msg: error.message})

  }
};

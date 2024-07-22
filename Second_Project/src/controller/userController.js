const userModel = require('../models/userModel.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

require('dotenv').config()

exports.createUser = async (req, res) => {

  try {
    const data = req.body;

    const {Name, Email, Password} = data;

    let validEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    
      if(Object.keys(data).length == 0) {
      return res.status(400).send({status: false, msg: "Plz Provide Details"});
     }

    if(validEmail.test(Email) == false) {

      return res.status(400).send({msg : "Plz Provide a valid Email"});
    }
    
    let encryptedPassword = await bcrypt.hash(Password, 10);
    data.Password = encryptedPassword; 
    
    let createdData = await userModel.create(data);
    return res.status(201).send({status: true, msg: "Data Created Successfully",data: createdData});
  
  }

  catch(error) {
    return res.status(500).send({msg: error.message});
  }
}

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

  try {
  let loginData = req.body;
  const {Email, Password} = loginData;

  let oldUser = await userModel.findOne({Email : Email});
  if(!oldUser) return res.status(400).send({status: false, msg: "User Not Present with this credentials, Plz SignUp"});

  const checkPassword = await bcrypt.compare(Password.trim(), oldUser.Password);
  if(!checkPassword) return res.status(400).send({status: false, msg: "Password is Incorrect"});
  
  let SignUpToken = jwt.sign(
    {
      userId: oldUser._id.toString(),
    },
    process.env.SecretKey_For_Login, {expiresIn: '24h'}
  )
  
  const userId = oldUser['_id'];
  
  console.log(loginData);
  return res.status(201).send({status: true, msg: "Login successfully", SignUpToken, userId});

}
  catch(error) {
    return res.status(500).send({msg: error.message});
  }
};

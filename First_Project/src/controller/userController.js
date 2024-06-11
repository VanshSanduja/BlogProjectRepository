const userModel = require('../models/useModels');

exports.createUser = async(req, res) => {

    try{
        const{name, userName, Password, Email} = req.body;
        
        let validateEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

        if(validateEmail.test(Email) == false) {
            return res.status(400).send({msg: "plz provide a valid email id"});
            
        }
        console.log(`Name : ${name}`);
        console.log(`Username : ${userName}`);
        console.log(`Password is : ${Password}`);
        console.log(`Email : ${Email}`);

        if(req.body.length == 0) {

            return res.status(400).send({msg:"plz provide data"})
        }
        const userData = req.body;
        const createdData = await userModel.create(userData)

        return res.status(201).send({msg:"Data is Created", msg:createdData})
    }
    catch(error){

        return res.status(500).send({msg:error.message})
    }
}
exports.getUserData = async(req,res)=>{
    try{
        let result = await userModel.find()
        return res.status(200).send({msg:result})
    }
    catch(err) {
        return res.status(500).send({msg:err.massage})}
}

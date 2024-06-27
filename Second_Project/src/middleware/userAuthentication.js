const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authenticate = (req, res, next) => {

    try{
        let token = req.headers["x-api-key"];

        if(!token) return res.status(400).send({status: false, msg: "Token must be present"});

        let decodedToken = jwt.verify(token, process.env.SecretKey_For_Login);

        if(!decodedToken) return res.status(401).send({status: false, msg: "Token is Invalid"})
        
            req.decodedToken = decodedToken;
            next();
    
    }

    catch(error) {

        return res.status(500).send({msg: error.message});
    }
}
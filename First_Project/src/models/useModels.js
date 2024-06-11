const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {

    name: {type:String, required:true, trim:true},
    userName: {type:String, required:true, trim:true},
    Password: {type:String, required:true, trim:true},
    Email: {type:String, required:true, unique:true}
},

    {timestamps: true}
)

module.exports = mongoose.model('userdata', authorSchema);


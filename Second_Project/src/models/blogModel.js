const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema( {

    Title: {type:String, required:true, trim:true},
    AuthorName: {type:String, required:true, trim:true, unique: false},
    Image: {type:String, required:true, trim:true},
    Description: {type:String, required:true, trim:true},
    isDeleted: {type:Boolean, default: false},
}

)

module.exports = mongoose.model('blogdata', blogSchema);
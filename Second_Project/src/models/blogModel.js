const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema( {

    Title: {type:String, required:true, trim:true},
    AuthorName: {type:String, required:true, trim:true, unique: true},
    Image: {type:String, required:true, trim:true},
    Description: {type:String, required:true, trim:true},
}

)

module.exports = mongoose.model('blogdata', blogSchema);
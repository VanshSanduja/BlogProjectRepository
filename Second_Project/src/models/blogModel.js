const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema( {

    Title: {type:String, required:true, trim:true},
    AuthorName: {type:String, required:true, trim:true, unique: false},
    Image: {type:String, required:true, trim:true},
    Description: {type:String, required:true, trim:true},
    UserID: {type: ObjectID, required: false},
    isDeleted: {type:Boolean, default: false},
    Price: {type: Number, required: true},
    Categories: {type: String},
    Delivery: {type: String, default: true},

}

)

module.exports = mongoose.model('blogdata', blogSchema);
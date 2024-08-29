const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.ObjectId;

const authorSchema = new mongoose.Schema(
  {

    Name: {type: String, required: true, trim: true},
    ProfileImg: {type: String, required: true, trim: true},
    Email: {type: String, required: true, unique: true, trim: true},
    Password: {type: String, required: true, trim: true},
    
  },
);

module.exports = mongoose.model('userdata', authorSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    user:String,
    pwd:String,
    phoneNumber:Number,
    email:String
});

module.exports = mongoose.model('User',userSchema);
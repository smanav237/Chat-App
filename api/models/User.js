const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {type:String, unique:true},  // to avoid creation of same username
    password: String,
},{timestamp:true});      // taking timestamp as another object parameter

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

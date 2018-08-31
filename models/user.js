const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username:	String,
    email: String,
    password: String,
    passwordExpiry: timeStamp,
    firstName: String,
    middleName: String,
    lastName: String,
    facebook: String,
    google: String,
    token: Array,
    createdAt: Date,
    updatedAt: Date,
})

const User = mongoose.model('User', userSchema);

module.exports = User;
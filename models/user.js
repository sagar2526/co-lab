const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username:	String,
    email: String,
    password: String,
    password-expiry: timeStamp,
    first-name: String,
    middle-name: String,
    last-name: String,
    facebook: String,
    google: String,
    token: Array,
    createdAt: timeStamp,
    updatedAt: timeStamp,
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
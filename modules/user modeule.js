const mongoose = require('mongoose');

const userschema  = new mongoose.schema({
    name: String,
    email: String
})

module.exports = mongoose.model('user', userschema);

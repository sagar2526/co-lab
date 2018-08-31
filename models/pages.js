const mongoose = require('mongoose')

var pagesSchema = new mongoose.Schema({
    name: String,
    body: String,
    slug: String
})

const Pages = mongoose.model('Pages', pagesSchema);

module.exports = Pages;
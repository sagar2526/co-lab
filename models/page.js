 const mongoose = require('mongoose')

var pageSchema = new mongoose.Schema({
    name: String,
    body: String,
    slug: String
})

const Page = mongoose.model('Pages', pageSchema);

module.exports = Page;
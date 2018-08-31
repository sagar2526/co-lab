const mongoose = require('mongoose')

var ReviewSchema = new mongoose.schema({
   slug: String,
   comment: String,
   rating: Number,
   photo: String,
   title: String,
   location: String,
   createdAt: Date,
   updatedAt: Date

})

const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = Reviews;
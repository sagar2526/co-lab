const mongoose = require('mongoose')

var reviewSchema = new mongoose.Schema({
   slug: String,
   comment: String,
   rating: Number,
   photo: String,
   title: String,
   location: String,
   createdAt: Date,
   updatedAt: Date

})

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;
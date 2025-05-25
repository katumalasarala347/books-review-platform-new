const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  user: String,
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
});

module.exports = mongoose.model('Review', ReviewSchema);

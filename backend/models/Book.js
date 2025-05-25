const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  coverImage: {
    type: String,
    default: 'https://via.placeholder.com/150'
  },
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Book', BookSchema);

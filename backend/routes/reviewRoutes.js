const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET /reviews?bookId=XYZ - reviews for a book
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ bookId: req.query.bookId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /reviews - submit a new review
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

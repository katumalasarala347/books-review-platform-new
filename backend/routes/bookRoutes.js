const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books - all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /books/:id - single book
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /books - add a book (admin only — we skip auth for now)
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);s
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

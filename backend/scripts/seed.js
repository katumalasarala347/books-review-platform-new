const mongoose = require('mongoose');
const Book = require('../models/Book');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Book.deleteMany(); // Clear previous
    await Book.insertMany([
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        description: 'A Handbook of Agile Software Craftsmanship.',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX374_BO1,204,203,200_.jpg',
        rating: 4.8
      },
      {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        description: 'Unearthing the excellence in JavaScript.',
        coverImage: 'https://m.media-amazon.com/images/I/81kqrwS1nNL._SL1500_.jpg',
        rating: 4.2
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        description: 'Journey to mastery in software development.',
        coverImage: 'https://m.media-amazon.com/images/I/41as+WafrFL._SX403_BO1,204,203,200_.jpg',
        rating: 4.7
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Tiny changes, remarkable results.',
        coverImage: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg',
        rating: 4.6
      },
      {
        title: 'Deep Work',
        author: 'Cal Newport',
        description: 'Rules for focused success in a distracted world.',
        coverImage: 'https://images.penguinrandomhouse.com/cover/9781455586691',
        rating: 4.5
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A journey of self-discovery and destiny.',
        coverImage: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
        rating: 4.3
      },
      {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        description: 'A brief history of humankind.',
        coverImage: 'https://m.media-amazon.com/images/I/713jIoMO3UL.jpg',
        rating: 4.7
      },
      {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        description: 'The beginning of the magical journey.',
        coverImage: 'https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg',
        rating: 4.9
      },
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'An epic tale of Middle-earth.',
        coverImage: 'https://m.media-amazon.com/images/I/51EstVXM1UL.jpg',
        rating: 4.9
      },
      {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        description: 'A counterintuitive approach to living a good life.',
        coverImage: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg',
        rating: 4.4
      }
    ]);
    console.log('✅ 10 Books inserted successfully!');
    process.exit();
  })
  .catch(err => console.error(err));

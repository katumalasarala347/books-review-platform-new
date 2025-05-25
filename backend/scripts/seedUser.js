const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      bio: 'This is a demo profile.'
    });
    console.log('Inserted user with ID:', user._id);
    process.exit();
  })
  .catch(err => console.error(err));

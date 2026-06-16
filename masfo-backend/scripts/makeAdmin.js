const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../src/models/User.model');

dotenv.config();

async function makeAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    const email = 'admin@masfo.com'; // Change to your email
    
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`❌ User with email ${email} not found`);
      process.exit(1);
    }
    
    user.role = 'admin';
    await user.save();
    
    console.log(`✅ User ${user.email} is now an ADMIN!`);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

makeAdmin();
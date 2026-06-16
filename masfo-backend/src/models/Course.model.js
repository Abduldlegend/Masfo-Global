const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/600x400?text=Course'
  },
  duration: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: String,
    default: 'Free'
  },
  instructor: {
    name: String,
    bio: String,
    avatar: String
  },
  whatYouWillLearn: [String],
  requirements: [String],
  curriculum: [{
    week: Number,
    title: String,
    topics: [String],
    duration: String
  }],
  students: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
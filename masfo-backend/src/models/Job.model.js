const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  company: {
    type: String,
    required: true
  },
  companyLogo: {
    type: String,
    default: 'https://via.placeholder.com/60x60?text=Company'
  },
  companyDescription: String,
  location: String,
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'],
    required: true
  },
  salary: String,
  salaryMin: Number,
  salaryMax: Number,
  currency: String,
  experience: String,
  skills: [String],
  category: String,
  description: String,
  responsibilities: [String],
  requirements: [String],
  benefits: [String],
  isFeatured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  deadline: Date,
  applicants: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);
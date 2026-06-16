const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  completedLessons: [Number],
  certificateIssued: {
    type: Boolean,
    default: false
  },
  certificateUrl: {
    type: String,
    default: ''
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  completedAt: Date,
  isActive: {
    type: Boolean,
    default: true
  }
});

// Ensure one enrollment per user per course
enrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
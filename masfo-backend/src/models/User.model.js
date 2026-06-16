// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     trim: true
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: 6
//   },
//   phone: {
//     type: String,
//     trim: true
//   },
//   role: {
//     type: String,
//     enum: ['student', 'admin'],
//     default: 'student'
//   },
//   profile: {
//     avatar: { type: String, default: '' },
//     bio: { type: String, default: '' },
//     skills: [String],
//     experience: { type: Number, default: 0 },
//     github: { type: String, default: '' },
//     linkedin: { type: String, default: '' },
//     resume: { type: String, default: '' }
//   },
//   savedJobs: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Job'
//   }],
//   enrolledCourses: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Course'
//   }],
//   refreshToken: {
//     type: String,
//     default: ''
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Hash password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
  
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Compare password method
// userSchema.methods.comparePassword = async function(candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  },
  profile: {
    avatar: { type: String, default: '' },
    bio: { type: String, default: '' },
    skills: [String],
    experience: { type: Number, default: 0 },
    github: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    resume: { type: String, default: '' }
  },
  savedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  refreshToken: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving - FIXED VERSION
// userSchema.pre('save', async function(next) {
//   // Only hash the password if it has been modified (or is new)
//   if (!this.isModified('password')) {
//     return next();
//   }
  
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

userSchema.pre('save', async function() {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return;
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
const Course = require('../models/Course.model');
const Job = require('../models/Job.model');
const User = require('../models/User.model');
const Contact = require('../models/Contact.model');
const Application = require('../models/Application.model');
const Enrollment = require('../models/Enrollment.model');

// ============ COURSE MANAGEMENT ============

// Get all courses (including unpublished)
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({ success: true, data: { courses } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Create new course
const createCourse = async (req, res) => {
  try {
    const { title, slug, description, longDescription, duration, level, category, price, instructor, whatYouWillLearn, requirements, curriculum, image } = req.body;
    
    const course = new Course({
      title,
      slug,
      description,
      longDescription,
      duration,
      level,
      category,
      price,
      instructor,
      whatYouWillLearn,
      requirements,
      curriculum,
      image: image || 'https://via.placeholder.com/600x400?text=Course',
      isPublished: true
    });
    
    await course.save();
    res.status(201).json({ success: true, message: 'Course created successfully', data: { course } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update course
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const course = await Course.findByIdAndUpdate(id, updates, { new: true });
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    res.json({ success: true, message: 'Course updated successfully', data: { course } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    res.json({ success: true, message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ============ JOB MANAGEMENT ============

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json({ success: true, data: { jobs } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Create new job
const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ success: true, message: 'Job posted successfully', data: { job } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update job
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    
    res.json({ success: true, message: 'Job updated successfully', data: { job } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete job
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    
    res.json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ============ USER MANAGEMENT ============

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password -refreshToken').sort({ createdAt: -1 });
    res.json({ success: true, data: { users } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get single user
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select('-password -refreshToken');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.json({ success: true, data: { user } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update user role
const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    
    const user = await User.findByIdAndUpdate(id, { role }, { new: true }).select('-password -refreshToken');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.json({ success: true, message: 'User role updated', data: { user } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ============ CONTACT MESSAGES ============

// Get all contact messages
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: { contacts } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Mark message as read
const markContactAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(id, { isRead: true }, { new: true });
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }
    
    res.json({ success: true, message: 'Message marked as read' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete contact message
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ============ DASHBOARD STATS ============

const getDashboardStats = async (req, res) => {
  try {
    const totalCourses = await Course.countDocuments();
    const totalJobs = await Job.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalEnrollments = await Enrollment.countDocuments();
    const totalApplications = await Application.countDocuments();
    const unreadMessages = await Contact.countDocuments({ isRead: false });
    
    res.json({
      success: true,
      data: {
        totalCourses,
        totalJobs,
        totalUsers,
        totalEnrollments,
        totalApplications,
        unreadMessages
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  // Courses
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  // Jobs
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  // Users
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
  // Contacts
  getAllContacts,
  markContactAsRead,
  deleteContact,
  // Stats
  getDashboardStats
};
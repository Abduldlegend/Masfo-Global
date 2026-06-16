const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const {
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
} = require('../controllers/admin.controller');

// All admin routes require authentication and admin role
router.use(protect, admin);

// Dashboard Stats
router.get('/stats', getDashboardStats);

// Course routes
router.get('/courses', getAllCourses);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

// Job routes
router.get('/jobs', getAllJobs);
router.post('/jobs', createJob);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);

// User routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id/role', updateUserRole);
router.delete('/users/:id', deleteUser);

// Contact routes
router.get('/contacts', getAllContacts);
router.put('/contacts/:id/read', markContactAsRead);
router.delete('/contacts/:id', deleteContact);

module.exports = router;
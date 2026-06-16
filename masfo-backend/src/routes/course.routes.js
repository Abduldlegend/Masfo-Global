const express = require('express');
const router = express.Router();
const { 
  getAllCourses, 
  getCourseBySlug, 
  enrollCourse,
  getUserEnrollments,
  updateProgress
} = require('../controllers/course.controller');
const { protect } = require('../middleware/auth');

router.get('/', getAllCourses);
router.get('/my-enrollments', protect, getUserEnrollments);
router.get('/:slug', getCourseBySlug);
router.post('/:id/enroll', protect, enrollCourse);
router.put('/:courseId/progress', protect, updateProgress);

module.exports = router;
const Course = require('../models/Course.model');
const Enrollment = require('../models/Enrollment.model');

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const { category, level, search } = req.query;
    let filter = { isPublished: true };
    
    if (category && category !== 'all') filter.category = category;
    if (level && level !== 'all') filter.level = level;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    const courses = await Course.find(filter).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: { courses }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get single course
const getCourseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const course = await Course.findOne({ slug, isPublished: true });
    
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }
    
    res.json({
      success: true,
      data: { course }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Enroll in course
const enrollCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    // Check if course exists
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }
    
    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({ userId, courseId: id });
    if (existingEnrollment) {
      return res.status(400).json({
        success: false,
        message: 'Already enrolled in this course'
      });
    }
    
    // Create enrollment
    const enrollment = new Enrollment({
      userId,
      courseId: id
    });
    await enrollment.save();
    
    // Update course student count
    course.students += 1;
    await course.save();
    
    // Add to user's enrolled courses
    await User.findByIdAndUpdate(userId, {
      $addToSet: { enrolledCourses: id }
    });
    
    res.json({
      success: true,
      message: 'Successfully enrolled in course',
      data: { enrollment }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get user's enrolled courses
const getUserEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ userId: req.user.id, isActive: true })
      .populate('courseId');
    
    res.json({
      success: true,
      data: { enrollments }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Update course progress
const updateProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { progress, lessonIndex } = req.body;
    
    const enrollment = await Enrollment.findOne({ userId: req.user.id, courseId });
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }
    
    enrollment.progress = progress;
    if (lessonIndex !== undefined && !enrollment.completedLessons.includes(lessonIndex)) {
      enrollment.completedLessons.push(lessonIndex);
    }
    
    await enrollment.save();
    
    res.json({
      success: true,
      message: 'Progress updated',
      data: { enrollment }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseBySlug,
  enrollCourse,
  getUserEnrollments,
  updateProgress
};
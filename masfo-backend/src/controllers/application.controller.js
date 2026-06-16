const Application = require('../models/Application.model');
const Job = require('../models/Job.model');
const path = require('path');

// Submit job application
const submitApplication = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { coverLetter } = req.body;
    const userId = req.user.id;
    
    // Check if already applied
    const existingApplication = await Application.findOne({ jobId, userId });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied for this job'
      });
    }
    
    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }
    
    // Handle resume upload
    let resumeUrl = '';
    if (req.file) {
      resumeUrl = `/uploads/resumes/${req.file.filename}`;
    }
    
    // Create application
    const application = new Application({
      jobId,
      userId,
      coverLetter,
      resume: resumeUrl
    });
    
    await application.save();
    
    // Update job applicant count
    job.applicants += 1;
    await job.save();
    
    res.json({
      success: true,
      message: 'Application submitted successfully',
      data: { application }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get user's applications
const getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.user.id })
      .populate('jobId')
      .sort({ appliedAt: -1 });
    
    res.json({
      success: true,
      data: { applications }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { submitApplication, getUserApplications };
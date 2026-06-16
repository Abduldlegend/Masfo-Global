const Job = require('../models/Job.model');
const User = require('../models/User.model');

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const { category, type, experience, search } = req.query;
    let filter = { isActive: true };
    
    if (category && category !== 'all') filter.category = category;
    if (type && type !== 'all') filter.type = type;
    if (experience && experience !== 'all') filter.experience = experience;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { skills: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    const jobs = await Job.find(filter).sort({ isFeatured: -1, postedAt: -1 });
    
    res.json({
      success: true,
      data: { jobs }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get single job
const getJobBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const job = await Job.findOne({ slug, isActive: true });
    
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }
    
    res.json({
      success: true,
      data: { job }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Save job for later
const saveJob = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    const user = await User.findById(userId);
    
    if (user.savedJobs.includes(id)) {
      // Remove if already saved
      user.savedJobs = user.savedJobs.filter(jobId => jobId.toString() !== id);
      await user.save();
      return res.json({
        success: true,
        message: 'Job removed from saved',
        saved: false
      });
    } else {
      // Add to saved
      user.savedJobs.push(id);
      await user.save();
      return res.json({
        success: true,
        message: 'Job saved for later',
        saved: true
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get saved jobs
const getSavedJobs = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('savedJobs');
    
    res.json({
      success: true,
      data: { savedJobs: user.savedJobs }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { getAllJobs, getJobBySlug, saveJob, getSavedJobs };
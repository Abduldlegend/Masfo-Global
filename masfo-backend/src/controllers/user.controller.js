const User = require('../models/User.model');
const path = require('path');
const fs = require('fs');

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const { name, phone, bio, skills, experience, github, linkedin } = req.body;
    
    const user = await User.findById(req.user.id);
    
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skills.split(',').map(s => s.trim());
    if (experience) user.profile.experience = experience;
    if (github) user.profile.github = github;
    if (linkedin) user.profile.linkedin = linkedin;
    
    await user.save();
    
    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: { user: user.select('-password') }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Upload avatar
const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }
    
    const avatarUrl = `/uploads/avatars/${req.file.filename}`;
    
    await User.findByIdAndUpdate(req.user.id, {
      'profile.avatar': avatarUrl
    });
    
    res.json({
      success: true,
      message: 'Avatar uploaded successfully',
      data: { avatarUrl }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { updateProfile, uploadAvatar };